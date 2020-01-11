import { Actions } from "react-native-router-flux";

export const redirectTo = (scene) => {
    try {
        if (Actions.currentScene) Actions.reset(scene);
    } catch (error) {
        throw new Error(error);
    }
};

export const navigateTo = (scene, props = null) => {
    try {
        if (props) {
            Actions.push(scene, props);
        } else {
            Actions[scene].call();
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const navigateTwoPagesBack = (routeName = "app", n = 3) => {
    try {
        const { state: { routes } } = Actions;
        const intermediateRoute = routes.filter(route => route.routeName === routeName).length > 0 ? routes.filter(route => route.routeName === routeName)[0] : {};
        const validRoutes = intermediateRoute.routes || [];
        if (validRoutes.length >= 2) {
            Actions.popTo(validRoutes[validRoutes.length - n].routeName);
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const navigateBack = (scene = null) => {
    try {
        if (scene && typeof scene === "string") {
            Actions.popTo(scene);
        } else {
            Actions.pop();
        }
    } catch (error) {
        throw new Error(error);
    }
};

/**
 * Handels route navigation based on existing route stack.
 * If a route already exist to which we want to navigate to, it goes back in stack to that page
 * else pushses the new route to the stack.
 * @author hari kumar
 * @param {string} routeName - name of the route to navigate to
 * @param {string} routeStack - name of thr toute stack
 */

export const smartNavigate = (routeName = "", props = null, routeStack = "app") => {
    try {
        const { state: { routes } } = Actions;
        const intermediateRoute = routes.filter(route => route.routeName === routeStack).length > 0 ? routes.filter(route => route.routeName === routeStack)[0] : {};
        const validRoutes = intermediateRoute.routes || [];
        const activeRoute = validRoutes.length > 0 ? validRoutes[validRoutes.length - 1].routeName : "";
        const _routes = validRoutes.filter(_route => routeName === _route.routeName);
        if (activeRoute !== routeName) {
            if (_routes.length > 0) {
                navigateBack(routeName, props);
            } else {
                navigateTo(routeName, props);
            }
        }
    } catch (error) {
        throw new Error(error);
    }
};
