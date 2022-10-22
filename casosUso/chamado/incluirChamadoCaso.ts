import {client} from '../../postgress/conexao'
import { v4 as uuidv4 } from 'uuid';

export class incluirChamadoCaso{
    async incluirChamado(reqParams: any, reqBody: any){
        const {id_condomino} = reqParams;
        const {titulo, descricao} = reqBody;
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        const data_emissao = dia + '/' + mes + '/' + ano;
        const id_chamado = 1;  
        const chamado = await client.query("INSERT INTO chamado(id_chamado, titulo, descricao, situacao, id_condomino) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id_chamado, titulo, descricao, "Aberto", id_condomino]);
        return chamado.rows;
    }
}
