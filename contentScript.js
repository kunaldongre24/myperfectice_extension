/*
    Author: Arijit Paria 
    Subscribe @tutoriex on youtube to get more such scripts
    Note:
    This script is free to use, do not pay anyone anything.
    To modify or redistribute, kindly follow the license agreement strictly.
*/

//--------------------//

let current_tab_url = window.location.href;

if (
  current_tab_url.includes(
    "https://www.youtube.com/@Tutoriex_?sub_confirmation=1"
  )
) {
  const click = function () {
    document
      .querySelector("#confirm-button > yt-button-shape > button")
      .click();
  };
  setTimeout(click, 4000);
}

const click1 = function () {
  document
    .querySelector(
      "body > div.logged-in.env-production.page-responsive.page-profile > div.application-main > main > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.flex-order-1.flex-md-order-none > div > div > span > form:nth-child(1) > input.btn.btn-block"
    )
    ?.click();
};
setTimeout(click1, 2000);

//--------------------//

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.msg == "Sending Data") {
    let ansKey = message.keys;
    console.log(ansKey);
    //time out for 2 secoond
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

    setTimeout(() => {
      const nextbtn = document.querySelector(
        "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted>div.no-gutters> div:nth-child(2)> a.btn.btn-primary"
      );
      if (!nextbtn) {
        document
          .querySelector(
            "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted>div.no-gutters> div:nth-child(1)> a.btn.btn-primary"
          )
          .click();
      } else {
        nextbtn.click();
      }
    }, 3000);
  }

  if (message.msg == "start") {
    chrome.runtime.sendMessage({ msg: "startPanel" });
  }
});
