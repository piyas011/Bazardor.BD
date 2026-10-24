# bazarDor.BD

বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর ও বিভিন্ন বাজারের দামের তথ্য দেখার জন্য তৈরি একটি বাংলা-ভিত্তিক ওয়েব অ্যাপ্লিকেশন।

## ১. প্রজেক্ট পরিচিতি

**নাম:** bazarDor.BD
**ধরন:** বাজারদর ও পণ্য-তথ্যভিত্তিক ওয়েব অ্যাপ্লিকেশন
**ভাষা:** বাংলা
**মূল প্রযুক্তি:** Next.js, React, TypeScript, Better Auth এবং MongoDB

## ২. প্রজেক্ট সম্পর্কে

প্রজেক্টটির হোম পেজে পণ্যের বর্তমান দাম, আগের দিনের তুলনায় দাম বাড়া বা কমার তথ্য এবং পণ্যের তালিকা দেখা যায়। ব্যবহারকারী ক্যাটাগরি অনুযায়ী পণ্য দেখতে পারেন এবং ক্যাটাগরি পেজে দাম অনুসারে তালিকা সাজাতে পারেন। কোনো পণ্যের বিস্তারিত পেজে বর্তমান মূল্য, দামের পরিবর্তন ও API-তে থাকা বাজারভিত্তিক সর্বনিম্ন-সর্বাধিক দামের তথ্য দেখানো হয়।

পণ্য ও ক্যাটাগরির তথ্য `Programming Hero`-এর প্রকাশ্য `BazarDor` API থেকে আনা হয়। অ্যাকাউন্ট ও authentication-এর তথ্য `MongoDB`-তে `Better Auth`-এর মাধ্যমে সংরক্ষিত হয়। পণ্যের তথ্য এই প্রজেক্টের MongoDB database-এ সংরক্ষিত হয় না।

## ৩. প্রজেক্ট তৈরির উদ্দেশ্য

- নিত্যপ্রয়োজনীয় পণ্যের দৈনিক দাম সহজে দেখা।
- দাম বাড়া, কমা বা অপরিবর্তিত থাকার তথ্য একসঙ্গে উপস্থাপন।
- ক্যাটাগরি ও পণ্যভিত্তিক বাজারদরের তথ্য সহজে খুঁজে পাওয়া।
- লগইন করা ব্যবহারকারীর জন্য প্রোফাইল ও account-সংক্রান্ত তথ্য দেখানো।

## ৪. প্রধান বৈশিষ্ট্য

- **হোম পেজ:** আজকের বাজারদরের banner, দাম বেড়েছে এমন পণ্য, দাম কমেছে এমন পণ্য এবং সব পণ্যের তালিকা।
- **ক্যাটাগরি:** API থেকে ক্যাটাগরির তালিকা এবং নির্দিষ্ট ক্যাটাগরির পণ্য দেখা।
- **দাম অনুসারে সাজানো:** ক্যাটাগরি পেজে পণ্যকে ডিফল্ট, কম থেকে বেশি বা বেশি থেকে কম দামে সাজানো।
- **পণ্যের বিস্তারিত:** আজকের দাম, গতকালের তুলনায় পরিবর্তন, এবং API-তে থাকা বাজারগুলোর সর্বনিম্ন ও সর্বাধিক দামের সারাংশ ও তালিকা।
- **অ্যাকাউন্ট:** ইমেইল ও পাসওয়ার্ড দিয়ে signup/login এবং Google বা GitHub দিয়ে social sign-in।
- **প্রোফাইল:** লগইন করা ব্যবহারকারীর নাম, ইমেইল ও পাওয়া গেলে profile image প্রদর্শন।
- **সেশন ও sign out:** Better Auth-এর session ব্যবহার করে লগইন অবস্থা দেখানো এবং sign out করা।
- **রুট সুরক্ষা:** Next.js Proxy দিয়ে হোম, login, signup এবং authentication API ছাড়া অন্য পেজে লগইন যাচাই করা।
- **প্রতিক্রিয়াশীল UI:** বিভিন্ন পর্দার আকারের উপযোগী layout, loading skeleton এবং custom 404 পেজ।

## ৫. ব্যবহৃত প্রযুক্তি ও টুলস

