import React from 'react';

import { capitalise } from './Util.js';

import '../css/Post.css';

export default function Post( {title, body} ) {
    return (
        <div class="post">
            <div class="postbox">
                <div class="title">
                    {capitalise(title)}
                </div>
                <div class="body">
                    {body}
                </div>
            </div>
        </div>
    );
}
