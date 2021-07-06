import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TitleBar } from './listWrap'
import { loadTopDataASync } from '../../store/action'

import { Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { ListWrap } from './listWrap'
import { nanoid } from 'nanoid'
class ListIndex extends Component {
    componentDidMount() {
        if (this.props.topList.length === 0) {
            this.props.loadTopDataASync()
        }
    }
    render() {
        const { title } = this.props.location.state
        const { topList } = this.props
        return (
            <div style={{ height: '100%' }}>
                <TitleBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    mode="dark"
                >{title}</TitleBar>
                <ListWrap>
                    {topList && topList.map(item => {
                        return <li key={nanoid()}>
                            <div className="left">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="right">
                                <div>
                                    <h1>{item.name}</h1>
                                    <h2>{item.burdens}</h2>
                                </div>
                                <h3><span>{item.all_click}</span>次浏览，<span>{item.favorites}</span>次收藏</h3>
                            </div>
                        </li>
                    })}

                </ListWrap>
            </div>
        )
    }
}
export default withRouter(connect(
    state => ({
        topList: state.reducer1.topList // 模块 state.module.xxx
    }), {
        loadTopDataASync
}
)(ListIndex))
