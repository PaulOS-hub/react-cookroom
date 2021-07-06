import React, { Component } from 'react'
import { Container } from './StyledCookbook'
import Swiper from './Swiper'
import Search from '@/components/search/Search'
import HotCatagory from './HotCatagory'
import Top10 from './Top10'


function Cookbook() {
    return (
        <div>
            <Container>
                <header>美食大全</header>
                <Swiper />
                <Search hasborder={true} hasbg={false} />
                <HotCatagory />
                <Top10 />
            </Container>
        </div>
    )
}
export default Cookbook