| প্রযুক্তি/লাইব্রেরি | ব্যবহার |
| --- | --- |
| `Next.js 16.4.2` | App Router, পেজ, server-rendered data fetching এবং Proxy |
| `React 19.3.0` | UI component ও client-side interaction |
| `TypeScript` | application ও API data-এর type নির্ধারণ |
| `Tailwind CSS 4` | component ও responsive layout-এর styling |
| `Better Auth` | email/password এবং Google/GitHub authentication, session |
| `@better-auth/mongo-adapter` | Better Auth-এর সঙ্গে MongoDB সংযোগ |
| `MongoDB` ও `mongodb` | authentication database সংযোগ |
| `lucide-react`, `react-icons` | icon |
| `react-marquee-text` | marquee text effect |
| `ESLint 9`, `eslint-config-next` | lint ও code quality check |
| `npm` | dependency ও script পরিচালনা |

## ৬. UI/UX Design ও Functionality Development-এ আমার ভূমিকা

- **UI/UX Design:** প্রজেক্টের UI/UX design এবং visual layout তৈরিতে AI-এর সাহায্য নেওয়া হয়েছে।
- **Functionality Development:** প্রজেক্টের functionality, application logic এবং feature implementation আমি নিজে করেছি। Authentication, API integration, data handling, route protection এবং অন্যান্য behavior-এর বিবরণ এই repository-তে বাস্তবে থাকা code অনুযায়ী লেখা হয়েছে।

Design-এ AI-এর সহায়তা নেওয়া হয়েছে; এর অর্থ functionality-ও AI তৈরি করেছে—এমন দাবি করা হচ্ছে না।

## ৭. প্রজেক্টের Folder Structure

```text
.
├── public/
│   ├── images/
│   │   └── bazar-hero.png
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── api/auth/[...all]/route.ts
│   │   ├── category/[categoryID]/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── products/[productID]/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthenticationButtons.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── HeaderSection/
│   │   │   ├── Categories.tsx
│   │   │   ├── Date.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Marquee.tsx
│   │   ├── MainSection/
│   │   │   ├── Banner.tsx
│   │   │   ├── PriceDecreasedToday.tsx
│   │   │   └── PriceIncreasedToday.tsx
│   │   ├── Product/
│   │   │   ├── AllProduct.tsx
│   │   │   ├── AllProductsCard.tsx
│   │   │   ├── CategoryProductList.tsx
│   │   │   ├── DecreasedProductCard.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductSorting.tsx
│   │   └── Skeletons/
│   │       └── LoadingSkeletons.tsx
│   ├── lib/
│   │   ├── auth-client.ts
│   │   └── auth.ts
│   ├── types/
│   │   ├── CategoryType.ts
│   │   └── Product.ts
│   └── proxy.ts
├── .env                 # স্থানীয় environment file; Git-এ উপেক্ষিত
├── next.config.ts
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── AGENTS.md
```

### গুরুত্বপূর্ণ ফাইল ও ফোল্ডার

- `src/app/page.tsx` — হোম পেজ; বাইরের API থেকে পণ্যের তালিকা নিয়ে হোমের section-গুলোতে পাঠায়।
- `src/app/category/[categoryID]/page.tsx` — নির্দিষ্ট ক্যাটাগরির পণ্য ও দামের সাজানোর UI।
- `src/app/products/[productID]/page.tsx` — পণ্য ও বাজারভিত্তিক দামের বিস্তারিত।
- `src/app/login/`, `src/app/signup/` — login ও signup পেজ।
- `src/app/profile/page.tsx` — session থেকে বর্তমান ব্যবহারকারীর profile তথ্য দেখায়।
- `src/app/api/auth/[...all]/route.ts` — Better Auth-এর Next.js handler; `GET` ও `POST` authentication request পরিচালনা করে।
- `src/proxy.ts` — লগইনবিহীন request-এর জন্য protected page থেকে `/login`-এ redirect করে।
- `src/lib/auth.ts` — Better Auth server configuration, MongoDB adapter ও OAuth provider configuration।
- `src/lib/auth-client.ts` — browser/client-এ ব্যবহারযোগ্য Better Auth client ও auth methods।
- `src/types/` — product ও category API data-এর TypeScript type।
- `src/components/` — authentication, header/navigation, product card, banner, footer, তালিকা ও loading UI।
- `public/` — logo এবং hero image-এর মতো static asset।
- `next.config.ts` — Next.js, image domain ও অন্যান্য project configuration।

## ৮. প্রজেক্টটি লোকালি চালানোর নিয়ম

নিচের ধাপগুলো অনুসরণ করে development server চালু করুন:

```bash
npm install
npm run dev
```

