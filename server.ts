import express from "express";
import {router} from "./rotas/rotas";
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use(router);

app.listen(7000, () => console.log("Server rodando"));