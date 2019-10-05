import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Comment extends Component {
    render() {

        const { name, email, body, id} = this.props;

        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/comments/${id}`}>
                        {name} - {email}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}