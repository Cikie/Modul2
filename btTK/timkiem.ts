function TimKiem(arr: any) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == 0 && arr[i][j] != 0)
            {
                sum +=arr[i][j]
            }
            else if (arr[i][j] != 0 && arr[i - 1][j] != 0)
                sum = sum + arr[i][j]
        }
    }
    return sum
}

console.log(TimKiem([[0, 1, 2, 3], [0, 0, 2, 1], [0, 1, 0, 1]]))

    
