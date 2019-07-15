import { FETCH_SPECIES } from '../actions';

export default (state = {}, { type, payload }) => {
    switch (type) {

    case FETCH_SPECIES:
        return { ...state, ...payload }

    default:
        return state
    }
}
