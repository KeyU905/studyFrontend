var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "id": "22",
//   "pw": "cd"
// });

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
//   body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/user/11", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));