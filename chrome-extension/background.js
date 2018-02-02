chrome.browserAction.onClicked.addListener(function(tab) {
  var url = "https://canvasplay.github.io/css-head-inspector/head.css";
  chrome.tabs.executeScript({
    code: "(function(){var s=document.querySelector('[name=css-head-inspector]'); if(s) document.body.removeChild(s); if(s) return; s=document.createElement('link'); s.setAttribute('name','css-head-inspector'); s.setAttribute('rel','stylesheet'); s.setAttribute('href','"+ url +"'); try{document.body.appendChild(s);}catch(e){alert(e)} })();"
  });
});