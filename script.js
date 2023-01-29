
let localStorageArray = [];

document.getElementById("currentDay").innerHTML = moment().format('dddd ,MMMM Do');

let innerHTML = '';
// Create an array of hours from 9am to 5pm
const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Get the current date and time
const currentDate = new Date();

// Get the current hour
const currentHour = currentDate.getHours();

// Loop through the time array
let count = 0;
for (let time of timeArray) {
    // Check if the current hour matches the value in the array
    if (time === currentHour) {
        let x = 'AM';
        if (time > 12) {
            time = time - 12;
            x = 'PM';
        }
        console.log(time + ":00 is the current hour");
        innerHTML += '<div class="col-lg-12"><div class="input-group"><div style="width:80px" class="input-group-prepend"><span class="input-group-text basic-addon1"> &nbsp;&nbsp; ' + time + x + '&nbsp;&nbsp;</span></div><input style="background-color:red; color:black" type="text" class="form-control ' + count + '" aria-label="Username"aria-describedby="basic-addon1"><div class="input-group-append basic-addon2"><span  class=" input-group-text basic-addon2">&nbsp;&nbsp;&nbsp;&nbsp; <i id=' + count + ' style="color: white;"class="xyz fas fa-save"></i>&nbsp;&nbsp; &nbsp;&nbsp;</span></div></div></div>'
    } else if (time < currentHour) {
        let x = 'AM';
        if (time > 12) {
            time = time - 12;
            x = 'PM';
        }
        console.log(time + ":00 is in the past");
        innerHTML += '<div class="col-lg-12"><div class="input-group"><div style="width:80px" class="input-group-prepend"><span class="input-group-text basic-addon1"> &nbsp;&nbsp; ' + time + x + '&nbsp;&nbsp;</span></div><input style="background-color:#D3D3D3; color:black" type="text" class="form-control ' + count + '" aria-label="Username"aria-describedby="basic-addon1"><div class="input-group-append basic-addon2"><span  class=" input-group-text basic-addon2">&nbsp;&nbsp;&nbsp;&nbsp; <i id=' + count + '  style="color: white;"class="xyz fas fa-save"></i>&nbsp;&nbsp; &nbsp;&nbsp;</span></div></div></div>'
    } else {
        let x = 'AM';
        if (time > 12) {
            time = time - 12;
            x = 'PM';
        }
        console.log(time + ":00 is in the future");
        innerHTML += '<div class="col-lg-12"><div class="input-group"><div  style="width:80px"class="input-group-prepend"><span class="input-group-text basic-addon1"> &nbsp;&nbsp; ' + time + x + '&nbsp;&nbsp;</span></div><input style="background-color:green; color:black" type="text" class="form-control ' + count + '" aria-label="Username"aria-describedby="basic-addon1"><div class="input-group-append basic-addon2"><span class=" input-group-text basic-addon2">&nbsp;&nbsp;&nbsp;&nbsp; <i id=' + count + '  style="color: white;"class="xyz fas fa-save"></i>&nbsp;&nbsp; &nbsp;&nbsp;</span></div></div></div>'
    }
    count++;
}
$('#timeFrame').html(innerHTML);


$('.xyz').click(function (event) {
    let element = $('.' + $(event.target).attr('id'))
    if (element && element.val()) {
        console.log("🚀 ~ file: assignment1.html:79 ~ element", element.val())
        localStorageArray[$(event.target).attr('id')] = element.val();
        localStorage.setItem('work', JSON.stringify(localStorageArray));
    }
});

if (localStorage.getItem('work')) {
    localStorageArray = JSON.parse(localStorage.getItem('work'));
    for (let i = 0; i < localStorageArray.length; i++) {
        if (localStorageArray[i]) {
            const element = localStorageArray[i];
            $('.' + i).val(localStorageArray[i]);
        }
    }
}
