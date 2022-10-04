{// mobail menu 
let foc = document.querySelectorAll('#focus')
let menu = document.getElementById('myLinks')
let clous = document.getElementById('clous')

for (let i = 0; i < foc.length; i++) {
    focs(foc[i])
}

clous.addEventListener('click', function() {
    menu.style.display = 'none'
})
function focs (el) {
    el.addEventListener('focus', function () {
        menu.style.display = 'block'
    })
    el.addEventListener('focusout', function () {
        menu.style.display = 'none'
    })
}


{// slider
    let wrapParent = document.querySelectorAll('#wrap-parent')
    let div = document.querySelectorAll('#child')
    let next = document.getElementById('next')
    let back = document.getElementById('back')
    let num = 1;
    div[0].innerHTML = wrapParent[num-1].innerHTML
    div[1].innerHTML = wrapParent[num].innerHTML
    div[2].innerHTML = wrapParent[num+1].innerHTML

    
    next.addEventListener('click', function() {
        if (num != wrapParent.length-2) {
            num++
            div[0].innerHTML = wrapParent[num-1].innerHTML
            div[1].innerHTML = wrapParent[num].innerHTML
            div[2].innerHTML = wrapParent[num+1].innerHTML
        }
    })
    back.addEventListener('click', function() {
        if (num != 1) {
            num--
            div[0].innerHTML = wrapParent[num-1].innerHTML
            div[1].innerHTML = wrapParent[num].innerHTML
            div[2].innerHTML = wrapParent[num+1].innerHTML
        }
    })
    


}















}




