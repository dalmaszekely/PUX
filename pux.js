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

var cluster = 0;


function register(){
    getInputs();
}

function getInputs(){

    getBMI();
    if (BMI_range == 2) cluster += 1;
    else if (BMI_range == 1) cluster += 2;

    if (document.getElementById("sufficient_income").checked)
    sufficient_income = 1;
    else sufficient_income = 0;

    if (sufficient_income == 1) cluster += 3;
    else if (sufficient_income == 0) cluster += 1;

    fruits_veggies = document.getElementById("fruits_veggies").value;
    if (fruits_veggies <= 2) cluster += 1;
    else if (fruits_veggies == 3) cluster += 2;
    else cluster += 3;

    places_visited = document.getElementById("places_visited").value;
    if (places_visited <= 3) cluster += 1;
    else if (places_visited < 6) cluster += 4;
    else if (places_visited == 6) cluster += 2;
    else if (places_visited >= 7) cluster += 3;

    core_circle = document.getElementById("core_circle").value;
    if (core_circle <= 4) cluster += 1;
    else if (core_circle == 5) cluster += 4;
    else if (core_circle == 6) cluster += 2;
    else if (core_circle >= 7) cluster += 3;

    daily_shouting = document.getElementById("daily_shouting").value;
    if (daily_shouting <= 2) cluster += 2;
    else if (daily_shouting == 3) cluster += 3;
    else if (daily_shouting >=4) cluster += 1;

    supporting_others = document.getElementById("supporting_others").value;
    if (supporting_others <= 3) cluster += 1;
    else if (supporting_others <= 5) cluster += 2;
    else if (supporting_others <= 7) cluster += 4;
    else cluster += 3;
    
    achievement = document.getElementById("achievement").value;
    if (achievement <= 2) cluster += 1;
    else if (achievement <= 3) cluster += 2;
    else if (achievement <= 5) cluster += 4;
    else cluster += 3;
    
    live_vision = document.getElementById("live_vision").value;
    if (live_vision <= 2) cluster += 1;
    else if (live_vision == 3) cluster += 2;
    else if (live_vision == 4) cluster += 4;
    else cluster += 3;

    personal_awards = document.getElementById("personal_awards").value;
    if (personal_awards <= 4) cluster += 1;
    else if (personal_awards == 5) cluster += 2;
    else if (personal_awards == 6) cluster += 4;
    else cluster += 3;

    time_for_passion = document.getElementById("time_for_passion").value;
    if (time_for_passion <= 2) cluster += 1;
    else if (time_for_passion <= 4) cluster += 4;
    else cluster += 3;

    cluster = Math.round(cluster / 11);
    openPersonalPage(cluster);

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
    location.replace("./cluster_" + cluster + ".html")
}