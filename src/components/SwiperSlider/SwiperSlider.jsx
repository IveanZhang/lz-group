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
                        <div className='section-content'>
                            <div className='title-desc'>
                                <div className='title'>量子集团</div>
                            </div>
                            <div className='desc'>
                                量子集团是一家以教育为核心国际化集团。聚焦全球精英人才的发展与培养，以专注、专业、专⼼的敬业精神，为新⽣生代的教育和思维拓宽路径。
                            </div>
                        </div>
                        <div className='arrow'>
                            <a href='#'>
                                <img alt='arrow' className="arrow-img" src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg" width="64" height="64"></img>
                            </a>
                        </div>
                    </div>    
                    <div className='carousel-slider'>
                        <div className='section-content'>
                            <div className='desc-detail'>
                                <div className='desc-detail-content'>
                                    集团专业团队结合多伦多、蒙特利利尔、温哥华等主要留留学⽬的地的教育优势，以未来职业发展需要为目标，为国际学⽣的留学、就业、创业提供服务。为旅游、⾦融、地产、⽂化和健康等相关领域和产业提供渠道和资源。
                                </div>
                            </div>
                        </div>
                        <div className='arrow'>
                            <a href='#'>
                                <img alt='arrow' className="arrow-img" src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg" width="64" height="64"></img>
                            </a>
                        </div>                    
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default SwiperSlider;          