import React from 'react';

export default class MenuLi extends React.Component {

    render() {
        return <li><a href={this.props.url}>{this.props.name}</a></li>
    }

}