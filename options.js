[...document.querySelectorAll("li")].forEach(el => {
    el.addEventListener("click", function(e) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let url = tabs[0].url;
        let height;
        let width;
        let text = e.target.textContent.trim()
        if (text === "Iphone") {
          width = 500;
          height = 800;
        }
  
        if (text === "Ipad") {
          width = 900;
          height = 1200;
        }
  
        if (text === "Ipad Width") {
          width = 1500;
          height = 500;
        }
  
        window.open(
          url,
          "windowOpenTab",
          `height=${height} width=${width} resizable=yes,toolbar=no,status=0,location=no,menubar=no,scrollbars=yes`
        );
      });
    });
  });
  
