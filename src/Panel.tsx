import React from "react";
import { AddonPanel } from "@storybook/components";
import {XStateInspectorPanel} from "./components/InspectorPanel";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  
  return (
    <AddonPanel {...props}>
      <XStateInspectorPanel     
      />
    </AddonPanel>
  );
};
