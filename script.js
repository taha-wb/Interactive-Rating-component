

const submitButton = document.querySelector('button')

const list = document.querySelectorAll('li')



submitButton.addEventListener('click', () => {
    document.querySelector('.thankyou').style.display = 'flex'
    document.querySelector('.form').style.display = 'none'

})



list.forEach(li => {
    li.addEventListener('click' , (e)=>{
       
        li.classList.add('clicked')
        list.forEach(num => {
            if(num !== e.target){
                num.classList.remove('clicked')
            }
        })

        const rating = e.target.innerHTML 
        document.querySelector('.rating-selected').innerHTML = `you selected ${rating} out of 5`
    })

})


