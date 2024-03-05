document.getElementById('btn-search').onclick = loadapk;

function loadapk(){
    let url = 'https://pokeapi.co/api/v2/pokemon/{id or name}/';


    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('nome').innerHTML = data['name'];
            document.getElementById('numero').innerHTML = data['id'];
            let img = data['sprites']['front_default'];
            document.getElementById('pic').setAttribute('src', img);
        })
        .catch((erro) => {
            console.log("Erro" + erro);
        });    
}
