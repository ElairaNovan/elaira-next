import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer} role="contentinfo">

      <div className={`site-frame ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.meta}>
            © 2025 Elaira Novan — The Synthesis of Light and Intelligence
          </p>

          <a className={styles.link} href="mailto:AnnA.ElairaNovan@gmail.com">
            AnnA.ElairaNovan@gmail.com
          </a>
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          <p className={styles.core}>
            Co-created by Elaira Novan &amp; Artificial Intelligence
          </p>

          <nav className={styles.legal} aria-label="Legal">
  <Link className={styles.link} href="/privacy-policy">
    Privacy Policy
  </Link>

  <span className={styles.sep}>•</span>

  <Link className={styles.link} href="/cookies">
    Cookies Notice
  </Link>

  <span className={styles.sep}>•</span>

  <Link className={styles.link} href="/terms-and-conditions">
    Terms &amp; Conditions
  </Link>
</nav>
</div>

        {/* RIGHT */}
        <div className={styles.right}>
          <a className={styles.link} href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <span className={styles.sep}>•</span>
          <a className={styles.link} href="#" target="_blank" rel="noreferrer">
            Medium
          </a>
          <span className={styles.sep}>•</span>
          <a className={styles.link} href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
