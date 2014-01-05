document.addEventListener("DOMContentLoaded", function() {
   // '- waiting for the DOM to finish loading, equal to $(document).ready() in jQuery

// replace function by Olly (@0x04)
function replace(result) {
  for (var index = 1, length = arguments.length; index < length; index++)
  {
    result = result.replace('%s', arguments[index]);
  }
  
  return result;
}

    // loading a new Ajax Request
    var xml = new XMLHttpRequest();
    
    // opening a connection
    xml.open('GET','https://api.github.com/orgs/bullgit/repos', false);
    


    // when the state changed (data received )
    xml.onreadystatechange = function() {
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
                  console.log("case 1: " + j + " --- " + obj[i]['name'])
                  j++;
                  break;
                case 2:
                  var output = document.querySelector("[data-column='2']");
                  console.log("case 2: " + j + " --- " + obj[i]['name'])
                  j = 1;
                  break;
                default:
                  j = 1;
              }  
            }       
            // and adding our brand-new bullshit to it.
            output.innerHTML += layout;
        }
    };

    // sending data
    xml.send();    
});