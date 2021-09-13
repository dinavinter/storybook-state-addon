import {addons, types} from "@storybook/addons";

import {ADDON_ID, TOOL_ID, PANEL_ID} from "../constants";
import {Tool} from "../Tool";
import {Panel} from "../Panel";
import {Tab} from "../Tab";
import {AddonPanel} from "@storybook/components";
import {XStateInspectorPanel} from "../InspectorPanel";
import React from "react";

// Register the addon
addons.register(ADDON_ID, () => {
    // Register the tool
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: "My addon",
        match: ({viewMode}) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
        render: Tool,
    });

    // Register the panel
    // addons.add(PANEL_ID, {
    //   type: types.PANEL,
    //   title: "My addon",
    //   match: ({ viewMode }) => viewMode === "story",
    //   render: Panel,
    // });

    // Register the tab
    addons.add(PANEL_ID, {
        type: types.TAB,
        title: "xState Machine",
        //👇 Checks the current route for the story
        route: ({storyId}) => `/xstate/${storyId}`,
        //👇 Shows the Tab UI element in myaddon view mode
        match: ({viewMode}) => viewMode === "xstate",
        render: Tab,
    });

    // Register the panel
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: "xState Inspector",
        paramKey: "xstate",
        render: ({active, key}) => (
            <AddonPanel active={!!active} key={key}>
                <XStateInspectorPanel/>
            </AddonPanel>
        ),
    });


});
