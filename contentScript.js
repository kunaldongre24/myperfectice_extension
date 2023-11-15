/*
    Author: Arijit Paria 
    Subscribe @tutoriex on youtube to get more such scripts
    Note:
    This script is free to use, do not pay anyone anything.
    To modify or redistribute, kindly follow the license agreement strictly.
*/

//--------------------//

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.msg == "Sending Data") {
    let ansKey = message.keys;
    console.log(ansKey);
    setTimeout(function () {
      document
        .querySelector(
          `#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.adaptive-question-box.bg-white.p-1.ng-star-inserted > div:nth-child(2) > mcq-question > div > div.question-answers.mb-0 > div:nth-child(${
            ansKey + 1
          }) > div > label > span`
        )
        .click();
      const pageWrapper = document.querySelector("#page-wrapper");

      const saveAndNextButton = pageWrapper.querySelector(
        "div.d-block.d-lg-none.fixed-bottom.ng-star-inserted a.btn-primary"
      );

      if (saveAndNextButton) {
        saveAndNextButton.click();
      }
    }, 2000);

    const intervalId = setInterval(function () {
      const saveAndNextButton = document.querySelector(
        "div.d-block.d-lg-none.fixed-bottom.ng-star-inserted a.btn-primary"
      );
      const nextButton = document.querySelector(
        "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted>div.no-gutters> div:nth-child(2)> a.btn.btn-primary"
      );

      if (saveAndNextButton) {
        clearInterval(intervalId); // if the button is loaded Stop checking
        saveAndNextButton.click();
      } else if (nextButton) {
        clearInterval(intervalId); // Stop checking
        nextButton.click();
      }
    }, 1000); // Check every 1 second for the buttons
  }

  if (message.msg == "start") {
    chrome.runtime.sendMessage({ msg: "startPanel" });
  }
});
