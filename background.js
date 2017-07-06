// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
    console.log('onCommand event received for message: ', command);

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "open_dialog_box"
        }, function(response) {});
    });
});

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'action') {
        console.log("Message recieved of content ! ");
    }
});
