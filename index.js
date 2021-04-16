//function for displaying image in HTML document
function myDisplayer (some) {
  document.getElementById('demo').innerHTML = some
  
}
//API request for picture
function getFile (myCallback) {
  const req = new XMLHttpRequest()
  req.open('GET', 'https://images.dog.ceo/breeds/doberman/n02107142_6859.jpg')
  req.onload = function () {
    if (req.status == 200) {
      myCallback(this.response.json)  //Trying to display as an image
    } else {
      myCallback('Error: ' + req.status)
    }
  }
  req.send()

}


getFile(myDisplayer)


