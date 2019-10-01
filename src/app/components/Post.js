import React from 'react';

export default class Post extends React.Component {

    render() {
        return <div className="post">
            <div className="postName">
            {this.props.title}
            </div>
            <div className="postText">
            {this.props.postBody}
            </div>
        </div>
    }

}