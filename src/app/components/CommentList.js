import React from 'react';
import axios from 'axios';

import Comment from '../components/Comment';

export default class CommentList extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            comment: [],
        }
    }

    render() {

        let comment = <div>Идет загрузка...</div>;

        if (this.state.comment.length) {
            comment = this.state.comment.map(comment => {
                return <Comment key={comment.id} {...comment}/>
            })
        }

        return <div>
            <h1>Комментарии</h1>
            {comment}
        </div>;

    }
    componentDidMount() {

        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(response => {
                    this.setState({comment:response.data});
                });
        }, 1000);

    }
}