





//first class functions (udemy -> js weird parts)
export function reverseMap(arr, map) {
    let result = [];
    let i = arr.length;
    while(i--) {
        result.push(map(arr[i]))
    }
    return result;
}



export function getMonthString(monthNumber) {
    return ['Jan', 'Feb','Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'][monthNumber];
}