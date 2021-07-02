import { TabBar } from 'antd-mobile'
import React, { Component } from 'react'
import Cookbook from './cookbook/Cookbook';
import Catagory from './catagory/Catagory';

import '@/assets/styles/reset.css'
import cookbook from '@/assets/images/cookbook.png';
import location from '@/assets/images/location.png';
import menu from '@/assets/images/menu.png';
import more from '@/assets/images/more.png';
import cookbook_active from '@/assets/images/cookbook-active.png';
import location_active from '@/assets/images/location-active.png';
import menu_active from '@/assets/images/menu-active.png';
import more_active from '@/assets/images/more-active.png';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'cookbook',// 默认选中
            hidden: false, // 展示与否
            fullScreen: true, // 全屏
        };
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="美食大全"
                        key="cookbook"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${cookbook}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${cookbook_active}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'cookbook'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cookbook',
                            });
                        }}
                        data-seed="logId"
                    >
                        {/* 美食大全页面 */}
                        <div>
                            <Cookbook></Cookbook>
                        </div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${menu}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${menu_active}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="分类"
                        key="catagory"
                        selected={this.state.selectedTab === 'catagory'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'catagory',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <Catagory />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${location}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${location_active}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="美食地图"
                        key="map"
                        selected={this.state.selectedTab === 'map'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'map',
                            });
                        }}
                    >
                        <div>map</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: more }}
                        selectedIcon={{ uri: more_active }}
                        title="更多"
                        key="more"
                        selected={this.state.selectedTab === 'more'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'more',
                            });
                        }}
                    >
                        <div>
                            more
                        </div>
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
