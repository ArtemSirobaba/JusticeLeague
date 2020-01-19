const clockContainer = document.querySelector('.clock');
setInterval(()=>(clockContainer.innerText = new Date().toLocaleTimeString()), 1000);

$('.toggle-pars').click(function() {
    $('p', faq).toggle(1500);
});

$('.toggle-pars').click(function() {
    $('h5', faq).toggle(1500);
});

$('.toggle-pars-snyder').click(function() {
    $('p', snydercut).toggle(1500);
});

const inputweather = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.submit');

button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputweather.value + '&appid=f99f651aa819eec7e440576eb722fa4a').then(response=>response.json()).then(data=>{
        let tempValue = data['main']['temp'] + (- 273.15);
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description'];
        const tempData = Math.round(JSON.stringify(tempValue));
        main.innerHTML = nameValue;
        desc.innerHTML = "Description - " + descValue;
        temp.innerHTML = "Temperature " + tempData + "&#176;С";
        inputweather.value = "";

    }
    )
    .catch(err=>alert("Wrong city name!"));
})