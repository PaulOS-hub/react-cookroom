import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { SwiperWrap } from './StyledCookbook'
import sw1 from '@/assets/images/swiper-1.png'
import sw2 from '@/assets/images/swiper-2.jpeg'
import sw3 from '@/assets/images/swiper-3.jpeg'
export default class Swiper extends Component {
    state = {
        data: [{ id: 1, src: sw1 }, { id: 2, src: sw2 }, { id: 3, src: sw3 }],
        imgHeight: 176,
    }
    componentDidMount() {
        window.addEventListener("resize", {}, { passive: false })
    }
    render() {
        return (
            <SwiperWrap>
                <WingBlank style={{ margin: '0px', height: '100%' }}>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.data.map(val => (
                            <img
                                src={val.src}
                                key={val.id}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={
                                    () => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'), { passive: false });
                                        this.setState({ imgHeight: 'auto' }
                                        );
                                    }
                                }
                            />
                        ))}
                    </Carousel>
                </WingBlank>
            </SwiperWrap>
        )
    }
}
