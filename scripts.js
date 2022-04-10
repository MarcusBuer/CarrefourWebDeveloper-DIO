function toggleMode() {
  const button = document.getElementById('mode-selector')
  const h1 = document.getElementById('page-title')
  const body = document.getElementsByTagName('body')[0]
  const footer = document.getElementsByTagName('footer')[0]

  changeClasses(button, h1, body, footer)
  changeText([h1], [button])
}

function changeClasses() {
  const elements = Array.from(arguments)
  elements.forEach(element => element.classList.toggle('dark-mode'))
}

function changeText() {
  const [regular, inverted] = Array.from(arguments)
  const darkModeText = "Dark Mode"
  const lightModeText = "Light Mode"

  regular.forEach(element => {
    if (element.classList.contains('dark-mode')) {
      element.innerHTML = darkModeText
      return
    }
    element.innerHTML = lightModeText
  })

  inverted.forEach(element=> {
    if (element.classList.contains('dark-mode')) {
      element.innerHTML = lightModeText
      return
    }
    element.innerHTML = darkModeText 
  })
}
