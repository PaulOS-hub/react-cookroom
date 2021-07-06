import { SHOWORMAP, SET_SELECTEDTAB, SET_CATETAB, SET_CATEASIDE } from './action_type'

export const showMap = (data) => {
    return {
        type: SHOWORMAP,
        data
    }
}

export const setSelectedTab = (data) => {
    return {
        type: SET_SELECTEDTAB,
        data
    }
}
export const setCateTab = (data) => {
    return {
        type: SET_CATETAB,
        data
    }
}
export const setCateAside = (data) => {
    return {
        type: SET_CATEASIDE,
        data
    }
}