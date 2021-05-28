try {
    chrome.storage.sync.get(['start_time'], function(result) {
        console.log("line 3 ", result.start_time)
        if (!result.start_time) {
            chrome.storage.sync.set({
                start_time: 0
            }, function() {
                console.log(document.querySelectorAll('[id ^= "ad-text"]'))
                if (document.querySelectorAll('[id ^= "ad-text"]').length > 0) {
                    chrome.storage.sync.set({
                        start_time: new Date().getTime()
                    }, function() {
                        console.log("line 12")
                    })
                    document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].addEventListener("click", (event) => {
                        console.log("click event triggered")
                        document.querySelectorAll('[id ^= "ad-text"]').forEach(x => {
                            try {
                                if (x.classList.length == 1 && x.classList.toString() === "ytp-ad-text") {
                                    let finish_time = new Date().getTime()
                                    console.log("finish time ", finish_time)
                                    chrome.storage.sync.get(['start_time'], function(result) {
                                        if (result.start_time) {
                                            let final_duration =
                                                (finish_time - result.start_time) / 1000
                                            console.log("Watched duration", final_duration)
                                            chrome.storage.sync.remove('start_time', function() {})
                                        }
                                    })
                                }
                            } catch (error) {
                                console.log("line 25")
                                console.log(error)
                            }
                        })
                    })
                }
            });
        } else {
            if (document.querySelectorAll('[id ^= "ad-text"]').length > 0) {
                document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].addEventListener("click", (event) => {
                    console.log("click event triggered1")
                    document.querySelectorAll('[id ^= "ad-text"]').forEach(x => {
                        try {
                            if (x.classList.length == 1 && x.classList.toString() === "ytp-ad-text") {
                                let finish_time = new Date().getTime()
                                console.log("finish time1 ", finish_time)
                                chrome.storage.sync.get(['start_time'], function(result) {
                                    if (result.start_time) {
                                        let final_duration =
                                            (finish_time - result.start_time) / 1000
                                        console.log("Watched duration1", final_duration)
                                        chrome.storage.sync.remove('start_time', function() {})
                                    }
                                })
                            }
                        } catch (error) {
                            console.log("line 59")
                            console.log(error)
                        }
                    })
                })
            }
        }
    });
} catch (error) {
    console.log(error)
}

// chrome.storage.sync.remove(['start_time'], function() {
//     console.log("done")
// })