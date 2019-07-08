import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Carousel } from 'antd';

class SwiperSlider extends React.Component {
    state = {
        dotPosition: 'right',
    };

    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    render() {
        const { dotPosition } = this.state;
        return (
            <div>
                <Carousel dotPosition={dotPosition}
                    autoplay={false}
                >
                    <div>
                        <div className='carousel-slide'>
                            <video autoPlay muted loop>
                                <source src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site" />
                            </video>
                            <h3>fdsfds</h3>
                        </div>
                    </div>
                </Carousel >
            </div>
        );
    }
}

export default SwiperSlider;          