import React, { Component } from 'react';
import Columns from '../components/columns';
import Star from '../components/star';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


import { detail } from '../actions/movieAction'

class DetailPage extends Component {

    componentWillMount() {
        this.props.detail(this.props.match.params.imdbID);
    }

    render() {
        if (!this.props.list) {
            return (<div></div>);
        }

        const title = this.props.list.Title;
        const plot = this.props.list.Plot;
        const img = this.props.list.Poster;
        const year = this.props.list.Year;
        const runtime = this.props.list.Runtime;
        const genre = this.props.list.Genre;
        const rating = this.props.list.imdbRating;

        return (
            <div>
                <div className="row">
                    <Columns cols="4 4 4">
                        <img src={img} className="Banner grad1" />
                    </Columns>
                    <Columns cols="7 7 7" align="align-left">
                        <div className="row">
                            <div className="Title">{title}</div>
                        </div>
                        <div className="row">
                            <div className="Info">{year} | {runtime} | {genre}</div>
                        </div>
                        <Star rating={rating} />
                        <div className="row">
                            <div className="Sinopse">Sinopse</div>
                        </div>
                        <div className="row">
                            <div className="Plot">{plot}</div>
                        </div>
                    </Columns>
                    <Columns cols="1 1 1" align="align-center">
                        <Link to='/home-page'>
                            <div className="row">
                                <img src="img/close.png" className="closed" />
                                <div className="back">Voltar</div>
                            </div>
                        </Link>
                    </Columns>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({list: state.movie.datail});
const mapDispatchToProps = dispatch => 
    bindActionCreators({ detail }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);