import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Routes from "./routes";

const propTypes = {
    isLoggedIn: PropTypes.bool
};

const defaultProps = {
    isLoggedIn: false
};

class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Routes />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

Root.propTypes = propTypes;

Root.defaultProps = defaultProps;

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
