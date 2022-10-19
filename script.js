function actionButtonCredit() {
    
    var x = document.getElementById("credit");
    var y = document.getElementById("menu");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display="none"
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}


ConexionAPI();


function ConexionAPI() {
    let url = 'https://digimon-api.vercel.app/api/digimon';
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    var mostrarData = (data) => {
        console.log(data)   //Informacion del Json
        let body = ""
        for (let index = 0; index < data.length; index++) {
            //console.log(data[index]);
           // VectorNombres.push(data[index]);

            console.log(data[index]);
            console.log("name:"+data[index].name);
            console.log("lvl:"+data[index].level);

        }

        



        //console.log(body)
    }

}

