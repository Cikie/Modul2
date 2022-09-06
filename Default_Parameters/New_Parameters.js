function lastIndexOf(arr, elt, start) {
    for (let i = start - 1; i > 0; i--)
        if (arr[i] === elt)
            return i
    return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2))


function lastIndexOf1(arr, elt, start) {
    for (let i = start - 1; i > 0; i--)
        if (arr[i] === elt)
            return i
    return -1
}

console.log(lastIndexOf1([1, 2, 1, 2], 2,4))