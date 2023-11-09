const veiculos = [
    {modelo : "passeio", marca : "nissam"},
    {modelo : "passeio", marca : "bmw"},
    {modelo : "passeio", marca : "nissam"},
    {modelo : "esportivo", marca : "honda"},
    {modelo : "esportivo", marca : "porshe"},
    {modelo : "esportivo", marca : "Tesla"},
    {modelo : "esportivo", marca : "nissam"},
];

const exibe_veiculos = function(){
    const render = document.querySelector('#render');
    render.innerText = "";
    for(veiculo of veiculos){
        render.innerHTML += `
         <div style="width:25%; margin:10px;">
            <h1>Modelo: <b>${veiculo.modelo}</b></h1>
            <h2>Marca: <b>${veiculo.marca}</b></h2>
         </div>
        `;
    }
}