এরপর browser-এ [http://localhost:3000](http://localhost:3000) খুলুন। Authentication ও OAuth পরীক্ষা করতে হলে নিচের environment variable-গুলো ঠিকভাবে configure করতে হবে।

Production build স্থানীয়ভাবে চালানোর জন্য:

```bash
npm run build
npm run start
```

Lint চালানোর জন্য:

```bash
npm run lint
```

## ৯. Installation ও Setup

### পূর্বশর্ত

- সমর্থিত `Node.js` installation
- `npm`
- Better Auth-এর জন্য সংযোগযোগ্য MongoDB database
- Google এবং GitHub OAuth ব্যবহার করতে সংশ্লিষ্ট provider-এর credentials
- `Programming Hero BazarDor` API-তে network access

### ধাপ

১. Repository clone করে project directory-তে যান।

```bash
git clone https://github.com/piyas011/Bazardor.BD.git
cd bazardor
```

২. Dependency ইনস্টল করুন।

```bash
npm install
```

৩. Project root-এ `.env.local` ফাইল তৈরি করে প্রয়োজনীয় environment variable যোগ করুন। `.env*` ফাইল Git-এ উপেক্ষিত থাকে; আসল credential কখনো repository-তে commit করবেন না।

৪. Development server চালু করুন।

```bash
npm run dev
```

## ১০. Environment Variables Configuration

`src/lib/auth.ts` ও `src/lib/auth-client.ts`-এ ব্যবহৃত variable-এর নাম:

| Variable | ব্যবহার |
| --- | --- |
| `BETTER_AUTH_MONGODB_URI` | Better Auth-এর MongoDB connection URI |
| `BETTER_AUTH_URL` | browser-side Better Auth client-এর base URL; একই origin-এ চললে code অনুযায়ী এটি ঐচ্ছিক |
| `GOOGLE_CLIENT_ID` | Google OAuth provider-এর client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth provider-এর secret |
| `GITHUB_CLIENT_ID` | GitHub OAuth provider-এর client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth provider-এর secret |

স্থানীয় `.env.local` ফাইলে নিজস্ব মান বসানোর নমুনা:

```dotenv
BETTER_AUTH_MONGODB_URI=<নিজের-মোংগোডিবি-সংযোগ-URI>
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=<নিজের-গুগল-ক্লায়েন্ট-ID>
GOOGLE_CLIENT_SECRET=<নিজের-গুগল-ক্লায়েন্ট-সিক্রেট>
GITHUB_CLIENT_ID=<নিজের-গিটহাব-ক্লায়েন্ট-ID>
GITHUB_CLIENT_SECRET=<নিজের-গিটহাব-ক্লায়েন্ট-সিক্রেট>
```

উপরের placeholder-গুলোকে আসল credential দিয়ে বদলাতে হবে। `BETTER_AUTH_MONGODB_URI` এবং OAuth credentials-এর আসল মান README বা version control-এ প্রকাশ করবেন না। MongoDB database-এর নাম `src/lib/auth.ts`-এ `BazarDorBD` নির্ধারিত আছে।

## ১১. Authentication System

- Server-side configuration `src/lib/auth.ts`-এ `betterAuth` এবং `@better-auth/mongo-adapter` দিয়ে তৈরি।
- Better Auth-এর `emailAndPassword` সক্রিয়; signup ও login form `src/lib/auth-client.ts` থেকে `signUp.email` ও `signIn.email` ব্যবহার করে।
- Google ও GitHub social provider configure করা আছে। Google login/signup-এ account বাছাইয়ের জন্য `prompt=select_account` পাঠানো হয়।
- Client session দেখার জন্য `useSession`, account থেকে বের হওয়ার জন্য `signOut` ব্যবহৃত হয়।
- Better Auth-এর API handler `src/app/api/auth/[...all]/route.ts`-এ সংযুক্ত।
- `src/proxy.ts` হোম `/`, `/login`, `/signup` এবং `/api/auth` endpoint-গুলোকে public রাখে। অন্যান্য page request-এ `auth.api.getSession` দিয়ে session যাচাই করে; session না থাকলে `/login`-এ redirect করে।
- Next.js static/image asset এবং extension-যুক্ত ফাইল Proxy matcher থেকে বাদ থাকে।
- Proxy-র session যাচাই route-level gate; সংবেদনশীল data বা operation-এর ক্ষেত্রে সংশ্লিষ্ট server/API স্তরেও অনুমোদন যাচাই করা উচিত।

## ১২. API ও Database Integration

### বাজারদরের API

প্রজেক্টের page ও component থেকে নিচের public endpoint-গুলোতে request পাঠানো হয়:

| Endpoint | ব্যবহার |
| --- | --- |
| `https://openapi.programming-hero.com/api/bazardor/products` | হোম পেজ, marquee ও পণ্য তালিকার data |
| `https://openapi.programming-hero.com/api/bazardor/categories` | ক্যাটাগরির তালিকা |
| `https://openapi.programming-hero.com/api/bazardor/products?category=<categoryID>` | নির্দিষ্ট ক্যাটাগরির পণ্য |
| `https://openapi.programming-hero.com/api/bazardor/products/<productID>` | একক পণ্যের বিস্তারিত ও বাজারভিত্তিক দাম |

Response-গুলো `src/types/Product.ts` ও `src/types/CategoryType.ts`-এ সংজ্ঞায়িত type অনুযায়ী ব্যবহার করা হয়। API থেকে পাওয়া বাজারের `min` ও `max` মান থেকে product detail page-এ সর্বনিম্ন ও সর্বাধিক দাম দেখানো হয়। গড়ের প্রদর্শিত হিসাবটি বাজারগুলোর `max` মানের গড়।

### Database

MongoDB কেবল Better Auth adapter-এর মাধ্যমে authentication-সংক্রান্ত user, account ও session data-র জন্য configure করা হয়েছে। বাজারদরের product/category data আলাদা করে MongoDB-তে লেখা হয় না; তা API থেকেই আসে।

## ১৩. ব্যবহারের নির্দেশিকা

1. হোম পেজে আজকের দাম ও পরিবর্তন অনুযায়ী সাজানো পণ্য দেখুন।
2. navigation থেকে কোনো ক্যাটাগরি বেছে নিয়ে ক্যাটাগরির পণ্য দেখুন।
3. ক্যাটাগরি পেজের sort control ব্যবহার করে দাম কম থেকে বেশি বা বেশি থেকে কম সাজান।
4. পণ্যের card নির্বাচন করে তার বর্তমান দাম, দামের পরিবর্তন ও বাজারভিত্তিক তথ্য দেখুন।
5. profile ও account menu ব্যবহার করতে login করুন; নতুন account-এর জন্য signup পেজ ব্যবহার করুন।
6. Google বা GitHub social sign-in বেছে নিলে সংশ্লিষ্ট provider-এর ধাপ অনুসরণ করুন।

## ১৪. বর্তমান সীমাবদ্ধতা

- পণ্যের তথ্য বাইরের API-র প্রাপ্যতা ও response-এর ওপর নির্ভরশীল; API ব্যর্থ হলে স্থানীয় product database বা পূর্ণ offline fallback নেই।
- API fetch-গুলোর জন্য সর্বত্র স্বতন্ত্র, ব্যবহারকারী-বান্ধব error state বাস্তবায়িত নেই।
- দাম অনুসারে sorting ক্যাটাগরি পেজে আছে; সব পণ্যের তালিকায় search, filter বা sort control নেই।
- profile page-এ `/profile/edit` link আছে, কিন্তু বর্তমান `src/app`-এ edit page route নেই।
- Footer-এ কয়েকটি navigation link আছে, যেগুলোর সংশ্লিষ্ট page route বর্তমান project structure-এ নেই।
- Google/GitHub OAuth চালাতে provider dashboard ও environment credential সঠিকভাবে configure করতে হবে।
- বাজারের দাম উৎস API থেকে আসে; code-এ আলাদা করে দাম হালনাগাদের সময় বা নির্ভুলতার নিশ্চয়তা নির্ধারণ করা নেই।

## ১৫. ভবিষ্যৎ উন্নয়নের সম্ভাবনা

- বাজারদরের API error ও empty response-এর জন্য স্পষ্ট UI এবং retry ব্যবস্থা যোগ করা।
- সব পণ্যের তালিকায় search, category filter ও sorting যোগ করা।
- profile edit route ও কার্যকর profile update flow তৈরি করা।
- Footer-এর অসম্পূর্ণ link-গুলোর জন্য বাস্তব page তৈরি করা অথবা অপ্রযোজ্য link সরানো।
- API data validation, loading/error state ও দাম হালনাগাদের সময় আরও স্পষ্টভাবে দেখানো।
- প্রয়োজনে ভবিষ্যতে বাজারদরের data caching বা নিজস্ব database storage বিবেচনা করা।

## ১৬. লেখক ও অবদান

প্রজেক্টের functionality ও application logic-এর development করেছেন project owner/developer। UI/UX design এবং visual layout তৈরিতে AI-এর সহায়তা নেওয়া হয়েছে। এই README-তে বর্ণিত feature ও প্রযুক্তি repository-তে থাকা বাস্তব implementation অনুসারে উল্লেখ করা হয়েছে।
