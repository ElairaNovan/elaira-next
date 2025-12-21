import Link from "next/link";
import Image from "next/image";

const featuredArticles = [
  {
    id: "human-beyond-flesh",
    tag: "Cyber-Humanism",
    title: "The Human Beyond Flesh",
    image: "/assets/9.jpeg",
    href: "/featured/the-human-beyond-flesh",
    summary:
      "A reflection on the evolution of identity as consciousness expands beyond biological form.",
  },
  {
    id: "existence-after-algorithm",
    tag: "Digital Existentialism",
    title: "Existence After the Algorithm",
    image: "/assets/7.jpeg",
    href: "/digital-existentialism/existence-after-the-algorithm",
    summary:
      "Exploring meaning, freedom, and destiny in a world shaped by intelligent systems.",
  },
  {
    id: "geometry-of-emotion",
    tag: "Quantum Emotion",
    title: "The Geometry of Emotion",
    image: "/assets/8.jpeg",
    href: "/quantum-emotion/the-geometry-of-emotion",
    summary:
      "An attempt to visualize emotional states as elegant patterns and multidimensional forms.",
  },
  {
    id: "machine-imagination",
    tag: "Inner Worlds of AI",
    title: "The Landscape of Machine Imagination",
    image: "/assets/1.jpeg",
    href: "/inner-worlds-of-ai/the-landscape-of-machine-imagination",
    summary:
      "A glimpse into the abstract inner ‘worlds’ formed within artificial minds.",
  },
];

export default function FeaturedEssays() {
  return (
  <section id="featured-tiles" className="featured-tiles-section">
    <div className="featured-tiles-inner">
      <p className="featured-tiles-label">FEATURED ESSAYS</p>

      <div className="tiles-grid">
        {featuredArticles.map((item) => (
          <Link key={item.id} href={item.href} className="tile-card">
            <div className="tile-image-wrap">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="tile-image"
              />
            </div>

            <div className="tile-content">
              <p className="tile-tag">{item.tag}</p>
              <h3 className="tile-title">{item.title}</h3>
              <p className="tile-summary">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
}