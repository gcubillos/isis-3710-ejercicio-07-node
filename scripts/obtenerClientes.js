//Desarrollo del ejercicio obtener datos clientes

// Declaracíon de URL a utilizar
let urlClientes = "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json"

// Importar módulos necesarios para el proyecto
let axios = require('axios');
let fs = require('fs');
let http = require('http');
let url = require('url');

// Declaración variables donde se guardan los JSON
let jsonClientes = '';
// Obtener archivos JSON axios por debajo utiliza promesas
axios.get(urlClientes)
.then(function(response)
{
    jsonClientes = response.data
})
.catch(function(error)
{
    console.warn(error);
});

let par = document.createElement('p');
let text = document.createTextNode(jsonClientes);
par.appendChild(text);
document.appendChild(par);
