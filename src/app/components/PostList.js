import React from 'react';
import axios from 'axios';

import Post from '../components/Post';

export default class PostList extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    render() {

        let posts = <div>Идет загрузка...</div>;

        if (this.state.posts.length) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id} {...post}/>
            })
        }

        return <div>
            <h1>Посты</h1>
            {posts}
        </div>;

    }
    componentDidMount() {

        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.setState({posts:response.data});
                });
        }, 1000);

    }
}