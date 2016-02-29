// Piwik
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//analytics.bullg.it/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', 1]);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

// search
window.addEventListener('DOMContentLoaded',function(){
  var search = document.querySelector('.search input');
  var courseNames = document.querySelectorAll('.project--headline a:not(.emoji)');
  var courseDescriptions = document.querySelectorAll('.project p');

  search.addEventListener('input',function(){
    for (var i = 0; i < courseNames.length; i++) {
      if (courseNames[i].innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) === -1 && courseDescriptions[i].innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) === -1) {
        courseNames[i].parentNode.parentNode.classList.add('hidden');
      } else {
        courseNames[i].parentNode.parentNode.classList.remove('hidden');
      }
    };
  });
});

