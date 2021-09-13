import React from 'react';

import { Header } from './Header';
import {TrafficLights} from "./Stepper";
import {stepMachine} from "./step-machine";

export default {
  title: 'Example/Stepper',
  component: TrafficLights,
  parameters:{
    machine:stepMachine,
    xstate:true
  }
};

const Template = (args) => <TrafficLights {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {},
};
 
