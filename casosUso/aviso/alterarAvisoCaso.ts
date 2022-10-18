import {client} from '../../postgress/conexao'

export class alterarAvisoCaso{
    async alterarAviso(reqParams:any, reqBody: any){
        const {titulo, descricao} = reqBody;
        const {id} = reqParams;
        const aviso = await client.query('UPDATE aviso SET titulo=$2, descricao=$3 WHERE id=$1 RETURNING *',[id, titulo, descricao]);
        return aviso;
    }
}