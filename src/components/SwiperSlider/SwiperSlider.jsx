import React from 'react';
import './style.scss';

class SwiperSlider extends React.Component {

    render() {
        return (
            <main className="inner-wrap inner-wrap-slider">
                <div className="home-footers"></div>
                <header className="hero">
                    <div className="inner">
                        <div className="slider-box">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="slider-item swiper-slide">
                                        <div className="inner-hero">

                                            <div className="bg">
                                                <div className="bg-image cover-bg" data-image-src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                                                    data-overlay="4"></div>
                                            </div>
                                            <div className="container">
                                                <div className="info">
                                                    <div className="tagline" data-swiper-parallax="-25">
                                                        <span>01</span>
                                                        <h6>赋能企业，共享未来</h6>
                                                    </div>
                                                    <h1 data-swiper-parallax-x="-25" data-swiper-parallax-scale="1.2"
                                                        data-swiper-parallax-opacity="0">量子集团</h1>
                                                    <a href="project-5.html" className="veiw-c effect-ajax"
                                                        data-swiper-parallax="25" data-dsn-ajax="slider">
                                                        <span>
                                                            <span></span> 关于我们
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="slider-item swiper-slide">
                                        <div className="inner-hero">

                                            <div className="bg">
                                                <div className="bg-image cover-bg" data-image-src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
                                                    data-overlay="4"></div>
                                            </div>

                                            <div className="container">
                                                <div className="info">
                                                    <div className="tagline" data-swiper-parallax="-25">
                                                        <span>02</span>
                                                        <h6>平台构建希望，用心成就未来</h6>
                                                    </div>
                                                    <h1 data-swiper-parallax-x="-25" data-swiper-parallax-scale="1.2"
                                                        data-swiper-parallax-opacity="0">量子集团</h1>
                                                    <a href="project-3.html" className="veiw-c effect-ajax"
                                                        data-swiper-parallax="25" data-dsn-ajax="slider">
                                                        <span>
                                                            <span></span> 关于我们
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="slider-item swiper-slide">
                                        <div className="inner-hero">

                                            <div className="bg">
                                                <div className="bg-image cover-bg" data-image-src="https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1856&q=80"
                                                    data-overlay="4"></div>
                                            </div>

                                            <div className="container">
                                                <div className="info">
                                                    <div className="tagline" data-swiper-parallax="-25">
                                                        <span>03</span>
                                                        <h6>精诚铸就品牌，平台重塑格局</h6>
                                                    </div>
                                                    <h1 data-swiper-parallax-x="-25" data-swiper-parallax-scale="1.2"
                                                        data-swiper-parallax-opacity="0">量子集团</h1>
                                                    <a href="project-4.html" className="veiw-c effect-ajax"
                                                        data-swiper-parallax="25" data-dsn-ajax="slider">
                                                        <span>
                                                            <span></span> 关于我们
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="dsn-grid-nav-box">
                            <div className="boxnav-item to-prev" data-dsn-grid="parallax" data-dsn-grid-move="20">
                                <i className="fas fa-chevron-left"></i>
                            </div>

                            <div className="boxnav-item to-next" data-dsn-grid="parallax" data-dsn-grid-move="20">
                                <i className="fas fa-chevron-right"></i>
                            </div>

                            <div className="boxnav-item boxnav-item-progress">
                                <div className="boxnav-progress">
                                    <span className="progress-item"></span>
                                </div>
                                <div className="number">

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </main>
        );
    }
}

export default SwiperSlider;          