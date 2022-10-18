import {client} from '../../postgress/conexao'
export class incluirAvisoCaso{
    async incluirAviso(reqBody: any){
        
        const {titulo, descricao} = reqBody;
        const id = 11;
        const id_sind = 1;
        //const data = new Date();
        //const data_emissao =data.getMonth()+"-"+ data.getDay()+"-"+data.getFullYear();

       const aviso = await client.query('INSERT INTO aviso(id_aviso, titulo, descricao, id_sindico) VALUES($1, $2, $3, $4) RETURNING *',[id, titulo, descricao, id_sind ]);
       return aviso;
    }
}