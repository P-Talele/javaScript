const button= document.querySelectorAll(`.box`)
const body = document.querySelector(`.body`)

button.forEach(function(box)
     {
          box.addEventListener("click",function(e) {
            if(e.target.id ==="red")
            {   
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id ==="white")
            {   
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id ==="yellow")
            {   
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id ==="gray")
            {   
                body.style.backgroundColor=e.target.id;
            }
          })
    })
    

