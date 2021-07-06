import styled from 'styled-components'

export const MenuWrap = styled.div`
        border-top:1px solid #ccc;
        height:100%;
        flex:1;
        display:flex;
        list-style:none;
        article{
            width:.9rem;
            overflow:auto;
            ul{
                li{
                    height:.5rem;
                    text-align:center;
                    line-height:.5rem;
                    &.active{
                        background:#fff;
                        color:#ee742f;
                        border-bottom:1px solid #ee7f2f;
                        span{
                            height:100%;
                            display:inline-block;
                        }
                    }
                }
            }
        }
        section{
            flex:1;
            padding:.25rem;
            overflow:auto;
            background:#fff;
            ul {
                display:flex;
                flex-wrap:wrap;
                li{
                    width:33.33%;
                    height:.45rem;
                    text-align:center;
                }
            }
        }
`
export const MenuContent = styled.div`

`