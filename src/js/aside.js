const asideLinks = document.querySelectorAll('.aside-link')
const totalWrap = document.querySelector('.total-wrap')




if(asideLinks.length > 0){
    for(let i = 0; i < asideLinks.length; i++){
        const asideLink = asideLinks[i]
        
            
        asideLink.addEventListener('click', function(e){
            const asideName = asideLink.getAttribute('href').replace('#','')
            const curentAside = document.getElementById(asideName)
            asideOpen(curentAside)
            e.preventDefault()
        })

    }
}

const asideCloseBtns = document.querySelectorAll('.aside-close');
if(asideCloseBtns.length >  0){
    
    for(let i = 0; i < asideCloseBtns.length; i++){
        const closeBtn = asideCloseBtns[i]
        
        closeBtn.addEventListener('click', function(e){
            asideClose(closeBtn.closest('aside'));
            e.preventDefault();
        })
    }
}

function asideOpen(curentAside){
    if(curentAside){
        const asideActive = document.querySelector('.open')
        if(asideActive){
            asideClose(asideActive)
        } 
        curentAside.classList.add('open');
        totalWrap.classList.add('fixed');
        curentAside.addEventListener('click', function(e){
            if(!e.target.closest('.aside-content')){
                asideClose(e.target.closest('aside'))
            }
        })
    }
}

function asideClose(asideActive){
    totalWrap.classList.remove('fixed')
    asideActive.classList.remove('open')
}
