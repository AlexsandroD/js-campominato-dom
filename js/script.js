
    
    const container = document.querySelector('.container');
    const button = document.getElementById('btn');
    let risposta = scelta(100);
    let classeBox = classe('box');
    let bomb = howManyMine(16);
   
    function scelta (num){
        return num;
    }
    function classe(stile){
        return stile;
    }
    function howManyMine(num){
        return num
    }

    const addBox = () => {
        const node = document.createElement('div');  
        node.className = classeBox;
        return node
    }



            
    let arrayBombs = [];
    mentre()
    function mentre (){
        
        while(arrayBombs.length < bomb){
        const random = generateRandom(1,risposta);
        if(!arrayBombs.includes(random)){
        arrayBombs.push(random);
            }
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
            console.log(this.textContent)
                    for(k = 0; k < risposta; k++){
                        
                        if(this.textContent == boom[k]){
                         this.classList.add(lost());
                        }else{
                            this.classList.add('active')
                        }
                    }
          
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
    const selectNumberOfMine = document.getElementById('numero-mine').value;
    container.innerHTML = '';
    arrayBombs = [];
    switch(selectValue){
        
        case 'easy':
            risposta = scelta(100) ;
            classeBox= classe('box');
            bomb = howManyMine(selectNumberOfMine);
            break;
            
            case 'medium':
                risposta = scelta(81) ;
                classeBox= classe('box2');
                bomb = howManyMine(selectNumberOfMine);

                break;
                
                
                case 'hard':
                risposta = scelta(49) ;
                classeBox= classe('box3');
                bomb = howManyMine(selectNumberOfMine);

                break;
                default:
                }
                
                
         mentre()
         generateItem();        
    })

    

   
    
    




