chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
    console.log(request.command);

	ReplaceAllImagesWithJustin();
	
    sendResponse({result: "success"});
});

function ReplaceAllImagesWithJustin(){
	var imgsArr = document.getElementsByTagName("img");
	
	for(var i = 0; i < imgsArr.length;i++)
	{
		imgsArr[i].src = chrome.runtime.getURL("images/justin.jpeg");
		imgsArr[i].classList.add('justin-plante');
	}
}