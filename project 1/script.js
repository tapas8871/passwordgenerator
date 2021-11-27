let userBirthYear = 0;  ///global variable which will hold user birth year
const inputhandler = () =>{
    userBirthYear  = document.getElementById('birth-date').value;   
}

// to calculate user current age
function calcage(){
    let cur_date = new Date();
    let cur_year = cur_date.getFullYear();

    let user_age = cur_year - userBirthYear;
    document.getElementById('calculate_age').innerHTML = user_age;
}
