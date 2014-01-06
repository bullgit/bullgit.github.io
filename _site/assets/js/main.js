// replace function by Olly (@0x04)
function replace(result) {
  for (var index = 1, length = arguments.length; index < length; index++)
  {
    result = result.replace('%s', arguments[index]);
  }
  
  return result;
}
    // The loader element
    var loader = document.querySelector("[data-js='loader']");

    // loading a new Ajax Request
    var xml = new XMLHttpRequest();
    
    // opening a connection
    xml.open('GET','https://api.github.com/orgs/bullgit/repos', true);
    


    // when the state changed (data received )
    xml.onreadystatechange = function() {
      // waiting until the response is ready
      if (xml.status==200 && xml.readyState==4){
          // removing the loader after we got the repos
          document.querySelector("[data-js=featured-project]").removeChild(loader);
        // controller for the grid system
        var j;
        // we take the response
        var res = xml.responseText;
        // put it into a new var and parse it 
        var obj = JSON.parse(res);

        
        // then run over ALL THE BULLGIT
        // running reverse because github goes from oldest to newest
        for(i = obj.length - 1; i >= 0; i-- ) {

            var url = (obj[i]['homepage'] === null || obj[i]['homepage'] === '' )
                      ? 'https://github.com/' + obj[i]['full_name'] 
                      : obj[i]['homepage']; 

            // if it's the first item
            if(i === obj.length - 1) {
                // create a layout for the first featured project
            var layout = "<article class='content--wrap  featured--article'>" +
                         "<h2>" +
                            replace('<a href="%s">%s</a>', url, obj[i]['name']) + 
                        "</h2>" +
                            replace('<p>%s</p>', obj[i]['description']) +
                         "</article>";

                output = document.querySelector("[data-js=featured-project]"); 

                var j = 1;               
            } else {

              // output = document.querySelector("[data-js=old-projects]");

            // create a layout for all other projects
            var layout = "<article class='project'>" +
                         "<h3 class='project--headline'>" +
                            replace('<a href="%s">%s</a>', url, obj[i]['name']) + 
                        "</h3>" +
                             "<p>"+ obj[i]['description'] + "</p>" +
                         "</article>";

                // select an output @TODO[Kevin]: Re-think logic...
              switch(j) {
                case 1:
                  var output = document.querySelector("[data-column='1']");
                  j++;
                  break;
                case 2:
                  var output = document.querySelector("[data-column='2']");
                  j = 1;
                  break;
                default:
                  j = 1;
              }  
            }       
            // and adding our brand-new bullshit to it.
            output.innerHTML += layout;
        }
    } else {
      loader.innerHTML = "Unable to fetch repos from Github.";
    }
  }

    // sending data
    xml.send();

    // Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46322057-1', 'bullg.it');
ga('send', 'pageview');