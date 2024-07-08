import { component$ } from "@builder.io/qwik";
import styles from "./next-steps.module.css";
interface NextSectionProps {
  text: string;
  textBold: string;
  color: string;
  isQuestion: boolean;
}
export default component$<NextSectionProps>(
  ({ text, textBold, color, isQuestion }) => {
    return (
      <div class={`container container-${color} container-center`}>
        <h2>
          {text}
          <br />
          <span class="highlight">{textBold}</span>
          {isQuestion ? "?" : ""}
        </h2>
      </div>
    );
  }
);
