const css = document.getElementById('css')
const content = document.getElementById('content')
const ecss = document.getElementById('ecss')
const econtent = document.getElementById('html')
econtent.value = content.innerHTML
ecss.value = css.innerText
ecss.addEventListener('input',()=>{
    css.innerText= ecss.value
})
econtent.addEventListener('input',()=>{
    content.innerHTML=econtent.value
})