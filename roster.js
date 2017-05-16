
{
    const personForm = document.querySelector('form')

    personForm.addEventListener('submit', handleSubmit)

    function handleSubmit(ev){
        ev.preventDefault()
        const form = ev.target
        const list = document.querySelector('ul')
        const pName = form.personName.value

    const li = document.createElement('li')
    li.textContent = pName;
    list.insertBefore(li, list.firstChild)
    }
}