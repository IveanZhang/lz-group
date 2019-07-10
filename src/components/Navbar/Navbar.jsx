import React from 'react';
import { Row, Col } from 'antd';
import './style.scss';

export default (props) => {
    return (
        <div className="nav">
            <div className='nav-container text-center'>
                <Row type="flex" justify="center">
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row type="flex" justify="center">
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <img alt='liangzi-education-inc-logo' src='http://eduen.happyneg.net/wp-content/uploads/2018/12/uuwill_logo.png' width={60} height={41}></img>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                        <Row type="flex" justify="start">
                            <div className='nav-item'><a className='nav-link'>关于量子</a></div> 
                            <div className='nav-item'><a className='nav-link'>量子产业</a></div> 
                            <div className='nav-item'><a className='nav-link'>量子咨询</a></div> 
                            <div className='nav-item'><a className='nav-link'>联系我们</a></div> 
                        </Row>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <div className='nav-item'><a className='nav-link'> > 中文</a></div> 
                    </Col>
                </Row>
            </div>
        </div>
    );
}