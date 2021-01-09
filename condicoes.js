   var idade = prompt("Qual a sua idade? ");
    
    if(idade >= 18){
      console.log('Posso ir no show');
    } else if(idade >= 12) {
        console.log('Posso ir no show do jonas brother');
    } else {
        console.log('Vou ao show do Patati Patata');
    }

    var ingresso = prompt("Qual é o tipo de ingresso?");

    switch(ingresso){
        case 'vip':
            console.log('Irei ficar no camarote')
            break;
        
        case 'premium':
            console.log('Irei ficar na pista premium');
            break;
        
        case 'comum':
            console.log('Irei ficar na arquibancada');
            break;
        
        default:
            console.log('Tipo de ingresso inválido');
            break;
    }