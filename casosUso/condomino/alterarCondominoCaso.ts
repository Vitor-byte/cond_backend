import {client} from '../../postgress/conexao'

export class alterarCondominoCaso{
    async alterarCondomino(reqParams: any, reqBody:any){
        const {id} = reqParams;
        const {rg, nome, email, login, senha, situacao, inadimplente} = reqBody;

        const condomino = await client.query('UPDATE condomino SET rg=2 nome=$3, email=$4, login=$5, senha=$6, situacao=$7, inadimplente=$8 WHERE id=$1 RETURNING *',
        [id, rg, nome, email, login, senha, situacao, inadimplente]);

        return condomino;
    }
}
