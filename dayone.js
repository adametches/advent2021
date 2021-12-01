function solution(inputdata) {
    const dataArray = inputdata.split('\n').map(Number);
    let numberIncreased = 0;
    dataArray.forEach((depth, index, array) => {
       if (index > 0){
            if (depth > array[index-1]){
                numberIncreased += numberIncreased;
            }


       }
        
    });
    return numberIncreased;
}