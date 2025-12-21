import Header from "@/components/Header";
import AboutContent from "./content.mdx";

export default function AboutPage() {
  return (
    <main>
      {/* ТИХАЯ ШАПКА */}
     <div className="about-header about-header--top">
  <Header />
</div>


      {/* КОНТЕНТ */}
      <section className="site-frame pt-24 md:pt-28 pb-20">
        <div className="about-container">
          <div className="about-typography">
            <AboutContent />
          </div>
        </div>
      </section>
    </main>
  );
}
