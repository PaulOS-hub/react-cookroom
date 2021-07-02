import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { HotCat } from './StyledCookbook'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadDataAsync } from '../../../store/action'

@connect(
    state => ({
        tapList: state.tapList // 模块 state.module.xxx
    }), {
    loadDataAsync
}
)

class HotCatagory extends Component {
    state = {
        columnNum: 4
    }
    // static propTypes = {
    //     tapList: PropTypes.array
    // }
    componentDidMount() {
        const width = window.innerWidth
        // 适配Ip5机型小屏幕
        if (width < 375) {
            this.setState({
                columnNum: 3
            })
        }
        this.props.loadDataAsync()
    }
    render() {
        const { columnNum } = this.state
        const { tapList } = this.props
        return (
            <div>
                <HotCat>
                    <h1>热门分类</h1>
                    <div className="gridContent">
                        <Grid
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
            </div>
        )
    }
}
export default HotCatagory