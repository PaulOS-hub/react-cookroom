export const useCount = (value) => {
    let countValue = value
    const addhook = num => {
        countValue = countValue + num
        console.log(countValue)
        return countValue
    }
    const minushook = num => {
        countValue = countValue - num
        return countValue
    }

    return [countValue, addhook, minushook]
}
