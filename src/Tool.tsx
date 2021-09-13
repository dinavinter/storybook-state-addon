import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ xstate }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
          xstate: xstate ? undefined : true,
      }),
    [xstate]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={xstate}
      title="Enable xState"
      onClick={toggleMyTool}
    >
      {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
      <Icons icon="lightning" />
    </IconButton>
  );
};
