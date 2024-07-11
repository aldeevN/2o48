import wretch from "wretch";
import { AuthActions } from "./api/auth/utils";
import { store } from "./redux/store";
import authSlice from "./redux/slices";

// Extract necessary functions from the AuthActions utility.
const { handleJWTRefresh, storeToken, getToken } = AuthActions();
const apiBack = process.env.BACKEND_API_KEY

/**
 * Configures the API with authentication and automatic token refresh on 401 responses.
 */
const api = () => {
    return (
        wretch(`${apiBack ? apiBack : "http://localhost:8000"}`)
            // Initialize authentication with the access token.
            .auth(`Bearer ${getToken("access")}`)
            // Catch 401 errors to refresh the token and retry the request.
            .catcher(401, async (request) => {
                try {
                    // Attempt to refresh the JWT token.
                    const { access } = (await handleJWTRefresh().json())

                    // Store the new access token.
                    storeToken(access, "access");

                    // Replay the original request with the new access token.
                    return request
                        .auth(`Bearer ${access}`)
                        .fetch()
                        .unauthorized(() => {
                            // Rethrow the error if unauthorized after token refresh.
                            store().dispatch(authSlice.actions.setLogout());
                            window.location.replace("/");
                        })
                        .json();
                } catch (err) {
                    store().dispatch(authSlice.actions.setLogout());
                    window.location.replace("/");
                }
            })
    );
};

/**
 * Fetches data from the specified URL, automatically handling authentication and token refresh.
 * @returns {Promise} The promise resolving to the fetched data.
 * @param url
 */
export const fetcher = (url) => {
    return api().get(url).json();
};