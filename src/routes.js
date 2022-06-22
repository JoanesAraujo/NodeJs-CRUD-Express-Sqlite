import { Router } from "express";
import {createTable, insertPessoa, updatePessoa, selectPessoas, deletePessoa} from './controller/pessoa.js';

const router = Router();

router.get('/', (req, res) =>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

//CRUD API
router.get('/pessoa', selectPessoas);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);


export default router;