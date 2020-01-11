import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import store from "./configs/store.config";

import Root from "./root";

export const storeIntent = store();

export default class Main extends Component {

    render() {
        return (
            <Provider store={storeIntent.store}>
                <PersistGate loading={null} persistor={storeIntent.persistor}>
                    <Root />
                </PersistGate>
            </Provider>
        );
    }
}