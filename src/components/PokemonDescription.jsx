import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, Paper, CircularProgress } from '@material-ui/core';

import './PokemonDescription.css';

class PokemonDescription extends Component {

    state = { value: '' }

    handleChange = (e, value) => {
        this.setState({ value: value });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.species.name !== this.props.species.name) {
            const generations = this.props.species.flavor_text_entries.filter((entry) => {
                if (entry.language.name === 'en') {
                    return entry;
                } else {
                    return '';
                }
            });
            this.setState({ value: generations[0].version.name });
        } else {
            return '';
        }
    };

    renderTabs = () => {
        const { flavor_text_entries } = this.props.species;
        return (
            <div style={{ width: '100%' }}>
                <Tabs className="tabs" value={this.state.value} style={{ width: '100%' }} onChange={this.handleChange} variant="scrollable" scrollButtons="auto">
                    {
                        flavor_text_entries.map((entry, index) => {
                            if (entry.language.name === 'en') {
                                return (
                                    <Tab className="tab" key={index} value={entry.version.name} label={entry.version.name} />
                                );
                            } else {
                                return '';
                            }
                        })
                    }
                </Tabs>
            </div>
        );
    }

    renderDescription = () => {
        const { flavor_text_entries } = this.props.species;
        return flavor_text_entries.map((entry, index) => {
            if (entry.language.name === 'en') {
                if (entry.version.name === this.state.value) {
                    return (
                        <Paper className="description" key={index}>{entry.flavor_text}</Paper>
                    );
                } else {
                    return '';
                }
            } else {
                return '';
            }
        });
    }


    render() {
        if (this.props.species.flavor_text_entries) {
            if (this.props.isLoading === false) {
                return (
                    <div>
                        {this.renderTabs()}
                        {this.renderDescription()}
                    </div>
                )
            } else {
                return <div className="circular-progress"><CircularProgress /></div>
            }
        } else {
            return ('');
        }
    }
}

const mapStateToProps = (state) => {
    return { species: state.species, isLoading: state.isLoading }
}

export default connect(mapStateToProps, {})(PokemonDescription);


