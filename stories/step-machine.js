import {assign} from "xstate";

const {createMachine} = require("xstate");
export const stepMachine = createMachine({
    id: 'step',
    initial: 'one',
    states: {
        one: {
            on: { NEXT: 'two' }
        },
        two: {
            on: { NEXT: 'three', PREV: 'one' }
        },
        three: {
            on: { NEXT: 'one', PREV: 'two' }
        }
    } 
  
});

