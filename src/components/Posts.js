import React from 'react';

import Post from './Post.js';

import '../css/Posts.css';

function Posts( {name, posts} ) {
    function getHeader() {
        return name.substr(0, name.indexOf(' ')) + "'s Posts";
    }

    function getNumPosts() {
        return posts.length + " POSTS";
    }

    return (
        <div class="posts">
            <header class="header">
                {getHeader()}
            </header>
            <div class="count">
                {getNumPosts()}
            </div>
            <div class="list">
                {posts.map(post => <Post
                    title={post.title}
                    body={post.body} />)}
            </div>
        </div>
    );
}

export default Posts;
