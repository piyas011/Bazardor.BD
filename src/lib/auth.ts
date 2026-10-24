import { betterAuth } from "better-auth";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URI as string);
const db = client.db("BazarDorBD");

export const auth = betterAuth({
  //...
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    before: createAuthMiddleware(async (context) => {
      if (context.path !== "/update-user") {
        return;
      }

      const body = context.body;
      if (
        !body ||
        typeof body !== "object" ||
        !("name" in body) ||
        body.name === undefined
      ) {
        return;
      }

      const rawName = body.name;
      if (typeof rawName !== "string" || rawName.length > 256) {
        throw new APIError("BAD_REQUEST", {
          message: "নাম ২ থেকে ৮০ অক্ষরের মধ্যে হতে হবে।",
        });
      }

      const name = rawName.trim();
      if (
        name.length < 2 ||
        name.length > 80 ||
        /[\u0000-\u001F\u007F-\u009F]/u.test(name)
      ) {
        throw new APIError("BAD_REQUEST", {
          message:
            "নাম ২ থেকে ৮০ অক্ষরের মধ্যে হতে হবে এবং নিয়ন্ত্রণকারী অক্ষর থাকা যাবে না।",
        });
      }

      body.name = name;
    }),
  },
});
