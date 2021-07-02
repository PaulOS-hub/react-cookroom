import { LOADDATA, LOADTOPDATA } from './action_type'
import { get } from '@/utils/http'
export const loadDataSync = list => {
    return {
        type: LOADDATA,
        list
    }
}
export const loadTopDataSync = list => {
    return {
        type: LOADTOPDATA,
        list
    }
}

export const loadDataAsync = () => {
    return async dispatch => {
        const data = await get({
            url: '/api/hotcat'
        })
        if (data.status === 200) {
            dispatch({
                type: LOADDATA,
                payload: data.data
            })
        }

    }
}
export const loadTopDataASync = () => {
    return async dispatch => {
        const data = await get({
            url: '/api/list'
        })
        if (data.status === 200) {
            dispatch({
                type: LOADTOPDATA,
                payload: data.data.data
            })
        }

    }
}