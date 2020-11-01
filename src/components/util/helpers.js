





//first class functions (udemy -> js weird parts)
export function reverseMap(arr, map) {
    let result = [];
    let i = arr.length;
    while(i--) {
        result.push(map(arr[i]))
    }
    return result;
}



