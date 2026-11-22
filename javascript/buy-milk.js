var startMoney = prompt ("How much money does the user have?");
var costPerbottle = prompt ("How much does each bottle of milk cost?");


getmilk(startMoney , costPerbottle);

function getmilk (startMoney , costPerbottle){
   


    console.log ("you can buy " + calcBottles (startMoney , costPerbottle) + " bottles of milk ");

        console.log ("you only have  " + calcChange (startMoney , costPerbottle) + " remain ");

}

function calcBottles (startMoney , costPerbottle) {
    var nomberOfBottles = Math.floor (startMoney / costPerbottle);
    return nomberOfBottles ;
}
 function calcChange (startMoney , costPerbottle) {
     var change = startMoney % costPerbottle ;
return change ;
 }


