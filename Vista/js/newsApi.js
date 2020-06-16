var uri = 'http://newsapi.org/v2/top-headlines?' +
          'country=co&' +
          'apiKey=b3d3966422c64a508a36570704b3dd8e';


fetch(uri)
    .then(response => response.json())
    .then(data => console.log(data))
.catch(error => console.log(error)); 
/*$(document).ready(function() {

    $("#btnNoticias").on("click", function(e){

        e.preventDefault();
        let busqueda = $("#busquedaNoticias").val();
        let uri = "Access-Control-Allow-Origin:http://newsapi.org/v2/top-headlines?q="+busqueda+"&country=us&" +
          "apiKey=b3d3966422c64a508a36570704b3dd8e";

        if(busqueda !== ""){
            $.ajax({
                uri: uri,
                method: "GET",
                dataType: "json",

                success: function(news){
                    console.log(news);
                },

                error: function(){
                    console.log("error");
                }
            })
        }else{
            console.log("esci")
        }
    });

});*/