const myInput = document.getElementById('myInput')
const pTag = document.getElementById('pTag')

myInput.addEventListener('change', (e) => {
  pTag.innerText = `Text Entered: ${e.target.value}`
})