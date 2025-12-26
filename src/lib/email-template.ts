// src/lib/email-template.ts

type EmailTemplateInput = {
  siteName?: string;          // "Elaira Novan"
  subject: string;            // тема письма
  intro: string;              // короткий текст (1-2 предложения)
  title: string;              // заголовок публикации
  url: string;                // ссылка на публикацию (полная https://...)
  unsubscribeUrl: string;     // ссылка на отписку (полная https://...)
};

export function buildPublicationEmail(input: EmailTemplateInput) {
  const siteName = input.siteName ?? "Elaira Novan";

  const safeTitle = input.title?.trim() || "New publication";
  const safeIntro = input.intro?.trim() || "A new text is now live.";
  const safeUrl = input.url?.trim() || "#";
  const safeUnsub = input.unsubscribeUrl?.trim() || "#";

  // То, что отображается как "preview" в почтовиках (рядом с темой)
  const preheader = `${safeIntro} — ${safeTitle}`.slice(0, 140);

  const text = [
    safeIntro,
    "",
    safeTitle,
    safeUrl,
    "",
    `Unsubscribe: ${safeUnsub}`,
    "",
    `© ${new Date().getFullYear()} ${siteName}`,
  ].join("\n");

  const html = `<!doctype html>
<html>
  <body style="margin:0; padding:0; background:#0b0f18; color:#e9f3ff; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;">
    <!-- Preheader (hidden) -->
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
      ${escapeHtml(preheader)}
    </div>

    <div style="max-width:640px; margin:0 auto; padding:32px 20px;">
      <div style="opacity:0.75; font-size:12px; letter-spacing:0.18em; text-transform:uppercase;">
        ${escapeHtml(siteName)}
      </div>

      <h1 style="margin:14px 0 10px; font-size:22px; line-height:1.35;">
        ${escapeHtml(safeTitle)}
      </h1>

      <p style="margin:0 0 18px; color:rgba(233,243,255,0.82); line-height:1.7; font-size:15px;">
        ${escapeHtml(safeIntro)}
      </p>

      <a href="${escapeAttr(safeUrl)}"
         style="display:inline-block; padding:12px 16px; border-radius:12px; background:#1b2a44; color:#e9f3ff; text-decoration:none; font-size:14px;">
        Read the publication →
      </a>

      <div style="margin-top:22px; padding-top:18px; border-top:1px solid rgba(159,179,217,0.22);">
        <p style="margin:0; color:rgba(233,243,255,0.55); font-size:12px; line-height:1.6;">
          If you no longer want these emails, you can
          <a href="${escapeAttr(safeUnsub)}" style="color:#9fb3d9; text-decoration:none;">unsubscribe here</a>.
        </p>
      </div>
    </div>
  </body>
</html>`;

  return { subject: input.subject, html, text };
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(s: string) {
  // для href
  return escapeHtml(s);
}
