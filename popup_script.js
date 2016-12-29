var notices = [];

$(function(){
	//alert();
	$.get("http://vit.edu/index.php/news/latest-news",function(data)
	{
		var html_data = data;
		//$('body').append($(html_data).find('.catItemIntroText'));

		$clear_space = $(html_data).find('.clr');
		$intro_text = $(html_data).find('.catItemIntroText');
		
		$('body').append($intro_text);

		for(i=0;i<12;i++)
		{
			$( "a" ).eq(i).attr( 'href','http://vit.edu'+ $("a").eq(i).attr('href'));

		}
			

	})
})

$(document).ready(function()
{

	$("body").on('click',".fa-code", function(){
	    chrome.tabs.create({ url: "https://github.com/nileshprasad137/NoticeFeed-VITPune" });
	  });
})

/* Image toggling not happening...*/

