function startCalc(){
    console.log("start");
    const CSVtext = document.getElementById("StateTransitionText").value;
    console.log(csv2array(CSVtext));
}

function csv2array(csvData){
    const lines = csvData.split("\n");
    const csvArray = new Array();
    lines.forEach((line,idx)=>{
        csvArray[idx]=line.split(",");
    });
    return csvArray;
}