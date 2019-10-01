import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {


    render() {

        let content = this.props.posts.map((post, index) => {

            return <Post title={post.title} postBody={post.postBody} key={index}/>

        });



        return <div>
            {content}
        </div>;
    }

}