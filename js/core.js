function sendMessage() {
// Required vars
    var request = new XMLHttpRequest(), // Create a request processor to discord's api server
      message = document.getElementById('message').value,
      webhook = document.getElementById('webhook').value;
    
    request.open("POST", webhook);    
    request.setRequestHeader('Content-type', 'application/json');  

    var params = {
      username: "Quá Nhi đại sư huynh",
      avatar_url: "https://sohanews.sohacdn.com/2018/3/22/20170429-043538-nhung-my-nhan-cap-ke-voi-huynh-hieu-minh-tren-man-anh-hinh-5600x400-15217000712882024969752.jpg",
      content: message
    }

  request.send(JSON.stringify(params));
}
//setTimeout(
//    function loopSend(){
//      for (i = 0; i < 20; i++){
//        sendMessage();
//      }
//    }, 3000)