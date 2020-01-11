import NetInfo from "@react-native-community/netinfo";
import Config from "react-native-config";


export default async (url, method = "GET", reqBody = null, headers = {}, statusCode = 200) => {
    try {
        const URL = `${Config.SERVER_URL}${url}`;
        const body = reqBody && JSON.stringify(reqBody);

        const reqHeader = { ...headers };

        const fetchParams = { method, headers: reqHeader };

        if ((method === "POST" || method === "PUT") && !body) {
            throw new Error("Request body required");
        }

        if (body && method !== "GET") {
            fetchParams.body = body;
            fetchParams.headers["Content-Type"] = "application/json";
        }
        if (__DEV__) console.log(URL, fetchParams);

        const fetchPromise = fetch(URL, fetchParams);

        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Request timeout");
            }, 5000);
        });

        const isConnected = await NetInfo.fetch().then(state => {
            return state.isConnected;
        });

        if (isConnected) {
            const response = await Promise.race([fetchPromise, timerPromise]);
            const jsonResponse = await response.json();
            console.log({ response, jsonResponse });
            if (response.status === statusCode) {
                return jsonResponse;
            }
            throw new Error(`API request failed with status code ${response.status}`);
        }

        throw new Error("Internet connection failed.");

    } catch (err) {
        throw new Error(err);
    }
};
