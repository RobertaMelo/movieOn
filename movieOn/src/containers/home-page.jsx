import React, { Component } from 'react';
import Columns from '../components/columns';
import Movie from '../components/movie';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { changeTitle, search } from '../actions/movieAction'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { search } = this.props;
        if (e.key === 'Enter') {
            search();
            return;
        }
        
        if (e.key === 'Escape'){
            e.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Columns cols='4 4 4' align="align-left">
                        <img src="img/movie-on-logo.png" className="movie-On-logo" />
                    </Columns>
                    <Columns cols='4 4 4' align="align-center">
                        <input id='title' className='Rectangle-4' placeholder='Que filme você procura?'
                            onChange={this.props.changeTitle}
                            onKeyUp={this.keyHandler} 
                            value={this.props.title || ''} />
                        <img src="img/hollow.png" className="hollow" />
                    </Columns>
                    <Columns cols='4 4 4' align="align-right">      
                        <img src="img/people.png" className='Oval'/> 
                        <label className='Nome-do-Candidato'>Roberta Melo</label>
                    </Columns>
                </div>
                <div className="row">
                    <Columns cols='12 12 12' align="align-left">
                        <label className='Tendency'>Tendency</label>
                    </Columns>
                </div>
                <Movie />
            </div>
        );
    }
}

const mapStateToProps = state => ({title: state.movie.title});
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeTitle, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);