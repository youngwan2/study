
(function(){
    
    const door = document.querySelector('.stage')
    let currentItem = null;

    function open(){
        currentItem.classList.remove('open')
    }
    
    function close(e){
        e.target.parentNode.classList.add('open');
        currentItem = e.target.parentNode
    }
    
    function classAddOpen(e){
      
        if(currentItem) open()

        if(e.target.classList.contains('body')) close(e)
           
                
    }   
    door.addEventListener('click',classAddOpen)

}());


