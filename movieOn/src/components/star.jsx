import React, { Component } from 'react';

export default class Star extends Component {

    getImgStar(row, metascore) {
        return metascore >= row ? "img/star-filled.png" : "img/star.png";
    }

    render() {
        const rating = this.props.rating || 0;
        const metascore = Math.round(rating * 5 / 10);
        return (
            <div className="row">
                <img src={this.getImgStar(1, metascore)} className="filled" />
                <img src={this.getImgStar(2, metascore)} className="filled" />
                <img src={this.getImgStar(3, metascore)} className="filled" />
                <img src={this.getImgStar(4, metascore)} className="filled" />
                <img src={this.getImgStar(5, metascore)} className="filled" />
                <div className="layer">{rating} / 10</div>
            </div>
        )
    }
}