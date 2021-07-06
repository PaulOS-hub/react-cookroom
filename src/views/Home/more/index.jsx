import React, { Component } from 'react'
import { Switch } from 'antd-mobile'
import { MoreWrap, TitleBar } from './styledMore'
import { showMap } from '@/store/showMap/action'
import { connect } from 'react-redux'
class MoreFood extends Component {
    state = {
        checked: true
    }
    handleChange = () => {
        const { checked } = this.props
        this.props.showMap(!checked)
        localStorage.setItem('checked',!checked)
    }
    render() {
        const { checked } = this.props
        return (
            <div>
                <TitleBar
                    mode="dark"
                    onLeftClick={() => console.log('onLeftClick')}
                >更多</TitleBar>
                <MoreWrap>


                    <span>是否显示地图：</span>
                    <Switch onChange={this.handleChange} checked={checked}></Switch>
                </MoreWrap>
            </div>
        )
    }
}
export default connect(
    state => ({
        checked: state.showMapReducer.checked
    }), {
    showMap
}
)(
    MoreFood
)