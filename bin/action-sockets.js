function actions(io){
    io.on('connection',function(socket){
        console.log('usuario conectado!!!');
    });
}

module.exports =  actions