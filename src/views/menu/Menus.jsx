import React, { useEffect, useState, Component } from 'react'
import { get } from '@/utils/http'
import { MenuWrap } from './styledMenu'
import PropTypes from 'prop-types'
import { setCateAside } from '../../store/showMap/action'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'

class Menus extends Component {
    static propTypes = {
        type: PropTypes.string
    }
    // 此方法是状态依赖于父组件props的值变化,如果组件内部也需要维护,那么需要定义一个
    // 第三方变量判断此时是需要依赖子组件还是父组件
    static getDerivedStateFromProps(nextProp, preState) {

        if (preState.preType === nextProp.type) {
            return {}
        } else {
            return {
                curIndex: nextProp.type === 'category' ? '热门' : '肉类',
                preType: nextProp.type
            }
        }
    }

    state = {
        leftBarList: [],
        preType: "category",
        curIndex: this.props.type === 'category' ? '热门' : '肉类'

    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const { data } = await get({
            url: "/api/category"
        })
        this.setState(
            {
                leftBarList: data.data
            }
        )
    }
    handleBarClick = (item) => {
        return () => {
            this.setState({
                curIndex: item
            })
            this.props.setCateAside(item)
        }
    }
    gotoDetail = item => {
        return () => {
            this.props.history.push("/list", {
                title: item
            })
        }
    }
    render() {
        let { leftBarList, curIndex } = this.state
        const { type } = this.props
        return (
            <MenuWrap>
                <article>
                    <ul>
                        {leftBarList[type] && Object.keys(leftBarList[type]).map(item => {
                            return <li
                                onClick={this.handleBarClick(item)}
                                className={curIndex === item ? 'active' : ''}
                                key={item}>
                                {item}
                            </li>
                        })}
                    </ul>
                </article>
                <section>
                    <ul>
                        {leftBarList[type] && leftBarList[type][curIndex].map(item => {
                            return <li onClick={this.gotoDetail(item)} key={item}>{item}</li>
                        })}
                    </ul>
                </section>
            </MenuWrap >
        )
    }

}
export default withRouter(connect(
    state=>({}),
    {setCateAside}
)(Menus))