function calc() {
    var billAmount = document.getElementById('billAmount').value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var totalPeople = document.getElementById('totalPeople').value;

//    var Sum = (billAmount * serviceQuality)/ totalPeople;
//     window.alert(Sum);

    // Validating input field
    if(billAmount === "" || serviceQuality === 0)
    {
        document.getElementById('message').innerHTML = '<h2 style="font-size: 28; font-style: italic; color: skyblue; text-transform: capitalize;">Please enter some value to continue</h2>';
        return;
    }
    if(totalPeople === "" || totalPeople <= 1){
        totalPeople = 1
        document.getElementById('each').style.display = "none";
    } else
    {
        document.getElementById('each').style.display ="block";
    }
     var total = (billAmount * serviceQuality) / totalPeople;
     total = Math.round(total * 100)/ 100;
     total = total.toFixed (2);

     document.getElementById('totalTip').style.display = "block";
     document.getElementById('each').style.display = "block";

     document.getElementById('tip').innerHTML = total;
    }
    document.getElementById('myCalc').reset();
    document.getElementById('totalTip').style.display = "none";
    document.getElementById('each').style.display = "none";
    document.getElementById('calculate').onclick=function(){ calc();};