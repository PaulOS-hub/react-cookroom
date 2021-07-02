import styled from "styled-components";
// 可以接受参数
const Container = styled.div`
    padding:.1rem .15rem;
    background:#fff;
    > .search-contain   {
        height:.4rem;
        width:100%;
        border-radius:.06rem;
        display:flex;
        justify-content:center;
        text-align:center;
        align-items:center;
        border:${({ props }) => props.hasborder ? '1px solid #ee7f2f' : ''};
        background:${({ props }) => props.hasbg ? '#eee' : 'fff'};
            .search-icon {
                 margin-right:.06rem;
                 margin-top:.1rem;
            }
            .search-content {
                color:#666;
            }   
    }
`
export {
    Container
}