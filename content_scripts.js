chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
    console.log(request.command);

	var imgsArr = document.getElementsByTagName("img");
	
	for(var i = 0; i < imgsArr.length;i++)
	{
		imgsArr[i].src = chrome.runtime.getURL("images/justin.jpeg");
	}
	
    sendResponse({result: "success"});
});