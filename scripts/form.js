document.querySelector('#email').addEventListener('submit', e => {
    e.preventDefault()
    
    const message = document.createElement('h6')
    message.appendChild(document.createTextNode('Thank you for signing up!'))
    message.classList.add('message')
    
    document.querySelector('#email').innerHTML = ""
    document.querySelector('#email').appendChild(message)

    document.querySelector('#email').reset()
})