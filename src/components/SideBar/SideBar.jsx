import React from 'react';
import './style.scss';

export default (props) => {
    return (
        <div>
            <div className="sidebar left trans-bg">
                <div id="menu-toggle">
                    <div id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <nav className="menu-full dark-bg">
                <div className="menu-height">
                    <div className="menu-container">
                        <ul>
                            <li className="menu-item nav-list-dropdown menu-item-active">
                                <a href="">
                                    <sup>01</sup>
                                    <div className="item-label">首页</div>
                                </a>

                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-back">
                                        <a href="">
                                            <img src="assets/img/back.png" alt="" />
                                            <div className="item-label">首页</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="http://www.neg18.com/">
                                            <sup>01</sup>
                                            <div className="item-label">新超越集团</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="http://www.galeth.com/">
                                            <sup>02</sup>
                                            <div className="item-label active">加勒斯控股</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="http://www.uuwill.cn">
                                            <sup>03</sup>
                                            <div className="item-label">全球智能商盟平台</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item nav-list-dropdown ">
                                <a href="">
                                    <sup>02</sup>
                                    <div className="item-label">关于量子</div>
                                </a>

                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-back">
                                        <a href="">
                                            <img src="assets/img/back.png" alt="" />
                                            <div className="item-label">关于量子</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="">
                                            <sup>01</sup>
                                            <div className="item-label">量子简介</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="">
                                            <sup>02</sup>
                                            <div className="item-label">发展历程</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="">
                                            <sup>02</sup>
                                            <div className="item-label">集团架构</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item nav-list-dropdown ">
                                <a href="">
                                    <sup>03</sup>
                                    <div className="item-label">量子产业</div>
                                </a>

                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-back">
                                        <a href="">
                                            <img src="assets/img/back.png" alt="" />
                                            <div className="item-label">量子产业</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="">
                                            <sup>01</sup>
                                            <div className="item-label">旅游教育</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="">
                                            <sup>02</sup>
                                            <div className="item-label">量子嘉年华</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item nav-list-dropdown">
                                <a href="">
                                    <sup>04</sup>
                                    <div className="item-label">量子资讯</div>
                                </a>
                                <ul className="sub-menu  ">
                                    <li className="menu-item menu-item-back">
                                        <a href="">
                                            <img src="assets/img/back.png" alt="" />
                                            <div className="item-label">量子资讯</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="">
                                            <sup>01</sup>
                                            <div className="item-label">重要公告</div>
                                        </a>
                                    </li>

                                    <li className="menu-item">
                                        <a href="">
                                            <sup>02</sup>
                                            <div className="item-label">活动新闻</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item">
                                <a href="#">
                                    <sup>05</sup>
                                    <div className="item-label">联系我们</div>
                                </a>
                            </li>

                        </ul>

                        <div className="contactWrapper">
                            <ul className="contact-item">
                                <li className="item-header">Head Office Paris</li>
                                <li className=""> <span>Canada</span></li>
                                <li className=""> <span>250 Sheppard Ave E, North York, ON M2N 6M9</span></li>
                            </ul>

                            <ul className="contact-item">
                                <li className="item-header">Contact</li>
                                <li className=""><a href="">info@liangzica.com</a></li>
                                <li className=""><span>+1 (416)-224-0386</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}