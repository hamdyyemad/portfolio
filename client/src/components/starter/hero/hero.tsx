import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
// import ImgThunder from "../../../media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <h1 style="font-size:3.4rem;text-align: left;">
        Hey, I'm <span class="highlight">Hamdy</span>.
        <br />
        {/* <ImgThunder class={styles["hero-image"]} alt="Image thunder" /> */}
        Frontend Developer <span class="highlight">React.js</span>
        <br />
      </h1>
      <p>
        <code>npm hire hamdy -g</code>
      </p>
      <div class={styles["button-group"]}>
        <a
          href="https://drive.google.com/file/d/1Jaa_ifZXIqZL5Q_hI-0kbNzWJk74D0C9/view?usp=sharing"
          target="_blank"
          class="button"
        >
          Download CV
        </a>
        <a
          href="mailto:hamdyyemad@aol.com"
          target="_self"
          class="button button-dark"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
});
