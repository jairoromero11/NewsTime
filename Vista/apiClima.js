var button = document.querySelector('.btn')
var ciudad = document.querySelector('.ciudad')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var tempMax = document.querySelector('.tempMax')
var tempMin = document.querySelector('.tempMin')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad.value+'&appid=86db6da2100419080fccd35b62111124&lang=es')
        .then(response => response.json())
        .then(data => {
            
            var tempValue = data['main']['temp'];
            var tempMaxValue = data['main']['temp_max'];
            var tempMinValue = data['main']['temp_min'];
            var descValue = data['weather'][0]['description']

            temp.innerHTML = tempValue;
            tempMax.innerHTML = tempMaxValue;
            tempMin.innerHTML = tempMinValue;
            desc.innerHTML = descValue;
        })

.catch(err => alert("La ciudad no es correcta"))
});