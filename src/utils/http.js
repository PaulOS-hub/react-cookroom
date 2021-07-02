import axios from 'axios'

export const get = ({ url }) => {
    return new Promise((resolve, reject) => {
        axios({
            url
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}