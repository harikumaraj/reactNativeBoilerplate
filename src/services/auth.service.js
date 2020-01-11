import fetch from "./api";

export const login = (payload) => {
    return fetch("/login", "POST", payload);
}