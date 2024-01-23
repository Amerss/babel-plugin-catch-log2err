const arr = [19, 31, 51, 71, 8]
const fn = () => {
    for (const i in arr) {
        if (arr[i] % 2 !== 0) {
            throw new Error('error')
        }
    }
}

let flag = true
try {
    fn()
    flag = true
} catch (e) {
    flag = false
    console.log('123123123', e)
    console.log('123123123', e, '123123123')
    console.log(1 + 1)
    console.log(e)
}

