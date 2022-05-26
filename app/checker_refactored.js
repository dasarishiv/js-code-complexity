function batteryIsOk(temperature,  soc,  chargeRate,printer) {
    //apply functions - delegations
    let isBatteryStatusOk=false;
   let isValidTemprature= checkTemperatureIsWithIntheRange(temperature,printer);
   let isValidSoc= checkSocIsWithIntheRange(soc,printer);
   let isValidChargeRate= checkChargeReateIsWithIntheRange(chargeRate,printer);
    if( isValidTemprature && isValidSoc && isValidChargeRate){
        isBatteryStatusOk=true;
    }
    
    return isBatteryStatusOk;
}

//impure(unit testing?)
function printLogMessage_Console(msg){
     console.log(msg);//I) operation (file,socket, network,db, ..........localstorage, window)
}

//Solution - function programming paradigm
function checkTemperatureIsWithIntheRange(temperature,printer){
    
    if(temperature < 0 || temperature > 45) {
        printer(""Temperature is out of range!"");
        return false;
    }
}
function checkSocIsWithIntheRange(temperature,printer){
   if(soc < 20 || soc > 80) {
               printer("State of Charge is out of range!");
        return false;
    }
}
function checkChargeReateIsWithIntheRange(temperature,printer){
    if(chargeRate > 0.8) {
        return false;
    }
}



//test env
