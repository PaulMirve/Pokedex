import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, Grid, CircularProgress } from '@material-ui/core';

import './PokemonInfo.css';

class PokemonInfo extends Component {


    typeColors = {
        normal: '#A8A878',
        fighting: '#C03028',
        flying: '#A890F0',
        poison: '#A040A0',
        ground: '#E0C068',
        rock: '#B8A038',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F8D030',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#7038F8',
        fairy: '#EE99AC',
    }

    renderTypes = () => {
        const { types } = this.props.pokemon
        if (types.length > 1) {
            return (
                <div>
                    <Chip className="chip" label={types[0].type.name} style={{ backgroundColor: this.typeColors[types[0].type.name] }} />
                    <Chip className="chip" label={types[1].type.name} style={{ backgroundColor: this.typeColors[types[1].type.name] }} />
                </div>
            );
        } else {
            return (
                <Chip className="chip" label={types[0].type.name} style={{ backgroundColor: this.typeColors[types[0].type.name] }} />
            );
        }
    }

    renderAbilities = () => {
        const { abilities } = this.props.pokemon;
        return abilities.map((ability, index) => {
            return <div key={index}>{ability.ability.name}</div>
        });
    }


    render() {
        const { name, sprites, height, weight } = this.props.pokemon;
        if (this.props.pokemon.name) {
            if (this.props.isLoading === false) {
                return (
                    <Grid item xs={12}>
                        <h1 className="pokemon-name">{name.toUpperCase()}</h1>
                        <img className="pokemon-img" src={sprites.front_default} alt="" />
                        <div>{this.renderTypes()}</div>
                        <h4 className="subtitle">Abilities:</h4>
                        <div>{this.renderAbilities()}</div>
                        <h4 className="subtitle">Height:</h4>
                        <div>{height}</div>
                        <h4 className="subtitle">Weight:</h4>
                        <div>{weight}</div>
                    </Grid>
                )
            } else {
                return <div className="circular-progress"><CircularProgress/></div>
            }
        } else {
            return (
                <div>Select a Pokémon</div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return { pokemon: state.pokemon, isLoading: state.isLoading }
}

export default connect(mapStateToProps, {})(PokemonInfo);