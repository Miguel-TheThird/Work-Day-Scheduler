var timeMainDiv = $(".container");
var timeBlock = $(".time-block");
var block8 = $("#8");
var block9 = $("#9");
var block10 = $("#10");
var block11 = $("#11");
var block12 = $("#12");
var block13 = $("#13"); //1PM
var block14 = $("#14"); //2PM
var block15 = $("#15"); //3PM
var block16 = $("#16"); //4PM
var block17 = $("#17"); //5PM
var block18 = $("#18"); //6PM
var allBlocks = $(".row");
var saveBtn = $(".saveBtn1");

console.log(allBlocks)
console.log(typeof allBlocks)

var momento = moment();
console.log(momento.hour()); 

allBlocks.attr("class","past")

if(momento.hour()  === 8){
    block8.attr("class", "present");
    block9.attr("class", "future");
    block10.attr("class", "future");
    block11.attr("class", "future");
    block12.attr("class", "future");
    block13.attr("class", "future");
    block14.attr("class", "future");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
}

if(momento.hour() === 9){
    block9.attr("class", "present");
    block10.attr("class", "future");
    block11.attr("class", "future");
    block12.attr("class", "future");
    block13.attr("class", "future");
    block14.attr("class", "future");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 10){
    block10.attr("class", "present");
    block11.attr("class", "future");
    block12.attr("class", "future");
    block13.attr("class", "future");
    block14.attr("class", "future");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 11){
    block11.attr("class", "present");
    block12.attr("class", "future");
    block13.attr("class", "future");
    block14.attr("class", "future");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 12){
    block12.attr("class", "present");
    block13.attr("class", "future");
    block14.attr("class", "future");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 13){
    block13.attr("class", "present");
    block14.attr("class", "future");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 14){
    block14.attr("class", "present");
    block15.attr("class", "future");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 15){
    block15.attr("class", "present");
    block16.attr("class", "future");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 16){
    block16.attr("class", "present");
    block17.attr("class", "future");
    block18.attr("class", "future");
    }

if(momento.hour() === 17){
    block17.attr("class", "present");
    block18.attr("class", "future");
    }

if(momento.hour() === 18){
    block18.attr("class", "present");
    }

//*****************EVENTS*************************/


saveBtn.on("click", function(e){
    e.preventDefault();
    var local8 = block8[0].value;
    var local9 = block9[0].value;
    var local10 = block10[0].value;
    var local11 = block11[0].value;
    var local12 = block12[0].value;
    var local13 = block13[0].value;
    var local14 = block14[0].value;
    var local15 = block15[0].value;
    var local16 = block16[0].value;
    var local17 = block17[0].value;   
    var local18 = block18[0].value; //Text area returns an array so you have to acces the value of that array by [0]
    
    
    localStorage.setItem("Content8",local8)
    localStorage.setItem("Content9",local9)
    localStorage.setItem("Content10",local10)
    localStorage.setItem("Content11",local11)
    localStorage.setItem("Content12",local12)
    localStorage.setItem("Content13",local13)
    localStorage.setItem("Content14",local14)
    localStorage.setItem("Content15",local15)
    localStorage.setItem("Content16",local16)
    localStorage.setItem("Content17",local17)
    localStorage.setItem("Content18",local18)
    renderTimeBlocks();
    }
);

function renderTimeBlocks(){
    var savedContent8 = localStorage.getItem("Content8");
    var savedContent9 = localStorage.getItem("Content9");
    var savedContent10 = localStorage.getItem("Content10");
    var savedContent11 = localStorage.getItem("Content11");
    var savedContent12 = localStorage.getItem("Content12");
    var savedContent13 = localStorage.getItem("Content13");
    var savedContent14 = localStorage.getItem("Content14");
    var savedContent15 = localStorage.getItem("Content15");
    var savedContent16 = localStorage.getItem("Content16");
    var savedContent17 = localStorage.getItem("Content17");
    var savedContent18 = localStorage.getItem("Content18");
    block8[0].value = savedContent8;
    block9[0].value = savedContent9;
    block10[0].value = savedContent10;
    block11[0].value = savedContent11;
    block12[0].value = savedContent12;
    block13[0].value = savedContent13;
    block14[0].value = savedContent14;
    block15[0].value = savedContent15;
    block16[0].value = savedContent16;
    block17[0].value = savedContent17;
    block18[0].value = savedContent18;
}

function init() {   //When this function is executed, it will get the value in localStorage as soon as the page is load
    renderTimeBlocks();
  }
  init();

    


