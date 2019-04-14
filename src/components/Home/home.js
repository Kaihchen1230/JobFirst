import React from 'react'
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import './home.css';

const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

class Home extends React.Component {
    constructor() {
        super(props);
        this.imgArray = [
            '../../../static/1.jpg',
            '../../../static/2.jpg',
            '../../../static/3.jpg',
            '../../../static/4.jpg',
        ];
        this.state = {
            intShow: 0,
            prevEnter: false,
            nextEnter: false,
            thumbEnter: false,
        };
    }
    
}