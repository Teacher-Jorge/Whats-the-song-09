let wordForgotten = document.getElementById("wordForgotten")
let btnForget = document.getElementById('btnForget')
let btnForgot = document.getElementById('btnForgot')
let btnForgotten = document.getElementById('btnForgotten')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Esqueci como era antes de o mundo cair aos nossos pés. Há uma grande diferença entre nós em um milhão de milhas... '
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 8000)

})

btnForgotten.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordForgotten.innerHTML = 'forgotten'
    wordForgotten.style.color = 'lime'
    btnForgotten.style.background = 'lawngreen'
    btnForgotten.style.color = 'green'
    btnForgotten.disabled = 'true'
    btnForget.disabled = 'true'
    btnForgot.disabled = 'true'
})

btnForget.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordForgotten.innerHTML = 'forget'
    wordForgotten.style.color = 'red'
    btnForget.style.background = 'red'
    btnForget.disabled = 'true'
})

btnForgot.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordForgotten.innerHTML = 'Forgot'
    wordForgotten.style.color = 'red'
    btnForgot.style.background = 'red'
    btnForgot.disabled = 'true'
})