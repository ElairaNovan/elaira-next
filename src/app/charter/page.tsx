import Header from "@/components/Header";
import CharterContent from "./content.mdx";

export default function CharterPage() {
  return (
    <main className="charter-skin">
      {/* ТИХАЯ ШАПКА (как в About) */}
     <div className="about-header about-header--top">
  <Header />
</div>


      {/* КОНТЕНТ */}
      <section className="site-frame pt-24 md:pt-28 pb-20">
        <div className="about-container">
          <div className="about-typography charter-typography">
            <CharterContent />
          </div>
        </div>
      </section>
    </main>
  );
}
