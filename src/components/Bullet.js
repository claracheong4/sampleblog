import React from 'react';

import '../css/Bullet.css';

function Bullet( {img, text} ) {
    return (
        <div class="bullet">
            <img src={img} class="image"></img>
            {text}
        </div>
    );
}

export default Bullet;
