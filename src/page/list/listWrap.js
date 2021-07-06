import styled from "styled-components";
import { NavBar } from 'antd-mobile'
export const ListWrap = styled.ul`
    overflow:auto;
    height:100vh;
    padding-bottom:.4rem;
    li{
        display:flex;
        padding:.1rem;
        height:1.2rem;
        .left{
            width:40%;
            img{
                width:100%;
                height:100%;
            }
        }
        .right {
            width:55%;
            margin-left:5%;
            display:flex;
            height:100%;
            flex-direction:column;
            justify-content:space-between;
            h1{
                font-size:.16rem;
                line-height:.3rem;
            }
            h2{
                font-size:.14rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            h3{
                font-size:0.05rem; 
                font-weight:normal;
                line-height:.3rem;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                line-clamp: 1;
                -webkit-box-orient: vertical;
                span{
                    color:#666
                }
            }
        }

    }
`

export const TitleBar = styled(NavBar)`
    background:#ee742f
`