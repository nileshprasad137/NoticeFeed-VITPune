var notices = [];

$(function(){
	//alert();
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

		}

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

	})
})

