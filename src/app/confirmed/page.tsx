// src/app/confirmed/page.tsx
import Link from "next/link";

export default function ConfirmedPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const status = searchParams?.status ?? "confirmed";

  const copy =
    status === "confirmed"
      ? {
          title: "Subscription confirmed",
          text: "Thank you for subscribing to Elaira Novan. You will now receive updates when new publications appear.",
        }
      : status === "already"
      ? {
          title: "Already confirmed",
          text: "This subscription has already been confirmed.",
        }
      : status === "expired"
      ? {
          title: "Link expired",
          text: "This confirmation link has expired. Please subscribe again to receive a new link.",
        }
      : {
          title: "Invalid link",
          text: "This confirmation link is not valid. Please subscribe again.",
        };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-[42rem] w-full">
        <h1 className="text-3xl font-semibold text-white">{copy.title}</h1>
        <p className="mt-4 text-white/70 leading-relaxed">{copy.text}</p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
          >
            Back to home
          </Link>

          {status !== "confirmed" && (
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 hover:opacity-90 transition"
            >
              Subscribe again
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
