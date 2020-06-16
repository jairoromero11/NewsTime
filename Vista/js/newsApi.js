const uri = 'https://gnews.io/api/v3/search?q=';
const token = '15bafa8215f42319ee4bcb7812889e87';
var busqueda = document.querySelector("#busquedaNoticias")

function buscarNoticias(){
    fetch(uri+busqueda.value+'&token='+token+'&lang=es')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let infoNoticias = document.querySelector('.infoNoticias')
            
            /*for (let index = 0; index < data.articles.length; index++) {*/
                infoNoticias.innerHTML=`
                    
                        <table>
                            <tr>
                                <td style="color:red; font-size: 30px; text-align: center;">${data.articles['0'].title}</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="${data.articles['0'].image}" width="100%" height="350">
                                </td>
                            </tr>
                            <tr>
                                <td>${data.articles['0'].publishedAt}</td>
                            </tr>
                            <tr>
                                <td style="text-align: justify;">${data.articles['0'].description}</td>
                            </tr>
                            <tr>
                                <td><a href="${data.articles['0'].url}">Leer mas</a></td>
                            </tr>
                        </table>
                `;
            /*}*/
        });
}