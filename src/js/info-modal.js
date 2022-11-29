(() => {
    const refs = {
      openInfoBtn: document.querySelector("[data-info-open]"),
      openInfo1Btn: document.querySelector("[data-info1-open]"),
      openInfo2Btn: document.querySelector("[data-info2-open]"),
      closeInfoBtn: document.querySelector("[data-info-close]"),
      info: document.querySelector("[data-info]"),
    };
    refs.openInfoBtn.addEventListener("click", toggleInfo);
    refs.openInfo1Btn.addEventListener("click", toggleInfo);
    refs.openInfo2Btn.addEventListener("click", toggleInfo);
    refs.closeInfoBtn.addEventListener("click", toggleInfo);
  
    function toggleInfo() {
      refs.info.classList.toggle("is-hidden");
    }
  })();