import styled from 'styled-components'

const CatagoryWrap = styled.div`
        display:flex;
        flex-direction:column;
        height:100%;
        nav {
            height:.44rem;
            background:#ee7f2f;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:.1rem 0;
            ul {
                display:flex;
                width:1.4rem;
                height:.3rem;
                border:1px solid #fff;
                border-radius:.15rem;
                position:relative;
                li {
                    flex:1;
                    line-height:.3rem;
                    text-align:center;
                    color:#fff;
                    transition: all .2s ease-in;
                    &.active{
                        color:#ee7f2f;
                        z-index:3
                    }
                    &.slide{
                        position:absolute;
                        left:0;
                        width:.7rem;
                        background:#fff;
                        height:.3rem;
                        z-index:2;
                        border-radius:.15rem
                    }
                    &.slide.right{
                        left:.7rem
                    }
                }
            }
        }
`

export {
    CatagoryWrap
}