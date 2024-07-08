import { component$, useStyles$ } from "@builder.io/qwik";
import myProjectsStyles from "./myProjects.css?inline";
// import project1 from "/project1.webp";
const features = [
  {
    id: "techsouq",
    name: "Techsouq",
    description: "Multlingual E-commerce Website",
    tags: ["MERN", "Redux", "Tailwindcss"],
    img_src: "https://i.postimg.cc/jqcQ4pPd/project1.png",
    repo_link: "https://github.com/hamdyyemad/Techsouq",
    website_link: "https://techsouq.vercel.app",
  },
];

export default component$(() => {
  const github_logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
  const link_logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-link-45deg"
      style="padding-left:5px"
      viewBox="0 0 16 16"
    >
      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
    </svg>
  );
  useStyles$(myProjectsStyles);
  return (
    <>
      <div class="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 width-full xs-col-1">
        {features.map((feature) => (
          <div class="group block" key={feature.name}>
            <div
              class="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl"
              style="display:flex; flex-direction:column"
            >
              <a href="https://postimages.org/" target="_blank">
                <img
                  width="2400"
                  height="3000"
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                  src={feature.img_src}
                  alt={feature.name}
                />
              </a>

              <div
                class="pt-4"
                style="align-self: start; display:flex; flex-direction:column"
              >
                <div style="display:flex; align-self: start; justify-content:start; align-items:center">
                  <h3
                    style="margin-right:auto"
                    class=" font-medium text-lg before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100"
                  >
                    {feature.name}
                  </h3>
                  <div style="margin-left:auto; align-self:end; justify-self:end; padding-left: 2rem">
                    <a href={feature.repo_link}>{github_logo}</a>
                    <a href={feature.website_link}>{link_logo}</a>
                  </div>
                </div>
                <p class="mt-1 text-gray-600">{feature.description}</p>

                <div class="mt-3 flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      class="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
