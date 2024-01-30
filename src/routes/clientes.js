const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const clientes = require('../sample1.json');
const { title } = require('process');
console.log(clientes);


router.get('/', (req, res) =>{
    res.send(clientes);
});


router.post('/api/clientes', (req, res)=>{
  
    const { id, nombre, correo_electronico, telefono} = req.body
    if(id && nombre && correo_electronico && telefono) {
        const id = clientes.length +1;
        const newCliente = {...req.body};
        console.log(newCliente);
        productos.push(newCliente);
        res.json(clientes)
    }else {
        res.json({error: 'Ocurrio un error inesperado'});
    }
    res.send('received');

 });


 router.delete('/:id', (req, res)=>{
    const{id}= req.params;
    _.each(clientes, (cliente, i) =>{
        if(cliente.id == id){
            cliente.splice(i, 1);
        }
    } )
    res.send(clientes);
});



router.put('/:id', (req, res)=>{
    const {id} = req.params
    const {nombre, correo_electronico, telefono } = req.body
    if(nombre && correo_electronico && telefono) {
        _.each(clientes, (cliente, i) =>{
            if(cliente.id == id){
                cliente.nombre = nombre;
                cliente.correo_electronico = correo_electronico;
                cliente.telefono = telefono;
            }
        });
        res.json(clientes);
    }else{
        res.status(500).json({error: 'Hubo un error'});
    }
});

        
        


module.exports= router;

/*

 

 app.get('/routes/clientes/:id',  (req, res) => {
     const cliente = clientes.find(c =>c.id === parseInt(req.params.id));
     if (!cliente) return res.status(404).send('Cliente no encontrado');
     else res.send(cliente)
 });
 
 
 
     clientes.push(cliente);
     res.send(cliente);
 });
 
 
 */