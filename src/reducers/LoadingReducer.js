import { IS_LOADING } from "../actions";

export default (state = null, { type, payload }) => {
    switch (type) {

    case IS_LOADING:
        return payload

    default:
        return state
    }
}
