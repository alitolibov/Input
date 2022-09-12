let form = document.forms.info
let inps = form.querySelectorAll('input')
let inputs = form.querySelectorAll('.input')
let inpsBlue = form.querySelectorAll('.input-blue')
let btn = form.querySelector('.btn')
let need = document.querySelector('.number1')
let success = document.querySelector('.number2')
let err = document.querySelector('.number3')
let imgs = form.querySelectorAll('.img-no')
let names = form.querySelectorAll('.name')
let requireds = form.querySelectorAll('.required')
let requireds2 = form.querySelectorAll('.required2')
form.onsubmit = (event) => {
    const pattern = {
        name: /^[a-z ,.'-]+$/i,
        email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        phone:  /^9989[012345789][0-9]{7}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        surname: /^[a-z ,.'-]+$/i,
        momName: /^[a-z ,.'-]+$/i,
        papName: /^[a-z ,.'-]+$/i,
        age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/,
        about: /^[A-Za-z][A-Za-z0-9]*$/,
        javascript: /^[A-Za-z][A-Za-z0-9]*$/,
        html: /^[A-Za-z][A-Za-z0-9]*$/,
        css: /^[A-Za-z][A-Za-z0-9]*$/,
        car: /^[a-z ,.'-]+$/i
    }
    inputs.forEach(input => {
     input.onkeyup = () => {
            validate(input, pattern[input.name])
        }
    })
    inpsBlue.forEach(blue => {
        validate2(blue, pattern[blue.name])
    })
    event.preventDefault()
    let all1 = 0
    let need1 = 0
    let success1 = 0
    let err1 = 0
    let bluerr = 0

    inps.forEach(inp => {
        if(inp.value.length === 0 || inp.classList.contains('invalid')) {
            err1++
        } else{ 
            success1++
        }
        inpsBlue.forEach(blue => {
            if(blue.value.length === 0 || blue.classList.contains('invalid')) {
                blue.style.border = '2px solid #EE0004'
                bluerr++
                btn.classList.add('btnActive')
                imgs.forEach(img => {
                    img.classList.add('img-yes')
                })
                requireds2.forEach(req2 => {
                    req2.style.display = 'block'
                })
                requireds.forEach(req => {
                    req.style.display = 'none'
                })
                names.forEach(nam => {
                    nam.classList.add('nameActive')
                })
            } else{
                blue.style.border = '2px solid #543FD3'
                    btn.classList.remove('btnActive')
                    imgs.forEach(img => {
                        img.classList.remove('img-yes')
                    })
                    requireds2.forEach(req2 => {
                        req2.style.display = 'none'
                    })
                    requireds.forEach(req => {
                        req.style.display = 'block'
                    })
                    names.forEach(nam => {
                        nam.classList.remove('nameActive')
                    })
            }
            
            })
    })

    if(bluerr === 0) {
        submit(form) 
    }
    err.innerHTML = err1
    success.innerHTML = success1
    need.innerHTML = err1
    if(err1 === 0) {
        submit(form)
    }
}

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}
function validate2(field, regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid2')
            field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
            field.classList.remove('valid2')
    }
}
function submit(elem) {
    let user = {
        id: Math.random()
    }
    let fm = new FormData(form)

    fm.forEach((value,key) => {
        user[key] = value
    })
    console.log(user);
}