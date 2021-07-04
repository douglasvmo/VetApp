import React from 'react';
import { createContext } from 'use-context-selector';

export type State = {
    theme: 'dark' | 'light';
} | null;
export type Action = {
    type: 'theme';
    payload: 'dark' | 'light'
}

type InitialState = {
    store: State;
    dispath: React.Dispatch<Action>;
}

export const Context = createContext<InitialState>({ store: null, dispath: () => { } });

export type Props = {
    children: React.ReactNode;
};


function reducer(state: State, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}

export default function ({ children }: Props) {
    const [store, dispath] = React.useReducer(reducer, null);



    return <Context.Provider value={{ store, dispath }}>
        {children}
    </Context.Provider>
}