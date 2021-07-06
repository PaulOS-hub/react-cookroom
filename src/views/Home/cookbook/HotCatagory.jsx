import React, { useState, useEffect } from 'react'
import { Grid } from 'antd-mobile'
import { HotCat } from './StyledCookbook'
import PropTypes from 'prop-types'
import { connect, useDispatch, useSelector } from 'react-redux'
import { loadDataAsync } from '../../../store/action'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
export default function HotCatagory(props) {
    const tapList = useSelector(state => state.reducer1.tapList)
    const dispatch = useDispatch()
    const [columnNum, setColumnNum] = useState(4)
    const history = useHistory()
    const handleClick = el => {
        history.push("/list", {
            title: el.title
        })
    }
    useEffect(() => {
        const width = window.innerWidth
        // 适配Ip5机型小屏幕
        if (width < 375) {
            setColumnNum(3)
        }
        // dispatch 什么action，把action引入，可以直接传参
        dispatch(loadDataAsync())
        return () => {
            // componentwillUnmount 
        }
    }, [dispatch])
    return (
        < div >
            <HotCat>
                <h1>热门分类</h1>
                <div className="gridContent">
                    <Grid
                        onClick={handleClick}
                        data={tapList}
                        columnNum={columnNum}
                        hasLine={false}
                        itemStyle={{ padding: '.02rem 0' }}
                        renderItem={dataItem => (
                            <div className="gridItem">
                                <img src={dataItem.img} alt="" />
                                <div className="gridTitle">
                                    <span>{dataItem.title}</span>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </HotCat>
        </div >
    )
}