import React, { useEffect } from "react";
 import { stepMachine } from "./step-machine";
import { interpret } from 'xstate';
import {useMachine} from "@xstate/react";
// import { useMachine } from '@xstate/react';

// const TrafficLightsMachine = stepMachine.withConfig(
//     {
//         actions: {
//             light: (ctx) => {
//                 try {
//                     console.log(ctx)
//                     localStorage.setItem("traffic-lights-xstate", JSON.stringify(ctx));
//                 } catch (e) {
//                     console.error(e);
//                 }
//             }
//         }
//     },
//     // initial state from localstorage
//     { 
//         light: (() => {
//             try {
//                 return localStorage.getItem("traffic-lights-xstate");
//             } catch (e) {
//                 console.error(e);
//                 return [];
//             }
//         })()
//     }
// );

export function TrafficLights() {
    
    // const service = interpret(stepMachine, { devTools: true })
    //     .onTransition((state) => console.log(state))
    //     .start();
    // useMachine(props.machine, { devTools: true });


    const [state, send] = useMachine(stepMachine, { devTools: true });

    // subscribe((state) => {
    //     console.log(state.value);
    // });
    // useHashChange(() => {
    //     send({ type: "SHOW", filter: window.location.hash.slice(2) || "all" });
    // });

    // Capture initial state of browser hash
    useEffect(() => {
        console.log(state)
    }, [state]);

    return (<button onClick={() => send({ type: "NEXT"})}>
        {state.value}
    </button> );
 
       
   
}

 