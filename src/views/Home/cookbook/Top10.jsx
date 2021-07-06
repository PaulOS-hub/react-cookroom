import React, { useEffect, useMemo } from 'react'
import { HotTop10Wrap } from './StyledCookbook'
import { connect, useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { loadTopDataASync } from '../../../store/action'
import { useHistory } from 'react-router'
import memoize from 'memoize-one' // react的计算属性

export default function Top10(props) {
    const topList = useSelector(state => state.reducer1.topList)
    const dispatch = useDispatch()
    // 定义一个swiper过滤的computed计算属性 , 可以缓存
    // const swiperFilter = useMemo(list => {
    //     return list.slice(0, 10)
    // })
    // const topTenList = swiperFilter(topList)

    // useMemo 
    function shorList(list) {
        return list.slice(0, 10)
    }
    const topTenList = useMemo(() => {
        return shorList(topList)
    }, [topList])
    useEffect(() => {
        // 第二个参数，不传 = 每次渲染都执行
        // 传空数组，只执行一次。只在挂载和卸载执行, componentDidMount
        // [count] ，依赖于count前后值是否变化，如果相等就跳过，
        //第二个参数一般情况下不要使用引用类型 [{a:1}] === [{a:1}] false
        dispatch(loadTopDataASync())
    }, [dispatch])
    const history = useHistory()
    const gotoLearning = () => {
        history.push("/learning")
    }
    return (
        <HotTop10Wrap>
            <h1>精品好菜</h1>
            <ul className="contentList">
                {topTenList.length > 0 ? topTenList.map(item => {
                    return (
                        <li onClick={gotoLearning} key={nanoid()}>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                                <p><span>{item.all_click}次浏览</span><span>{item.favorites}次收藏</span></p>
                            </div>
                        </li>
                    )
                }) : '暂无数据'}

            </ul>
        </HotTop10Wrap>
    )
}

