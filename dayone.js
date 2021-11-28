var inputdata;    
function solution() {
    $.get("https://raw.githubusercontent.com/adametches/advent2021/main/dayonedata.txt", function (data) {
        console.log("Data: " + data);
        inputdata = data;
        document.getElementById("data").value = data;
    });

    const datArray = inputdata.split('\n');
}