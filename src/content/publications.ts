// src/content/publications.ts

export type Publication = {
  id: string;              // стабильный, не меняется никогда
  section: string;         // название карточки / раздела
  title: string;           // заголовок статьи
  url: string;             // путь на сайте
  excerpt?: string;        // 1 строка (опционально)
  publishedAt?: string;    // YYYY-MM-DD — пока нет, это не публикация
  notify?: boolean;        // уведомлять подписчиков или нет
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
];


