import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { connect } from 'react-redux';

import './SearchBar.css';
import {fetchPokemon, fetchSpecies, isLoading} from '../actions';

class SearchBar extends Component {

    state = { value: ''}

    renderPokemons = () => {
        return this.props.pokemons.map((pokemon) => {
            return { id: pokemon.url, label: pokemon.name }
        });
    }


    render() {
        return (
            <ReactAutocomplete
                inputProps={{ className:'input' }}
                wrapperProps={{className:'wrapper'}}
                items={this.renderPokemons()}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                        className="items-menu"
                    >
                        {item.label}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={async value => {
                    await this.setState({ value });
                    await this.props.isLoading(true);
                    await this.props.fetchPokemon(this.props.pkm[value].url);
                    await this.props.fetchSpecies(this.props.pokemon.species.url);
                    await this.props.isLoading(false);
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return { pokemons: Object.values(state.pokemons), pkm: state.pokemons, pokemon: state.pokemon }
}

export default connect(mapStateToProps, {fetchPokemon, fetchSpecies, isLoading})(SearchBar);