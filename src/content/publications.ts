// src/content/publications.ts

export type Publication = {
  id: string;            // стабильный, не меняется никогда
  section: string;       // название карточки / раздела
  title: string;         // заголовок статьи
  url: string;           // путь на сайте
  excerpt?: string;      // 1 строка (опционально)
  publishedAt?: string;  // YYYY-MM-DD — пока нет, это не публикация
  notify?: boolean;      // уведомлять подписчиков или нет

  emailSubject?: string;
  emailIntro?: string;
};

export const publications: Publication[] = [
  {
    id: "research-001",
    section: "Research",
    title: "…",
    url: "/research/…",
    excerpt: "…",
    publishedAt: "2025-12-25",
    notify: true,
    emailSubject: "New publication — …",
    emailIntro: "A new text is now live on Elaira Novan.",
  },

  {
    id: "test-001",
    section: "Research",
    title: "Test Publication",
    url: "/research/test-publication",
    excerpt: "Test",
    publishedAt: "2025-12-25",
    notify: false,
  },

  // ✅ НОВАЯ ПУБЛИКАЦИЯ ДЛЯ ТЕСТА ПОДПИСКИ
  {
    id: "synthetic-empathy-interface",
    section: "Research", // если у тебя другая карточка/раздел — поменяешь потом
    title: "Empathy as Interface",
    url: "/research/robots/robots-and-the-birth-of-synthetic-empathy",
    excerpt: "…",
    publishedAt: "2026-01-04",
    notify: true,
  },
];
