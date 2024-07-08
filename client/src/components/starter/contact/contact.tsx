import { component$, useStyles$ } from "@builder.io/qwik";
import contactStyles from "./contact.module.css?inline";
export default component$(() => {
  useStyles$(contactStyles);
  return (
    <section style="width:70%">
      <form style="display:flex; flex-direction: column">
        <input
          name="name"
          type="text"
          class="feedback-input"
          style="padding:.5rem; width: 50%; margin: .3rem"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input last"
          style="padding:.5rem;width: 50%; margin: .3rem"
          placeholder="Email"
        />

        <textarea
          name="text"
          class="feedback-input"
          style="padding:.5rem;width: 70%; margin: .3rem"
          placeholder="Comment"
        ></textarea>
        <input
          type="submit"
          value="SUBMIT"
          style="width:50%; margin: 5px auto"
        />
      </form>
    </section>
  );
});
