"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AuthenticationButtons = () => {
  const { data: session } = useSession();
  const userInfo = session?.user;
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !profileRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const nameParts = userInfo?.name?.trim().split(/\s+/).filter(Boolean) ?? [];
  const initials =
    nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : (nameParts[0]?.[0]?.toUpperCase() ?? "?");

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      console.error("Failed to sign out:", error);
      return;
    }

    setIsOpen(false);
  };

  return (
    <div>
      {userInfo ? (
        <div ref={profileRef} className="relative inline-block">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={`Open profile menu for ${userInfo.name?.trim() || "user"}`}
            aria-expanded={isOpen}
            aria-controls="authentication-profile-menu"
            className="relative block h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-sm font-semibold text-gray-700 transition hover:ring-2 hover:ring-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {userInfo.image ? (
              <Image
                src={userInfo.image}
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            ) : (
              <span aria-hidden="true">{initials}</span>
            )}
          </button>
          <div
            id="authentication-profile-menu"
            aria-hidden={!isOpen}
            inert={!isOpen}
            className={`absolute right-0 top-full z-50 mt-2 flex w-64 origin-top-right flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition duration-150 ease-out ${
              isOpen
                ? "visible scale-100 opacity-100"
                : "invisible pointer-events-none scale-95 opacity-0"
            }`}
          >
            <div className="mb-3 border-b border-gray-100 pb-3">
              <p className="truncate text-sm font-semibold text-gray-800">
                {userInfo.name?.trim() || "ব্যবহারকারী"}
              </p>
              <p className="truncate text-xs text-gray-500">{userInfo.email}</p>
            </div>

            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              👤 আমার প্রোফাইল
            </Link>

            <button
              onClick={() => void handleSignOut()}
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
            >
              ↩︎ সাইন আউট
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex w-full items-center gap-3 sm:w-auto">
            <Link
              className="flex-1 rounded-lg border border-green-600 px-4 py-2 text-center text-sm font-semibold text-green-700 transition-colors hover:bg-green-50 sm:flex-none"
              href="/login"
            >
              সাইন ইন
            </Link>

            <Link
              className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:flex-none"
              href="/signup"
            >
              সাইন আপ করুন
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthenticationButtons;
