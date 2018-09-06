import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import { detail } from '../actions/movieAction';

const Movie = props => {


    const renderMovies = () => {
        const movieList = props.list || undefined;
        if (!movieList) {
            return (
                <div className='col-xs-12 col-sm-12 col-md-12'>
                    <h5>Dados não encontrados!</h5>
                </div>
            );
        }
    
        return movieList.map(movie => (
            <div key={movie.imdbID} className='col-xs-1 align-center Movie'>
                <Link to={`/detail-page/${movie.imdbID}`}>
                    <img src={movie.Poster} className='Bitmap' />
                </Link>
            </div>
        ));
    }

    return (
        <div className='row'>
            {renderMovies()}
        </div>
    )
}

const mapStateToProps = state => ({list: state.movie.list});
const mapDispatchToProps = dispatch => bindActionCreators({ detail }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Movie);