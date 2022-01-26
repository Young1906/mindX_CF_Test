const alternating_sum = (arr)=> {
    let s1 = 0, s2 = 0;
    for (let i = 0; i < arr.length; i++){
        if (i%2==0)
            s1+=arr[i] 
        else 
            s2+=arr[i]
    }

    return [s1, s2]
}

console.log(alternating_sum([60, 40, 55, 75, 64]));