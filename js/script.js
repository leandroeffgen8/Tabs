const contentGrid = document.querySelector('.content-grid');
const tabBtn = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
const img = document.querySelector('#image');
let idImg;


tabBtn.forEach((item, index) => {
    item.setAttribute('data-id', (index + 1) );
});

content.forEach((item, index) => {
    item.setAttribute('id', (index + 1) );
});

contentGrid.addEventListener('click', (e) => {
    const id = e.target.dataset.id;    

    if( id ){

        tabBtn.forEach(tabs => {
            tabs.classList.remove('active');                      
        });

        idImg = e.target.dataset.id;
        e.target.classList.add('active');

        getImagem(idImg);

        content.forEach(text => {
            text.classList.remove('active');
        });

        //Obs - não usar o queryselector nesse caso abaixo.
        const contentText = document.getElementById(id);
        debugger
        contentText.classList.add('active');   
        
    }

});

function getImagem(num){      
    idImg = `./images/img-${num}.jpg`;
    img.setAttribute('src', idImg); 
} 