import Link from "next/link";

export default function UnsubscribePage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const status = searchParams?.status ?? "success";

  const copy =
    status === "success"
      ? {
          title: "You’re unsubscribed",
          text: "You will no longer receive publication updates from Elaira Novan.",
        }
      : status === "already"
      ? {
          title: "Already unsubscribed",
          text: "This unsubscribe link has already been used.",
        }
      : status === "expired"
      ? {
          title: "Link expired",
          text: "This unsubscribe link has expired. If you still want to unsubscribe, use the link from a recent email.",
        }
      : {
          title: "Invalid link",
          text: "This unsubscribe link is not valid.",
        };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-[42rem] w-full">
        <h1 className="text-3xl font-semibold text-white">{copy.title}</h1>
        <p className="mt-4 text-white/70 leading-relaxed">{copy.text}</p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
