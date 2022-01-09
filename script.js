{
    let button = document.getElementById('button')
    let messages = document.querySelectorAll('.message')
    button.addEventListener('click', () => {
        button.classList.add('hidden');
        if(Math.random() <= 0.50) {
            messages[0].classList.remove('hidden')
        } else {
            messages[1].classList.remove('hidden')
        }
    })
}