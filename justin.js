chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		
	if(changeInfo.status === 'complete'){
		chrome.tabs.sendMessage(tabId, {type: 'getDocs'}, function(doc){
			console.log(doc);
		});
	}
}); 