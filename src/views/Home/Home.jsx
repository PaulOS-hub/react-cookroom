import { TabBar } from 'antd-mobile'
import React, { useState } from 'react'
import Cookbook from './cookbook/Cookbook';
import Catagory from './catagory/Catagory';
import Map from './Map/Map'
import MoreFood from './more'
import '@/assets/styles/reset.css'
import cookbook from '@/assets/images/cookbook.png';
import location from '@/assets/images/location.png';
import menu from '@/assets/images/menu.png';
import more from '@/assets/images/more.png';
import cookbook_active from '@/assets/images/cookbook-active.png';
import location_active from '@/assets/images/location-active.png';
import menu_active from '@/assets/images/menu-active.png';
import more_active from '@/assets/images/more-active.png';
import { useDispatch, useSelector } from 'react-redux'

export default function Home(props) {
    const dispatch = useDispatch() // 可以直接dispatch redux中的action
    const hidden = useSelector(state => state.showMapReducer.checked) // 映射redux的state
    const routeInfo = useSelector(state => state.showMapReducer.routeInfo) // 可以不用connect来拼接了
    const fullScreen = true // 全屏 
    let [tabs, setTabs] = useState({
        selectedTab: routeInfo.selectedTab,// 默认选中
    });
    const tabItem = [
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
            selected={tabs.selectedTab === 'cookbook'}
            onPress={() => {
                setTabs({
                    selectedTab: 'cookbook',
                })
                dispatch({ type: 'SET_SELECTEDTAB', data: 'cookbook' })
            }}
            data-seed="logId"
        >
            {/* 美食大全页面 */}
            <div>
                <Cookbook></Cookbook>
            </div>
        </TabBar.Item>,
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
            selected={tabs.selectedTab === 'catagory'}
            onPress={() => {
                setTabs({
                    selectedTab: 'catagory',
                })
                dispatch({ type: 'SET_SELECTEDTAB', data: 'catagory' })
            }}
            data-seed="logId1"
        >
            <Catagory />
        </TabBar.Item>,
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
            selected={tabs.selectedTab === 'map'}
            onPress={() => {
                setTabs(state => ({
                    selectedTab: 'map',
                }))
                dispatch({ type: 'SET_SELECTEDTAB', data: 'map' })

            }}
        >
            <Map />
        </TabBar.Item>,
        <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: more_active }}
            title="更多"
            key="more"
            selected={tabs.selectedTab === 'more'}
            onPress={() => {
                setTabs(state => ({
                    selectedTab: 'more',
                }))
                dispatch({ type: 'SET_SELECTEDTAB', data: 'more' })
            }}
        >
            <div>
                <MoreFood />
            </div>
        </TabBar.Item>
    ]
    return (
        <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={tabs.hidden}
            >
                {hidden ? tabItem.map(item => {
                    return item
                }) : tabItem.filter((v, i) => {
                    return i !== 2
                })}
            </TabBar>
        </div>
    )
}

