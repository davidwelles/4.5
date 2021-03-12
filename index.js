function myDisplayer (some) {
  document.getElementById('demo').innerHTML = some
}

function getFile (myCallback) {
  const req = new XMLHttpRequest()
  req.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
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

// module.exports.submit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }

// var formUploader = require('formuploader')
// document.querySelector('form').onsubmit = formUploader.submit
