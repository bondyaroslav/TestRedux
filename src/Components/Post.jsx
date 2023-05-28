import React from 'react';

const Post = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
            </div>
            <div>
                {props.post.body}
            </div>
            <div className="post__btns">
                <button>Del</button>
            </div>
        </div>
    );
};

export default Post;