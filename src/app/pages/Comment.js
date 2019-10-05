import React, { Component } from 'react';
import axios from 'axios';

import CommentCard from '../components/Comment';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null
        };
    }

    render() {

        let comment = <div>Идет загрузка...</div>;

        if (this.state.comment) {
            comment = <CommentCard {...this.state.comment} />;
        }

        return (
            <div>
                <h1>Один комментарий</h1>
                {comment}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
             .then(response => {
                this.setState({ comment: response.data })
             })
    }
}