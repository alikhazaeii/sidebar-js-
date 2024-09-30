  const arrow = document.querySelector('nav>div>i')
  const nav = document.querySelector('nav')
  const div = document.querySelector('div')
  const ul = document.querySelector('ul')
  arrow.addEventListener('click', (e) => {
    nav.classList.toggle('nav-w')
    ul.classList.toggle('ul-w')
    div.classList.toggle('close')
    e.target.classList.toggle('rotate')
  })


  const subMenu = document.querySelectorAll('nav>ul>li>ul')
    const li = document.querySelectorAll('nav>ul>li')
 // calc height subMenu and h = 0 //
 subMenu.forEach((val)=>{
        val.setAttribute('data-h', val.clientHeight)
        val.style.height='0'
    })
    // calc height subMenu and h = 0 //

    li.forEach((val, i)=>{
        val.addEventListener('click' , ()=>{
            console.log(val.children[4]);
            if(val.children[4] != undefined){
                // reset subMenu//
                subMenu.forEach((item , index)=>{
                    if(index != i){
                        item.style.height='0'
                    }else{
                        let myHeight = val.children[4].clientHeight
                        console.log(myHeight);
                        
                        if(myHeight == 0){
                            val.children[4].style.height = val.children[4].getAttribute('data-h')+'px'
                        }else{
                            val.children[4].style.height = '0px'
                        }
                    }
                })
                // reset subMenu//


                // val.children[2].style.height=val.children[2].getAttribute('data-h')+'px'
            }
        })
    })
   

