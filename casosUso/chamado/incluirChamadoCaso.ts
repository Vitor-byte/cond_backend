import {client} from '../../postgress/conexao'
import { v4 as uuidv4 } from 'uuid';

export class incluirChamadoCaso{
    async incluirChamado(reqParams: any, reqBody: any){
        const {id_condomino} = reqParams;
        const {titulo, descricao, status} = reqBody;


        const id = uuidv4();  
        const chamado = await client.query("INSERT INTOchamado(id, titulo, descricao, status, id_condomino) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id, titulo, descricao, status, id_condomino]);
        return chamado.rows;
    }
}
