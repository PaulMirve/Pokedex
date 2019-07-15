import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';
import SearchBar from './SearchBar';
import { Container, Grid, Paper } from '@material-ui/core';

import './App.css';
import PokemonInfo from './PokemonInfo';
import PokemonDescription from './PokemonDescription';


//document.body.style = 'background: #CC0000;';

class App extends Component {
    componentDidMount() {
        this.props.fetchPokemons();
    }

    render() {
        return (
            <div className="container">
                <Container >
                    <Grid container spacing={8}>
                        <Grid item xs={8}>
                            <Grid container>
                                <Grid item xs={12} className="search-bar-container">
                                    <SearchBar/>
                                </Grid>
                                <Grid item xs={12} className="pokemon-description-container">
                                    <PokemonDescription/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item component={Paper} xs={4} className="pokemon-info-container">
                            <PokemonInfo/>
                        </Grid>
                    </Grid>

                </Container>
            </div>
        )
    }
}
export default connect(null, { fetchPokemons })(App);