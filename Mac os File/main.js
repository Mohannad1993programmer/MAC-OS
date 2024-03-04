const side_bar_btns = document.querySelectorAll("#sidebar-btn");
side_bar_btns.forEach((elen) =>{
    elen.addEventListener('click', () =>{
        for(let index=0;index<side_bar_btns.length;index++)
        side_bar_btns[index].classList.remove('active');
        
        elen.classList.add('active')
    });
});

let min=true;

document.querySelector('.window_close').addEventListener('click',() =>{
    document.querySelector('.container').style.display="none";
});

document.querySelector('.window_maximize').addEventListener('click',() =>{
    if(min==false){
        min=true;
        document.querySelector('.container').style.width="50%";
        document.querySelector('.container').style.height="80%";    
    }
    else
    {
        min=false;
        document.querySelector('.container').style.width="100%";
        document.querySelector('.container').style.height="100%";    
    }
});

document.querySelector('.window_minimize').addEventListener('click',() =>{
    document.querySelector('.container').style.transform="scale(0)";
});


