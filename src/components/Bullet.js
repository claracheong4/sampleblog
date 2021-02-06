import React from 'react';

import '../css/Bullet.css';

export default function Bullet( {img, text} ) {
    return (
        <div class="bullet">
            <img src={img} class="image"></img>
            {text}
        </div>
    );
}

