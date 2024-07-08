import { component$, useStyles$ } from "@builder.io/qwik";
import mySkillsStyles from "./mySkills.css?inline";
const features = [
  {
    name: "Web Designer",
    description:
      "I combine my artistic vision with my technical skills to create visually appealing and user-friendly websites.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-pencil xs-hidden"
        viewBox="0 0 16 16"
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
      </svg>
    ),
  },
  {
    name: "Web Developer",
    description:
      "I'm specialized in building and maintaining websites and web applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-code-slash xs-hidden"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
    ),
  },
  {
    name: "Critical Thinker",
    description:
      "I analyze and evaluate information objectively to form well-reasoned judgments or decisions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        fill="currentColor"
        height="24"
        class="bi bi-patch-question-fill xs-hidden"
        viewBox="0 0 16 16"
      >
        <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627" />
      </svg>
    ),
  },
  {
    name: "Creative",
    description:
      "I have the ability to generate original ideas, concepts, and solutions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-lightbulb-fill xs-hidden"
        viewBox="0 0 16 16"
      >
        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
  },
];

export default component$(() => {
  useStyles$(mySkillsStyles);
  return (
    <section class="feature-section">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 xs-full-width">
        <div class="mx-auto max-w-2xl lg:text-center">
          {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <h4 class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
            <span class="underline-green">Frontend</span> developer proficient
            in <span class="underline-green">React.js</span>
          </h4>
          <p class="text-lg leading-8 ">
            Skilled in building responsive, cross-browser compatible UI
            components and applications. Adept at leveraging state management
            libraries and integrating RESTful APIs. <br />
            Passionate about delivering high-quality, user-centric solutions.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl xs-full-width">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} class="relative pl-16 feature-container">
                <dt class="text-base font-semibold leading-7 ">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 xs-hidden">
                    {feature.icon}
                    {/* < aria-hidden="true" class="h-6 w-6 text-white" /> */}
                  </div>
                  {feature.name}
                </dt>
                <dd class="mt-2 text-base leading-7 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
});
