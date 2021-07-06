import React, { Component } from 'react'
import { TitleBar } from '../more/styledMore'
export default function Map() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <TitleBar
                mode="dark"
                onLeftClick={() => console.log('onLeftClick')}
            >美食地图</TitleBar>
            <iframe src="/map.html"
                title="map"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"></iframe>
        </div>
    )
}
