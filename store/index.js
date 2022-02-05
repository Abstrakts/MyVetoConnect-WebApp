import CookieParser from "cookieparser";

export const state = () => {
    return {
        jwt: null
    }
}
export const mutations = {
    setJwt(state, jwt) {
        state.jwt = jwt
    },
}
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (req.headers.cookie) {
            const parsed = CookieParser.parse(req.headers.cookie)
            try {
                const jwt = parsed.JWT
                commit('setJwt', jwt)
                this.$axios.setToken(jwt, 'Bearer')
            } catch (err) {

            }
        }
    }
}