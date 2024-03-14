function openlogin(){
    document.querySelector('.fa-user').addEventListener('click',function(){
        document.querySelector('.popup').style.display = 'flex';
    })
}

function closepopup(){
    document.querySelector('.close').addEventListener('click',function(){
        document.querySelector('.popup').style.display = 'none';
    })
}

function makehart(likehart){
    if (likehart.style.color == 'red'){
        likehart.style.color = 'grey'
    }
    else{
        likehart.style.color ='red'
    }
}