document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;


    if(input != "") {
        showWarning('Carregando...');

        let url = `api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputs)}&appid=$9c2d703012042d86cabce3d92a96f176&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        console.log(json);
    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML =  msg;
}