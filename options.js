


  [...document.querySelectorAll("li")]
  .forEach(el =>
    {

        el.addEventListener("click", function(e)
    {
       

       
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) 
        {
             let url = tabs[0].url
             let height;
             let width;
             if(e.target.textContent.trim() === "Iphone")
             {
                 width = 500
                 height = 800
             }
     
             if(e.target.textContent.trim() === "Ipad")
             {
                 width = 900
                 height = 1200
             }

             if(e.target.textContent.trim() === "Ipad Width")
             {
                 width = 1500
                 height = 500
             }


             window.open(url, 'windowOpenTab', `height=${height} width=${width} resizable=yes,toolbar=no,status=0,location=no,menubar=no,scrollbars=yes`);
         
        });
    })
     
    })
  

