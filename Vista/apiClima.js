const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const pass = '86db6da2100419080fccd35b62111124'

var button = document.querySelector('.btn')
var ciudad = document.querySelector('.ciudad')

button.addEventListener('click', function(){

    fetch(url+ciudad.value+'&appid='+pass+'&lang=es')
        .then(response => response.json() )
        .then(data => {
            
            let infoClima = document.querySelector('.infoClima')
            infoClima.innerHTML= `
                <table>
                    <tr>
                        <td>Ciudad: </td>
                        <td>${data.name}</td>
                    </tr>
                    <tr>
                        <td>Temperatura: </td>
                        <td>${data.main.temp}</td>
                    </tr>
                    <tr>
                        <td>Temperatura Min: </td>
                        <td>${data.main.temp_min}</td>
                    </tr
                    <tr>
                        <td>Temperatura Max: </td>
                        <td>${data.main.temp_max}</td>
                    </tr>
                    <tr>
                        <td>Descripcion: </td>
                        <td>${data.weather['0'].description}</td>
                    </tr>
                </table>
                `;
        })

    .catch(err => alert("La ciudad no es correcta"))
});