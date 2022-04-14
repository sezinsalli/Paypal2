document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'block'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'none'
    })
})

document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'block'
        document.querySelector('.signup-page').style.display = 'none'
    })
})