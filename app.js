let xhr = new XMLHttpRequest();

xhr.open("GET", " http://node.uttarakhandtraveller.com/places/1");

xhr.responseType = "json";

xhr.send();


xhr.onload = function() {
  let responseObj = xhr.response;
  document.getElementById("heading").innerHTML=responseObj.place.name;
  document.getElementById("detail").innerHTML=responseObj.place.detail;
  document.getElementById("img").setAttribute("src", responseObj.place.image);
  document.getElementById("url").setAttribute("href", responseObj.place.place_url);
};