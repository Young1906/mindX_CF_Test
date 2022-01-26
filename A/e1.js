const f=(arr)=>{
    let m;
    for (let i = 0; i < arr.length - 1; i++){
        if (m === undefined | arr[i] * arr[i+1] > m){
            m = arr[i] * arr[i+1];
        }
    }

    return m;
}

console.log(f([2,3,-5,-2, 4]));