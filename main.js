const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    console.log(this);
    
    panels.forEach(panel => panel.classList.remove('open'))
    if(this.getAttribute('class').includes('open')){
        this.classList.remove('open')
    } else {
        this.classList.toggle('open');
    }
       
}

function toggleActive(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')){
        
        this.classList.toggle('open-active');

    };
     
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))