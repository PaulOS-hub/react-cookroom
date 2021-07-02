import React, { } from 'react'
import { Container } from './StyledSearch'
import PropTypes from 'prop-types'
function Search(props) {
    return (
        <Container props={props}>
            <div className={`search-contain `}>
                <div className="search-icon">
                    <svg t="1625121433983" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2662"
                        width="32" height="32"><path d="M416 192C537.6 192 640 294.4 640 416S537.6 640 416 640 192 537.6 192 416 294.4 192 416 192M416 128C256 128 128 256 128 416S256 704 416 704 704 576 704 416 576 128 416 128L416 128z" p-id="2663" fill="#707070"></path><path d="M832 864c-6.4 0-19.2 0-25.6-6.4l-192-192c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l192 192c12.8 12.8 12.8 32 0 44.8C851.2 864 838.4 864 832 864z" p-id="2664" fill="#ee7f2f"></path></svg>
                </div>
                <div className="search-content">
                    想吃什么找我
                </div>
            </div>
        </Container>
    )
}
export default Search
