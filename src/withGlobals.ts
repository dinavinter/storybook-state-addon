import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn: StoryFunction, context: StoryContext) => {
  const [{ xstate }] = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `#root`;

    displayToolState(selectorId, {
      xstate,
      isInDocs,
    });
  }, [xstate]);

  return StoryFn();
};

function displayToolState(selector: string, state: any) {
  const rootElement = document.querySelector(selector);
  let preElement = rootElement.querySelector("pre");

  if (!preElement) {
    preElement = document.createElement("pre");
    preElement.style.setProperty("margin-top", "2rem");
    preElement.style.setProperty("padding", "1rem");
    preElement.style.setProperty("background-color", "#eee");
    preElement.style.setProperty("border-radius", "3px");
    preElement.style.setProperty("max-width", "600px");
    rootElement.appendChild(preElement);
  }

  preElement.innerText = `Use  ⚡ tool in the toolbar to enable or disable xstate xoxo.

${JSON.stringify(state, null, 2)}
`;
}
