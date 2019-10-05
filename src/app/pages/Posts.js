import React from 'react';
import PostList from '../components/PostList';

export default class Posts extends  React.Component {

    render() {

        return <div>
            {
                (!this.props.children) ? <PostList/> : this.props.children
            }
        </div>;

    }
}