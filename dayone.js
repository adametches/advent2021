
function solution(inputdata) {
    const dataArray = inputdata.split('\n');
    var num1 =20, num2 = 10;
    dataArray.forEach((firstVal) => {
        dataArray.forEach((secondVal) => {
            prod = parseInt(firstVal) + parseInt(secondVal);
            if (prod == 2020){
                num1 = firstVal;
                num2 = secondVal;
            }
        });
    });
    return num1  * num2;
}