import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  // const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <div class={styles.anchor}>
          <a href="mailto:hamdyyemad@aol.com">
            <span>✉ hamdyyemad@aol.com</span>
          </a>
          <span class={styles.spacer}>|</span>
          <span>Egypt 🇪🇬</span>
        </div>
      </div>
    </footer>
  );
});
