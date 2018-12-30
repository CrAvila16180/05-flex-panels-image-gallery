const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    console.log(this);
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName)
     // this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('click', toggleActive))