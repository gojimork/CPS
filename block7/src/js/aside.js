const asideLink = document.querySelector('.nav__burger')
const callbackLinks = document.querySelectorAll('.nav__callback')
const feedbackLinks = document.querySelectorAll('.nav__feedback')

const totalWrap = document.querySelector('.total-wrap')

asideLink.addEventListener('click', function(e){
    const curentAside = document.querySelector('.aside')
    asideOpen(curentAside)
    e.preventDefault()
})

for(let i = 0; i < callbackLinks.length; i++){
    let callbackLink = callbackLinks[i]
    callbackLink.addEventListener('click', function(e){
        const curentAside = document.getElementById('callback')
        asideOpen(curentAside)
        e.preventDefault()
    })
}

for(let i = 0; i < feedbackLinks.length; i++){
    let feedbackLink = feedbackLinks[i]
    feedbackLink.addEventListener('click', function(e){
        const curentAside = document.getElementById('feedback')
        asideOpen(curentAside)
        e.preventDefault()
    })
}




const asideCloseBtns = document.querySelectorAll('.aside__btn-position');
if(asideCloseBtns.length >  0){
    
    for(let i = 0; i < asideCloseBtns.length; i++){
        const closeBtn = asideCloseBtns[i]
        
        closeBtn.addEventListener('click', function(e){
            console.log('close')
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
