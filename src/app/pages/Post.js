import React, { Component } from 'react';
import axios from 'axios';

import PostCard from '../components/Post';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    render() {

        let post = <div>Идет загрузка...</div>;

        if (this.state.post) {
            post = <PostCard {...this.state.post} />;
        }

        return (
            <div>
                <h1>Один пост</h1>
                {post}
            </div>
        )
    }

    componentDidMount() {
        axios.get(` https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
             .then(response => {
                this.setState({ post: response.data })
             })
    }
}