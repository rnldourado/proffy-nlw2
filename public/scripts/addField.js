//Procurar o botão//Quando clicar no botão
document.querySelector("#add-time").addEventListener('click',cloneField);

//Executar uma ação
function cloneField(){
    //Duplicar os Campos //Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Limpar os campos, quais campos??
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpar ele
        field.value = '';
    });
    

    
    //Colocar na página, onde????
    document.querySelector('#schedule-items').appendChild(newFieldContainer);

}
