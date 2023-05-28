import React from 'react';
import Post from "./Post";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map(posts =>
                <Post post={posts} key={posts.id}/>
            )}
        </div>
    );
};

export default PostList;