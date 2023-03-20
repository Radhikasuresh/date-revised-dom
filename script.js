var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");
var button=document.createElement("button");
button.innerHTML="Display Data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);
document.body.append(input,button);
function displaydata(){
var inputs=document.getElementById('dob').value;
console.log(inputs);
if(Date.parse(inputs)){
    var inputdate=new Date(inputs);
console.log(inputdate);
var inp=inputdate;
var div=document.createElement("div");
div.innerHTML="Given input date is "+inp;
document.body.append(div);
var currentdate=new Date();
console.log(currentdate);
//Milliseconds diff
var millisecdiff=currentdate.getTime()-inputdate.getTime();
console.log( millisecdiff);


//var secondsdiff=Math.floor(millisecdiff/1000);
//console.log(secondsdiff);
//seconds diff
var secondsdiff=mathfloor(millisecdiff,1000);
console.log(secondsdiff);

//Minutes diff
var minutesdiff=mathfloor(secondsdiff,60);
console.log(minutesdiff);

//Hours diff
var hoursdiff=mathfloor(minutesdiff,60);
console.log(hoursdiff);

//Day diff
var daydiff=mathfloor(hoursdiff,24);
console.log(daydiff);

//Year diff
var yeardiff=getyears(inputdate,currentdate);
console.log(yeardiff);

//Month diff
var monthdiff=getmonths(inputdate,currentdate);
console.log(monthdiff);
div.innerHTML=`
Given Input date is ${inputs}<br>
Year ${yeardiff}<br>
months ${monthdiff}<br>
days ${daydiff} <br>
hour ${hoursdiff} <br>
minute ${minutesdiff} <br>
second ${secondsdiff} <br>
milli sec ${millisecdiff}<br>
`;


}
}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}
function getmonths(value1,value2){
    var year=getyears(value1,value2)
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}



  
