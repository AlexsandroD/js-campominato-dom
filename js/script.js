
    
    const container = document.querySelector('.container');
    const button = document.getElementById('btn');
    const bomb = 16;
    let risposta = scelta(100);
    let classeBox = classe('box');
 
   
    function scelta (num){
        return num;
    }
    function classe(stile){
        return stile;
    }
    const addBox = () => {
        const node = document.createElement('div');  
        node.className = classeBox;
        return node
    }


            
    const arrayBombs = [];
    while(arrayBombs.length < bomb){
    const random = generateRandom(1,risposta);
    if(!arrayBombs.includes(random)){
    arrayBombs.push(random);
        }
    }

   

    generateItem();

    // creare una variabile con il return di arraybombs 
    // mettere l'indice[i] includes

    function generateItem (){
        const boom = arrayBombs;
        console.log(boom);
        for(let i = 0; i < risposta; i++){
            const item = addBox();
            item.classList.add('box')
            item.innerText = i + 1; 
            container.append(item);
            item.addEventListener('click', function(){
                // while(i < risposta){
                //     if(!item.textContent(boom)){
                //        let clearbox = document.querySelectorAll('box').classList.add('active');
                       
                //     }else{
                //         let clearbox = document.querySelectorAll('box').classList.add('bomb');
                //     }
                // }               
            })
            function lost(){
                item.classList.add('bomb');
        }
        }
       
    }

    function generateRandom(min,max){
        return Math.floor(Math.random()*(max -min +1)) + min;
    }



    button.addEventListener('click',  () =>{
    const selectValue = document.getElementById('level').value;
    container.innerHTML = '';
    
        switch(selectValue){

            case 'easy':
                risposta = scelta(100) ;
                classeBox= classe('box');
            break;

            case 'medium':
                risposta = scelta(81) ;
                classeBox= classe('box2');
            break;
            
            
            case 'hard':
                risposta = scelta(49) ;
                classeBox= classe('box3')
            break;
            default:
         }
        
        
         generateItem();        
    })

    

   
    
    




