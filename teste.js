async function teste(entrada, saida) {
    let result = 0;
    let id;    
    for (id = 0; id < 10000; id++) {
        result += entrada * id;
    }

    saida(entrada,id,result);
}

teste(10,function(x,y,z){
    console.log(x,y,z);
});