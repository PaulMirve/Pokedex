import {FETCH_POKEMON} from '../actions';

export default (state = {}, { type, payload }) => {
    switch (type) {

    case FETCH_POKEMON:
        return { ...state, ...payload }

    default:
        return state
    }
}
