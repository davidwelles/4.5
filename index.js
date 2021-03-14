function myDisplayer (some) {
  document.getElementById('demo').innerHTML = some
}

function getFile (myCallback) {
  const req = new XMLHttpRequest()
  req.open('GET', 'https://images.dog.ceo/breeds/doberman/n02107142_6859.jpg')
  req.onload = function () {
    if (req.status == 200) {
      myCallback(this.responseText)
    } else {
      myCallback('Error: ' + req.status)
    }
  }
  req.send()

}


getFile(myDisplayer)


