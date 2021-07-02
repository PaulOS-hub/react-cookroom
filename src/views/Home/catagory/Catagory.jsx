import React, { useState } from 'react'
import { CatagoryWrap } from './StyledCatagory'
import Search from '../../../components/search/Search'
function Catagory(props) {
    const [tabIndex, changeTabIndex] = useState(0)
    const handleClick = e => {
        return () => {
            changeTabIndex(e)
        }
    }
    return (
        <CatagoryWrap>
            <nav>
                <ul>
                    <li onClick={handleClick(0)} className={tabIndex === 0 ? 'active' : ''}>分类</li>
                    <li onClick={handleClick(1)} className={tabIndex === 1 ? 'active' : ''}>食材</li>
                    <li className={tabIndex === 0 ? 'slide' : 'slide right'}></li>
                </ul>
            </nav>
            <Search hasborder={false} hasbg={true} />
        </CatagoryWrap>
    )
}
export default Catagory