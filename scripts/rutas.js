// Importart módulo fs
let fs = require('fs').promises;

// Creación de requestListener
let requestListener = (req, res) => {
  // No se utiliza el módulo url
  let url = req.url;
  if (url === "/api/proveedores") {
    fs.readFile("../proveedores.html")
      .then(contents => {
        // Decir que se va a devolver un html
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
      })
  }
  else if (url === "/api/clientes") {
    fs.readFile("../clientes.html")
      .then(contents => {
        // Decir que se va a devolver un html
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
      })

  }
};
// Exportar las rutas
module.exports = requestListener;