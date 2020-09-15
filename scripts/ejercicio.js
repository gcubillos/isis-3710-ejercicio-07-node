//Desarrollo del ejercicio

// Declaracíon de URLs a utilizar
let urlClientes = "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json"
let urlProveedores = "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json"

// Declaración de rutas de archivos
let archivoProveedores = "../proveedores.html";
let archivoClientes = "../clientes.html";

// Variables en las que se van a escribir la información de los archivos
let htmlProveedores = '';
let htmlClientes = '';

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
    .then(function (response) {
        jsonClientes = response.data
        
    })
    .catch(function (error) {
        console.warn(error);
    });

axios.get(urlProveedores)
    .then(function (response) {
        jsonProveedores = response.data
        // Agregar el Doctype normal con bootstrap y el título
        htmlProveedores += "<!DOCTYPE html><html lang=\"en \">  <head>    <meta charset=\"UTF-8 \" />    <meta name=\"viewport \" content=\"width=device-width, initial-scale=1.0 \" />    <!--Agrega Bootstrap-->    <link      rel=\"stylesheet \"      href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css \"      integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z \"      crossorigin=\"anonymous \"    />    <title>Página Proveedores</title>  </head>  <body>      <h1>Listado de Proveedores</h1>"
        // Agregar la tabla con headers
        htmlProveedores += "<table class=\"table-striped\"> <tr>  <th>ID</th>  <th>Nombre compañía</th>  <th>Nombre contacto</th></tr>"
        // Agregar datos de tabla
        for (let i = 0; i < jsonProveedores.length; i++) {
            // Agrega una fila a la tabla
            htmlProveedores += "<tr>"

            let filaActual = jsonProveedores[i];
            // Agrega idproveedor
            htmlProveedores += "<td>" + filaActual.idproveedor + "</td>";
            // Agrega nombrecompania
            htmlProveedores += "<td>" + filaActual.nombrecompania + "</td>";
            // Agrega nombrecontacto
            htmlProveedores += "<td>" + filaActual.nombrecontacto + "</td>";

            // Cierra el tag de fila
            htmlProveedores += "</tr>";
        }


        fs.writeFile('./proveedores.html', htmlProveedores, err => {

        })
    })
    .catch(function (error) {
        console.warn(error);
    });




