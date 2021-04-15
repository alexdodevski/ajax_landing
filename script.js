'use strict'

const closeBtn = document.querySelectorAll('.btn_close')
const modal = document.querySelector('.modal')
const politics = document.querySelector('.politics')
const agreement = document.querySelector('.agreement')
const privacy = document.querySelector('.privacy')
const agreementUser = document.querySelector('.agreement_user')

politics.addEventListener('click', function() {
    modal.style.display = 'block'
    privacy.style.display = 'block'
})

agreement.addEventListener('click', function() {
    modal.style.display = 'block'
    agreementUser.style.display = 'block'
})

closeBtn.forEach((item) => item.addEventListener('click', function(e) {
    e.preventDefault()
    modal.style.display = 'none'
    privacy.style.display = 'none'
    agreementUser.style.display = 'none'
}))