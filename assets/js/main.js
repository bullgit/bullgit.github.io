    // The loader element
    var loader = document.querySelector("[data-js='loader']");

    // loading a new Ajax Request
    var xml = new XMLHttpRequest();
    
    // opening a connection
    xml.open('GET','https://api.github.com/orgs/bullgit/repos?per_page=100', true);
    


    // when the state changed (data received )
    xml.onreadystatechange = function() {
      // waiting until the response is ready
      if (xml.status==200 && xml.readyState==4){
          // removing the loader after we got the repos
          document.querySelector("[data-js=featured-project]").removeChild(loader);
        // controller for the grid system
        var j = 0;
        // we take the response
        var res = xml.responseText;
        // put it into a new var and parse it 
        var data = JSON.parse(res);

        // template for featured Project (latest)
        var templateFeatured = '<article class="content--wrap  featured--article">' +
        '<h2>' +
          '<a href="{html_url}">{name}</a>' + 
        '</h2>' +
          '<p>{description}</p>'+
        '</article>';

        // template for all other projects
        var template = '<article class="project">' +
        '<h3 class="project--headline">' +
          '<a href="{html_url}">{name}</a>' + 
        '</h3>' +
          '<p>{description}</p>'+
        '</article>';

        // going through all the received data; reversed because they come oldest to newest
        for(var i = data.length - 1; i >= 0; i--) {
          // asigning var obj to the current repo we're dealing with
          var obj = data[i];

          // if the grid controller var is 0 (first time we go through this)
          if(j == 0) {
            // use the featured layout
            var layout = templateFeatured.replace(/\{(.*?)\}/g, function(match, property) {
              return obj[property];
            });
            // if j is not 0 
        } else {
            // use the normal project template
            var layout = template.replace(/\{(.*?)\}/g, function(match, property) {
              return obj[property];
            });          
        }

          // same as above - defines where to insert the data.
          // if j IS 0, we insert into the featured project section
          if(j === 0) {
            output = document.querySelector("[data-js=featured-project]");
            j++; // increasing j
            // if j is not 0, we the value with a switch statement
          } else {
              switch(j) {
                // in case j IS 1, we insert the data into column 1
                case 1:
                  var output = document.querySelector("[data-column='1']");
                  j++; // and increase j by 1
                  break; // and break here so we can return to top and take the next data package
                // in case j IS 2, we insert the data into column 2
                case 2:
                  var output = document.querySelector("[data-column='2']");
                  j = 1; // and set j back to 1 so the next pack of data comes into column 1
                  break;
                default: // by default j IS 1
                  j = 1;
              }  
            } 

          // inserting the layout into the output var
          output.innerHTML += layout;
        } // end of the for loop

    } else {
      // if Github doesn't respond or there's something wrong, we display it inside the loader div
      loader.innerHTML = "Unable to fetch repos from Github.";
    }
  } // end of onreadystatechange

    // sending data
    xml.send();

    // Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46322057-1', 'bullg.it');
ga('send', 'pageview');