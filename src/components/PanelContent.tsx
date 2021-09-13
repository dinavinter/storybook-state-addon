import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { List } from "./List";
import {useAddonState, useChannel} from "@storybook/api";
import {ADDON_ID, EVENTS} from "../constants";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

type Results = {
  danger: any[];
  warning: any[];
};

interface PanelContentProps {
  results: Results;
  fetchData: () => void;
  clearData: () => void;
}
interface PanelProps {
  active: boolean;
}

export const PanelWrapper: React.FC<PanelProps> = (props) => {
  const [results, setState] = useAddonState(ADDON_ID, {
    danger: [],
    warning: [],
  });


// https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => setState(newResults),
  });
  
  return <PanelContent
      results={results}
      fetchData={() => {
        emit(EVENTS.REQUEST);
      }}
      clearData={() => {
        emit(EVENTS.CLEAR);
      }}
  />
}

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = ({
  results,
  fetchData,
  clearData,
}) => (
  <TabsState
    initial="overview"
    backgroundColor={convert(themes.normal).background.hoverable}
  >
    <div
      id="overview"
      title="Overview"
      color={convert(themes.normal).color.positive}
    >
      <Placeholder>
        <Fragment>
       Test
        </Fragment>
        <Fragment>
          <RequestDataButton
            secondary
            small
            onClick={fetchData}
            style={{ marginRight: 16 }}
          >
            Request data
          </RequestDataButton>

          <RequestDataButton outline small onClick={clearData}>
            Clear data
          </RequestDataButton>
        </Fragment>
      </Placeholder>
    </div>
    <div
      id="danger"
      title={`${results.danger.length} Danger`}
      color={convert(themes.normal).color.negative}
    >
      <List items={results.danger} />
    </div>
    <div
      id="warning"
      title={`${results.warning.length} Warning`}
      color={convert(themes.normal).color.warning}
    >
      <List items={results.warning} />
    </div>
  </TabsState>
);
