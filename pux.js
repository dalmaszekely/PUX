var BMI_range;
var sufficient_income;
var fruits_veggies;
var places_visited;
var daily_shouting;
var supporting_others;
var core_circle;
var achievement;
var live_vision;
var personal_awards;
var time_for_passion;


function register(){
    getInputs();
}

function getInputs(){

    getBMI();

    if (document.getElementById("sufficient_income").checked)
    sufficient_income = 1;
    else sufficient_income = 0;

    fruits_veggies = document.getElementById("fruits_veggies").value;
    places_visited = document.getElementById("places_visited").value;
    daily_shouting = document.getElementById("daily_shouting").value;
    supporting_others = document.getElementById("supporting_others").value;
    core_circle = document.getElementById("core_circle").value;
    achievement = document.getElementById("achievement").value;
    live_vision = document.getElementById("live_vision").value;
    personal_awards = document.getElementById("personal_awards").value;
    time_for_passion = document.getElementById("time_for_passion").value;

    openPersonalPage("cluster1");

}

function getBMI(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100;
    var BMI = weight / (height*height);
    if(BMI > 25)
        BMI_range = 2;
    else BMI_range = 1;
}

function openPersonalPage(cluster){
    window.location.href = window.location + '/' + cluster + '.html';
}