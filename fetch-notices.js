/**
 * This file is used to fetch latest notices from VIT-NoticeFeed-API and checks whether any new notices have been posted.
 * Also responsible for sending Chrome Rich Notifications when new notice is posted. 
 */

var latest_notice;  // Stores latest Notice
var notices = [];   // Stores all notices (No need to store all notices. Doing this for future modifications.)

$(function()
{
    fetchNotices();
    // Check for latest notice after every hour.
    // Sends XMLHttpRequest after an hour.
	setInterval(fetchNotices,3600000);
});

function fetchNotices(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://vit-noticefeed-api.herokuapp.com/", true); // Asynchronous Request
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {        
       var data = JSON.parse(xhr.responseText);
       for(i=0;i<data.length;i++){
           notices[i] = data[i]['noticeTitle'];
       }
       if(latest_notice === undefined){
            // Set latest_notice to first notice when browser is instantiated.
            latest_notice = notices[0];
       }
       else if(latest_notice != notices[0]){
           // Send Notification
           latest_notice = notices[0];
           var notice_notifier = {
               type : "basic",
               title : "A new notice was posted at vit.edu",
               message : latest_notice,
               iconUrl : "notifyicon.png" 
           }
           chrome.notifications.create(notice_notifier);
       }
      }
    }
    xhr.send();
} 