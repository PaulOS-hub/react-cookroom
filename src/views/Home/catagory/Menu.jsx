import React, { Component } from 'react'
import Menus from '@/views/menu/Menus'

import PropTypes from 'prop-types'

export default class Menu extends Component {
    static propTypes = {
        type: PropTypes.string
    }
    render() {
        const { type } = this.props
        return (
            <div style={{overflow:'hidden'}}>
                <Menus type={type} />
            </div>
        )
    }
}
