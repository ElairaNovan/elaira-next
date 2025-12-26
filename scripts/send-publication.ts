// scripts/send-publication.ts
import "dotenv/config";

import { publications } from "../src/content/publications";
import { supabaseServer } from "../src/lib/supabase-server";

async function run() {
  // 1. Берём публикации, которые:
  // - имеют publishedAt
  // - notify === true
  const toNotify = publications.filter(
    (p) => p.publishedAt && p.notify === true
  );

  if (toNotify.length === 0) {
    console.log("No publications to notify");
    return;
  }

  for (const pub of toNotify) {
    console.log(`Processing publication: ${pub.id}`);

    // 2. Проверяем, не отправляли ли уже уведомление
    const { data: alreadySent } = await supabaseServer
      .from("notifications_sent")
      .select("publication_id")
      .eq("publication_id", pub.id)
      .maybeSingle();

    if (alreadySent) {
      console.log(`Already notified: ${pub.id}`);
      continue;
    }

    // 3. Получаем активных подписчиков
    const { data: subscribers, error } = await supabaseServer
      .from("subscribers")
      .select("email")
      .eq("status", "active");

    if (error) {
      console.error("Failed to fetch subscribers", error);
      continue;
    }

    // 4. Здесь позже будет отправка email
    console.log(
      `Would send "${pub.title}" to ${subscribers?.length ?? 0} subscribers`
    );

    // 5. Фиксируем факт (idempotency)
    await supabaseServer.from("notifications_sent").insert({
      publication_id: pub.id,
    });

    console.log(`Marked as notified: ${pub.id}`);
  }
}

run()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
