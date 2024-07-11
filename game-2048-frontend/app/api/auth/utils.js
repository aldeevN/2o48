import wretch from "wretch";
import Cookies from "js-cookie";

// Base API setup for making HTTP requests
const apiBack = process.env.BACKEND_API_KEY

const api = wretch(`${apiBack ? apiBack : "http://localhost:8000"}`)
const apiWithAuth = wretch(`${apiBack ? apiBack : "http://localhost:8000"}`)
/**
 * Stores a token in cookies.
 * @param {string} token - The token to be stored.
 * @param {"access" | "refresh"} type - The type of the token (access or refresh).
 */
const storeToken = (token, type) => {
    Cookies.set(type + "Token", token);
};

/**
 * Retrieves a token from cookies.
 * @param {"access" | "refresh"} type - The type of the token to retrieve (access or refresh).
 * @returns {string | undefined} The token, if found.
 */
const getToken = (type) => {
    return Cookies.get(type + "Token");
};

/**
 * Removes both access and refresh tokens from cookies.
 */
const removeTokens = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
};

/**
 * Registers a new user.
 * @param {string} first_name - The first name of the account.
 * @param {string} last_name - The last name of the account.
 * @param {string} username - The username of the account.
 * @param {string} email - The email of the account.
 * @param {string} password_1 - The password for the account.
 * @param {string} password_2 - The password for the account.
 * @returns {Promise} A promise that resolves with the registration response.
 */
const registerApi = (first_name, last_name, username, email, password_1, password_2) => {
    return api.post({ first_name, last_name, username, email, password_1, password_2 }, "/api/v1/game_app/registration");
};
/**
Post new user score
* @param {string} score - User score
* @param {string} token - The token for authenticating.
*/
const postScore = (score) => {
    return apiWithAuth.auth(`Bearer ${getToken("access")}`).post({score},"/api/v1/game_2048/game_score/")
}
/**
 * Logs in a user and stores access and refresh tokens.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} A promise that resolves with the login response.
 */
const login = (email, password) => {
    return api.post({ email, password }, "/api/v1/token/");
};

/**
 * Auth and send feedback on backend
 * @param {string} feedback - The user's email.
 * @returns {Promise} A promise that resolves with the feedback response.
 */
const feedback = (feedback) => {
    return  apiWithAuth.auth(`Bearer ${getToken("access")}`).post({feedback},"/api/v1/game_2048/create_feedback/")
}


const editUser = (first_name,last_name,password) => {
    return  apiWithAuth.auth(`Bearer ${getToken("access")}`).patch({first_name,last_name,password},"/api/v1/user/me")
}
/**
 * Logout a user.
 * @returns {Promise} A promise that resolves with the login response.
 */
const logout = () => {
    removeTokens()
};

/**
 * Refreshes the JWT token using the stored refresh token.
 * @returns {Promise} A promise that resolves with the new access token.
 */
const handleJWTRefresh = () => {
    const refreshToken = getToken("refresh");
    return api.post({ refresh: refreshToken }, "api/v1/token/refresh/");
};

/** 
 * @param {string} email -  The email of the user requesting a password reset.
 * @param {string} code - The code of user requesting a password reset.
 *  @returns {Promise} -
 */
const checkCode =  (email, code) => {
    return  api.post({email, code}, '/api/v1/check_code/me')
}

/**
 * Initiates a password reset request.
 * @param {string} email - The email of the user requesting a password reset.
 * @returns {Promise} A promise that resolves with the password reset response.
 */
const resetPassword =  (email) => {
    return  api.post({ email }, '/api/v1/game_app/reset_password');
};

/**
 * Confirms the password reset with new password details.
 * @param {string} new_password - The new password.
 * @param {string} re_new_password - Confirmation of the new password.
 * @param {string} token - The token for authenticating the password reset request.
 * @param {string} uid - The user ID.
 * @returns {Promise} A promise that resolves with the password reset confirmation response.
 */
const resetPasswordConfirm =  (
    new_password,
    re_new_password,
    token,
) => {
    return  api.post(
        { token, new_password, re_new_password },
        "/api/v1/reset/password/me/"
    );
};

/**
 * Exports authentication-related actions.
 * @returns {Object} An object containing all the auth actions.
 */
export const AuthActions = () => {
    return {
        editUser,
        feedback,
        login,
        resetPasswordConfirm,
        handleJWTRefresh,
        registerApi,
        checkCode,
        resetPassword,
        storeToken,
        getToken,
        logout,
        removeTokens,
        postScore

    };
};