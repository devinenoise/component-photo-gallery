import React, { Component } from "react";


export default class ImageItem extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2 className="creature">{this.props.image.title}</h2>
                <p className="horns">{this.props.image.horns}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.image.url}
                    src={this.props.image.url} />
            </div>
            <p className="description">{this.props.image.description}</p>
        </li>
    }
}
