/**
 * This file is used to append notices fetched from VIT-NoticeFeed-API to the body of 'popup.html'
 * This handles the frontend of the extension. 
 */
var noticeTitle = [];
var noticeLink = [];

function displayNotices(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://vit-noticefeed-api.herokuapp.com/", true); // Asynchronous Request
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 3) {
        $('#load-div').append('Fetching Notices ...');
      }   
      else if (xhr.readyState == 4) {        
        var data = JSON.parse(xhr.responseText);
       //console.log(data);       
        for(i=0;i<data.length;i++){
         noticeTitle[i] = data[i]['noticeTitle'];
         noticeLink[i] = data[i]['noticeLink'];
       }
       $('#load-div').remove();
       for(i=0;i<data.length;i++){
        $('#notice-div').append("<div class='notice-card'>"+"<a href="+noticeLink[i]+">"+noticeTitle[i]+"</a></div>");             
       }          
      }
    }
    xhr.send();
} 

displayNotices();