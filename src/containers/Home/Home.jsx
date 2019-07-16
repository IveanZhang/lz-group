import React from 'react';
import 'antd/dist/antd.css';
import SideBar from '../../components/SideBar/SideBar';
import Navbar from '../../components/Navbar/Navbar';
import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';

import './style.scss';

export default class Home extends React.Component {

    render() {
        return (
            <div className="dsn-ajax dsn-ajax dsn-effect-scroll" data-dsn-mousemove="true">

                <div className="preloader">
                    <div className="preloader-after"></div>
                    <div className="preloader-before"></div>
                    <div className="preloader-block">
                        <div className="title">量子集团</div>
                        <div className="percent">99</div>
                        <div className="loading">loading</div>
                    </div>
                    <div className="preloader-bar">
                        <div className="preloader-progress"></div>
                    </div>
                </div>

                <div className="cursor">
                    <div className="cursor-helper cursor-hold">
                        <span>Hold</span>
                    </div>

                    <div className="cursor-helper cursor-Watch">
                        <span>Watch</span>
                    </div>

                    <div className="cursor-helper cursor-view">
                        <span>View</span>
                    </div>

                    <div className="cursor-helper cursor-link"></div>
                </div>
                <SideBar></SideBar>
                <Navbar></Navbar>
                <SwiperSlider></SwiperSlider>
            </div>
        );
    }
}