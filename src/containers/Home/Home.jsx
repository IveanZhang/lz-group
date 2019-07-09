import React from 'react';
import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';
import BackgroundVideoPlayer from '../../components/BackgroundVideoPlayer/BackgroundVideoPlayer';

import './style.scss';


export default () => {
    return (
        <div>
            <BackgroundVideoPlayer url='http://lifeinsys.com/item/malena/resources/video/intro.mp4'></BackgroundVideoPlayer>
            <SwiperSlider></SwiperSlider>
        </div>
    );
};