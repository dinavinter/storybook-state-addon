import React from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS, PARAM_KEY } from "./constants";
import { PanelContent } from "./components/PanelContent";
import { useParameter } from '@storybook/api';
import {XStateInspectorPanel} from "./components/InspectorPanel";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
 
   
const [results, setState] = useAddonState(ADDON_ID, {
    danger: [],
    warning: [],
});


// https://storybook.js.org/docs/react/addons/addons-api#usechannel
const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => setState(newResults),
});
  return (
    <AddonPanel {...props}>
      <XStateInspectorPanel     
      />
    </AddonPanel>
  );
};
