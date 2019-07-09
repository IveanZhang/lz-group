import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Carousel } from 'antd';

class SwiperSlider extends React.Component {
    state = {
        dotPosition: 'left',
    };

    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    render() {
        const { dotPosition } = this.state;
        return (
            <div className='carousel-container'>
                <Carousel dotPosition={dotPosition}>
                    <div className='carousel-slider'>
                        <h3>1</h3>
                    </div>
                    <div className='carousel-slider'>
                        <h3>2</h3>
                    </div>
                    <div className='carousel-slider'>
                        <h3>3</h3>
                    </div>
                    <div className='carousel-slider'>
                        <h3>4</h3>
                    </div>
                </Carousel>

            </div>
        );
    }
}

export default SwiperSlider;          