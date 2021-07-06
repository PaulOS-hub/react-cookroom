import { SHOWORMAP, SET_SELECTEDTAB, SET_CATETAB, SET_CATEASIDE } from './action_type'
const initalState = {
    // 本地存储的boolean，会被转成字符串 "true" 
    // checked: localStorage.getItem("checked") === 'true' ? true : false,
    checked: JSON.parse(localStorage.getItem("checked")),
    // 路由信息
    routeInfo: {
        selectedTab: 'cookbook',
        cateType: 0,
        cateAside: ''
    }
}
const reducer = (prevState = initalState, action) => {
    switch (action.type) {
        case SHOWORMAP:
            return {
                ...prevState, checked: action.data
            }
        case SET_SELECTEDTAB:
            return {
                ...prevState, routeInfo: {
                    ...prevState.routeInfo,
                    selectedTab: action.data
                }
            }
        case SET_CATETAB:
            return {
                ...prevState, routeInfo: {
                    ...prevState.routeInfo,
                    cateType: action.data
                }
            }
        case SET_CATEASIDE:
            return {
                ...prevState, routeInfo: {
                    ...prevState.routeInfo,
                    cateAside: action.data
                }
            }
        default: // 初始化
            return prevState
    }
}
export default reducer