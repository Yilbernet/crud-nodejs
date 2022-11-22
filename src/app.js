// Dependencias.
const express = require('express');

// importar routers.
const usersRouter = require('./users/users.router');

// Configuracion Inicial.
const port = 9090;
const app = express();

// Habilitar peticion json.
app.use(express.json());

// Ejecucion de prueba
app.get('/', (req, res) => {
   res.status(200).json({
      message: 'OK✔',
   })
})

// API V1 Routes.
app.use('/', usersRouter);

// Iniciar servidor.
app.listen(port, () => {
   console.log(`Server started at port ${port}`);
});