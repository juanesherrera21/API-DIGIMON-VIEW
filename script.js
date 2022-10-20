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

var VectorNombres = [];
var Nombre = "";
var lvl = "";

function ConexionAPI() {
    let url = 'https://digimon-api.vercel.app/api/digimon';
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    var mostrarData = (data) => {
        //console.log(data)   //Informacion del Json
        let body = ""
        for (let index = 0; index < 50; index++) {
            //console.log(data[index]);
           // VectorNombres.push(data[index]);
            VectorNombres.push(data[index].name);
            
           // console.log("name:"+data[index].name);
           // console.log("lvl:"+data[index].level);

        }
        TraerDatosPj();

        
        //console.log(body)
    }

}

function TraerDatosPj() {

    for (let index = 0; index < 50; index++) {
        
        var url = `https://digimon-api.vercel.app/api/digimon/name/${VectorNombres[index]}`;
        
        //image = `https://api.genshin.dev/characters/${VectorNombres[index]}/icon.png`
        
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))

        var mostrarData = (data) => {
            
            console.log(data);
            Nombre = String(data[0].name);
            console.log(String(data[0].name));
            lvl = data[0].level;
            image=data[0].img;  
            



            createCard(Nombre,lvl,image);


            //console.log(body)
        }
    }



}


function createCard(texto1, texto2, texto3) {

    


    let card = document.getElementById("row row-cols-1 row-cols-md-2");


    card.innerHTML += `   <div class="col mb-4">
        <div class="card" id="card">
            <div class="card-body" id="cardbody">
                <img src="${texto3}" alt="Avatar" style="width:150px; border-radius: 50%;">
                <h5 class="card-title" style="color: white;">Nombre: ${texto1}</h5> 
                <p class="card-text" style="color: white;">${texto2}.</p>
                
                
            </div>
    
        </div>
    </div>
    `;



}

