const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8080;



app.linsten(port, `estamos en el puerto ${port}`);