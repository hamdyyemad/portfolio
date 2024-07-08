import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Skills from "../components/starter/skills/skills";
import Techs from "../components/starter/techs/techs";
import Hero from "../components/starter/hero/hero";
import Projects from "../components/starter/projects/projects";
// import Contacts from "../components/starter/contact/contact";
import NextSection from "../components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <div style="display:grid">
      <Hero />

      <NextSection
        text="Why Hire"
        textBold="Me"
        color="purple"
        isQuestion={true}
      />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container container-center container-spacing-xl">
        <Skills />
        <div role="presentation" class="ellipsis"></div>
      </div>

      {/* */}
      <NextSection
        text="Projects"
        textBold="Contributed"
        color="green"
        isQuestion={false}
      />
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container container-center container-spacing-xl bg-change">
        <Projects />
        <div role="presentation" class="ellipsis"></div>
      </div>

      {/*  */}
      <NextSection
        text="Technologies"
        textBold="Used"
        color="orange"
        isQuestion={false}
      />
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div
        class="container container-center container-spacing-xl"
        style="padding-left:0"
      >
        <Techs />
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
      </div>

      {/* <Contacts /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hello World, it's Hamdy Emad",
  meta: [
    {
      name: "Hamdy Emad's Portofolio - Frontend web developer (React.js)",
      content: "Hamdy Emad a frontend web developer (React.js) from Egypt",
    },
  ],
};
