//Desarrollo del ejercicio

// Declaracíon de URLs a utilizar
let urlClientes = "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json"
let urlProveedores = "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json"

// Importar módulos necesarios para el proyecto
let axios = require('axios');
let fs = require('fs');
let http = require('http');
let url = require('url');

// Declaración variables donde se guardan los JSON
let jsonClientes = '';
let jsonProveedores = '';
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

axios.get(urlProveedores)
.then(function(response)
{
    jsonProveedores = response.data
})
.catch(function(error)
{
    console.warn(error);
});

