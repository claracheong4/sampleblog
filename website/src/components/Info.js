import React from 'react';

import Bullet from './Bullet.js';

import image from '../images/image.jpg';
import phoneIcon from '../images/phone.svg';
import categoryIcon from '../images/category.png';
import addressIcon from '../images/icon-24-shop.svg';

import { getPhoneText, getCompanyBsText, getAddressText } from './Util.js';

import '../css/Info.css';

function Info( {name, phone, companyBs, address} ) {
    return (
        <div class="info">
            <img src={image} class="img"></img>
            <header class="header">
                {name}
            </header>
            <Bullet
                img={phoneIcon}
                text={getPhoneText(phone)} />
            <Bullet
                img={categoryIcon}
                text={getCompanyBsText(companyBs)} />
            <Bullet
                img={addressIcon}
                text={getAddressText(address)} />
        </div>
    );
}

export default Info;
