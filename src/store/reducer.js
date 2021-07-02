import { LOADDATA, LOADTOPDATA } from './action_type'
const initalState = {
    tapList: [],
    topList: []
}
const reducer = (prevState = initalState, action) => {
    switch (action.type) {
        case LOADDATA:
            return {
                ...prevState, tapList: action.payload
            }
        case LOADTOPDATA:
            return {
                ...prevState, topList: action.payload
            }
        default: // 初始化
            return prevState
    }
}
export default reducer