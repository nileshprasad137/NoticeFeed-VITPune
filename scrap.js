
var notices = [];
var i;
var latest_notice;

$(function()
{
	get_latest_notices();
	setInterval(get_latest_notices,120000);
	//get the update in an interval of 20 minutes
});


function get_latest_notices() 
{
	$.get("http://vit.edu/index.php/news/latest-news",function(data)
	{
		var html_data = data;
		//$('body').append($(html_data).find('.catItemIntroText'));

		//$clear_space = $(html_data).find('.clr');
		$intro_text = $(html_data).find('.catItemIntroText');		
		$('body').append($intro_text);	

		for(i=0;i<11;i++)
		{
			$( "a" ).eq(i).attr( 'href','http://vit.edu'+ $("a").eq(i).attr('href'));
			notices[i] =  $($intro_text).eq(i).text();
			//console.log(notices[i]);

		}

		if(latest_notice === undefined)
		{
			//first run in chrome browser
			var first_run = {
							  type: "basic",
							  title: "NoticeFeed-VITPune",
							  message: "Hey! You may like to check latest notices posted..",
							  iconUrl: "vit.png"
							}			 
				

				chrome.notifications.create(first_run );//this is asynchronous
				latest_notice = notices[0];	
				console.log(latest_notice);//works fine...

		}

		else if(latest_notice == notices[0])
		{
			//dont update
			//console.log("No Updates");
		}

		else if(latest_notice != notices[0])
		{
			//update
			latest_notice = notices[0];
			var notice_notifier = {
							  type: "basic",
							  title: "A new notice was posted on vit.edu",
							  message: latest_notice,
							  iconUrl: "vit.png"
							}			 
				

				chrome.notifications.create(notice_notifier);


		}

		/*

		for(i=0;i<3;i++)
			{
				//console.log($intro_text.find('p').eq(i).text());

				var opt = {
							  type: "basic",
							  title: "Click icon on Navigation Bar to Download Notice..",
							  message: $intro_text.find('p').eq(i).text(),
							  iconUrl: "vit.png"
							}
				 
				//message[i] = $intro_text.find('p').eq(i).text();

				chrome.notifications.create( opt,callback );//this is asynchronous
					function callback()
					{

					}
			}

			*/

	})

}


