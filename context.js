chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'open_dialog_box') {
        alert("Message recieved of background!");

        chrome.runtime.sendMessage({
            action: "hello"
        }, function(response) {
        });
    }
});
