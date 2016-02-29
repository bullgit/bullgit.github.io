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
  var projectNames = document.querySelectorAll('.project--headline a:not(.emoji)');
  var projectDescriptions = document.querySelectorAll('.project p');

  search.addEventListener('input',function(){
    for (var i = 0; i < projectNames.length; i++) {
      if (projectNames[i].innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) === -1 && projectDescriptions[i].innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) === -1) {
        projectNames[i].parentNode.parentNode.classList.add('hidden');
      } else {
        projectNames[i].parentNode.parentNode.classList.remove('hidden');
      }
    };
  });
});

