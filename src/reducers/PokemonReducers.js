import { FETCH_POKEMONS } from '../actions';

export default (state = [], { type, payload }) => {
    switch (type) {

        case FETCH_POKEMONS:
            const objeto = {};
            payload.forEach((conexion) => {
                objeto[conexion.name] = conexion
            });
            return objeto;
            
        default:
            return state
    }
}
