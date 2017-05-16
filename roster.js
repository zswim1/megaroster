const App = {
  init() {
    const personForm = document.querySelector('form')
    console.log(this)
    console.log(this.handleSubmit)
    personForm.addEventListener('submit', (ev) => this.handleSubmit(ev))
  },

  renderListItem(name, value) {
    const li = document.createElement('li')
    li.innerHTML = `${name}: ${value}`
    return li
  },

  renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _elementsArray) => {
      if (input.value) {
        let value = input.value
        
        let li = this.renderListItem(input.name, value)
        list.appendChild(li)
      }
    })

    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = this.renderList(form.elements)

    details.appendChild(list)
  },
}

App.init()
// const personForm = document.querySelector('form')
// const but = document.querySelector('#but1')

// console.log(this)
// but.addEventListener('click', function handleClick(ev){
//     ev.preventDefault()
//     //debugger
//     const form = ev.target
//     const details = document.querySelector('.details')
//     const pName = form.personName.value
//     details.innerHTML = `Name: ${pName}`
//})

