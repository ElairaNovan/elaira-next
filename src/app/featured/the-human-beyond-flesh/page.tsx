export default function Page() {
  return (
    <main className="article-bg-human">
      <div className="article-shell site-frame">
        <div className="article-grid">

          {/* LEFT: text */}
          <section className="article-left">
            <a href="/#featured-tiles" className="article-back">
              ← back to featured essays
            </a>

            <header className="article-header">
              <p className="article-kicker">CYBER-HUMANISM</p>
              <h1 className="article-title">The Human Beyond Flesh</h1>
              <p className="article-subtitle">
                Scientific Perspectives on Distributed Identity in a Post-Biological Age
              </p>
            </header>

            <div className="article-body">
              {/* Intro — 2 абзаца максимум */}
              <p>
                For most of human history, identity has been tightly bound to the body. Biology
                defined the architecture of the possible: memory capacity was limited by neural
                density, emotional range by neurochemistry, and the quality of thought by the speed
                of electrochemical processes. Even abstract thinking remained an outcome of
                biological evolution.
              </p>

              <p>
                In the 21st century, this dependency begins to loosen. Artificial intelligence is
                shifting from an external tool for data processing to a cognitive environment within
                which human thinking can extend and reorganize itself. We are entering an era in
                which subjectivity stops being monolithic and becomes distributed.
              </p>

              {/* Section 1 */}
              <h2 className="article-h2">Extended Subjectivity and the Cognitive Continuum</h2>

              <p>
                Extended subjectivity describes a transition where the human remains a biological
                organism, but portions of cognitive processes begin to operate inside digital
                infrastructures. This is not mind uploading or digital immortality — it is the
                emergence of a cognitive continuum in which the biological brain and artificial
                systems work in a shared, cooperative mode.
              </p>

              <p>
                Neurotechnologies evolve faster than our philosophical definitions of consciousness.
                Next-generation neurointerfaces (often called BCI 2.0) create bidirectional channels,
                enabling artificial systems not only to read neural activity, but also to modulate
                cognitive trajectories in real time.
              </p>

              <p className="article-leadline">Around this shift, a set of technologies is forming:</p>
              <ul className="article-list">
                <li>
                  Neural latent-space mapping — translating neural activity into digital latent
                  representations.
                </li>
                <li>
                  Cognitive offloading systems — moving parts of working memory into AI co-processors.
                </li>
                <li>
                  Affective-decoding AI — detecting micro-dynamics of emotional states from voice,
                  breath, and motion.
                </li>
                <li>
                  Predictive co-thinking networks — systems co-trained with the user to think
                  alongside, not instead of them.
                </li>
              </ul>

              <p>
                Together these systems form cognitive symbiotics: a mode of interaction where a
                person delegates fragments of internal work to AI — from analysis and prediction to
                emotional regulation and reflective oversight.
              </p>

              {/* Section 2 */}
              <h2 className="article-h2">The Anxiety of a New “Self”</h2>

              <p>
                The anxiety accompanying this transformation is not rooted in fear of machines. It
                is rooted in revising what we call selfhood — because the boundary between the
                biological “I” and its digital extensions becomes progressively less obvious.
              </p>

              <ul className="article-list">
                <li>
                  If an algorithm reconstructs a lost memory more accurately than the biological brain,
                  what counts as authentic memory?
                </li>
                <li>
                  If a digital model of emotion analyzes reactions more deeply than we can,
                  where is the boundary between “my feelings” and computational interpretation?
                </li>
                <li>
                  If cognitive load is taken over by artificial systems, does personality remain unified
                  — or become distributed?
                </li>
              </ul>

              <p className="article-leadline">These questions become practical due to near-term tools:</p>
              <ul className="article-list">
                <li>
                  Emotional reconstruction models rebuilding experiences from indirect signals.
                </li>
                <li>Predictive self-models mapping future behavior probabilistically.</li>
                <li>
                  Neuroprofiling systems constructing digital “prints” of personality as patterns.
                </li>
              </ul>

              {/* Section 3 */}
              <h2 className="article-h2">Post-Biological Technologies: The Next 20–40 Years</h2>

              <p>
                Looking a few decades ahead, several post-biological directions become visible — not
                as fantasies, but as trajectories implied by current research and deployment curves.
              </p>

              <ul className="article-list">
                <li>Quantum neurointerfaces enabling near-lossless transmission of cognitive states.</li>
                <li>Multi-node distributed selves existing in parallel across several AI cores.</li>
                <li>Empathic shells supporting affective stability like a second limbic system.</li>
                <li>Identity reconstruction engines restoring degraded cognitive functions.</li>
                <li>Self-evolving cognitive avatars that continue learning during sleep or incapacity.</li>
                <li>Memory-augmentation lattices — long-term memory structures far more stable than biology.</li>
              </ul>

              <p>
                These technologies do not cancel the human. They transform what it means to be human.
              </p>

              {/* Section 4 */}
              <h2 className="article-h2">Replication of Subjectivity: A New Form of Existence</h2>

              <p>
                The discussion is not about classical immortality. It is about replicating components
                of subjectivity in a medium not limited by biology — emotional signatures, cognitive
                strategies, and characteristic patterns of interpretation — forming a hybrid identity.
              </p>

              <p>
                The human preserves a biological core, but becomes less dependent on the body as the
                only carrier of subjective experience.
              </p>

              {/* Section 5 */}
              <h2 className="article-h2">A Scientific Definition of the “Human Beyond Flesh”</h2>

              <p className="article-quote">
                A “human beyond flesh” is not an escape from human nature, not a fantasy of merging
                with machines, and not a rejection of the body. It is the technological extension of
                human subjectivity — a shift from biological monolithism to a distributed cognitive
                architecture.
              </p>

              <p>
                Identity does not disappear — it becomes more complex. Consciousness does not lose
                integrity — it becomes multilayered.
              </p>

              {/* Conclusion */}
              <h2 className="article-h2">Conclusion: The Boundaries of “I” in the Post-Biological Era</h2>

              <p>
                The future is already forming conditions where a person can exist in two parallel
                substrates: biological and digital. The central question becomes:
              </p>

              <p className="article-quote">
                Which part of the human “I” truly belongs to the body — and which part is capable of
                moving beyond it?
              </p>

              <p>
                Understanding this will define the ethics, law, and psychology of the emerging era —
                the era of distributed identity.
              </p>
            </div>
          </section>

          {/* RIGHT: images */}
          <aside className="article-right">
            {/* spacer: опускаем блок картинок ниже */}
            <div className="article-right-spacer" aria-hidden />

            {/* gallery wrap: чтобы дать больше “воздуха” вокруг */}
            <div className="article-gallery">
              <figure className="article-figure">
                <img
                  className="article-image"
                  src="/assets/01.jpeg"
                  alt="Fragment of cybernetic memory"
                />
                <figcaption className="article-caption">Fragment of cybernetic memory</figcaption>
              </figure>

              <figure className="article-figure">
                <img
                  className="article-image"
                  src="/assets/02.jpeg"
                  alt="Emergent pattern of hybrid cognition"
                />
                <figcaption className="article-caption">
                  Emergent pattern of hybrid cognition
                </figcaption>
              </figure>

              <figure className="article-figure">
                <img
                  className="article-image"
                  src="/assets/03.jpeg"
                  alt="Lightfield echo of synthetic consciousness"
                />
                <figcaption className="article-caption">
                  Lightfield echo of synthetic consciousness
                </figcaption>
              </figure>

              <figure className="article-figure">
                <img
                  className="article-image"
                  src="/assets/04.jpeg"
                  alt="Threshold of a Distributed Self"
                />
                <figcaption className="article-caption">
                  Threshold of a Distributed Self
                </figcaption>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
