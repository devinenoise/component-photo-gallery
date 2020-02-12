import React, { Component } from "react";


export default class ImageItem extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h3 className="creature">Name: {this.props.image.title}</h3>
                <p className="horns"># of Horns: {this.props.image.horns}</p>
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
