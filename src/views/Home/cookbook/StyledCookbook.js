import styled from 'styled-components'
const Container = styled.div`
    header{
        height:.44rem;
        line-height:.44rem;
        text-align:center;
        font-size:.16rem;
        color:#fff;
        background:#ee742f
    }
`
const SwiperWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:66.66667%;
    position:relative; // 解决网速过慢三个点在上面不跳下来的bug
    .slider.am-carousel{
        position:static !important // 解决网速过慢三个点在上面不跳下来的bug
    }
`
const HotCat = styled.div`
    background:#fff;
    .gridContent{
        padding-bottom:0 0 .15rem 0;
    }
    h1{
        height:.5rem;
        padding-left:.1rem;
        color:#666;
        line-height:.5rem;
        background:#fff;
        border-bottom:1px solid #ccc
    }
    .am-grid-item-content{
        padding:0 !important;
    }
    > div{
        // margin-top:.15rem;
        .gridItem{
            padding-top: 0.1rem;
            img{
                width:.5rem;
                height:.5rem;
                margin-bottom:.04rem;
                border-radius:.06rem
            }
            .gridTitle{
               margin-top:.04rem
            }
        }
    }
    

`
const HotTop10Wrap = styled.div`
        background:#fff;
        h1{
            height:.5rem;
            padding-left:.1rem;
            color:#666;
            line-height:.5rem;
            background:#fff;
            border-bottom:1px solid #ccc
        }
        .contentList{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            align-items:center;
            width:100%;
            padding-left:.1rem;
            li {
                width:50%;
                text-align:center;
                margin-top:.15rem;
                padding-right:.1rem;
                img{
                    width:100%
                }
                > div:last-child{
                    height:.4rem;
                    margin-bottom:.1rem;
                    font-size:.12rem;
                    text-overflow:ellipse;
                    h3{
                      margin-top:.1rem  
                    }
                    p{
                      margin-top:.05rem;
                      color:#666;
                      span:first-child{
                          margin-right:.1rem
                      }
                    }
                }
            }
        }
`
export {
    Container,
    SwiperWrap,
    HotCat,
    HotTop10Wrap
}