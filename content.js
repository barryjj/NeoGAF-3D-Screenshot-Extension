    var filterkey = "kuula.co";
    var allElements, thisElement, currentHref;

            //  if node is an anchor tag we need to do the following:
            //  1. grab the href attribute
            //  2. Match it against known types
            //  3. Generate the appropriate inline for embedding
            //  4. Replace the href with the embed code
            //  
            //  Note to self: check to see what the hosts are for the viewers and if their embeds can be
            //  made into a boilerplate for replacement instead of having to have cases.
            //  In the worst instance, I suppose we could have a host check once the href value is checked
            //  to determine which template for inline to use.

    //get all a tags
    allElements = document.getElementsByTagName('a');
    
    //for each anchor tag
    for (var i = 0; i < allElements.length; i++) {
        thisElement = allElements[i];

        //Get the current anchor's href value
        currentHref = thisElement.getAttribute(href);

        //if the current href value has the kuula.co in it
        if (currentHref.indexOf(filterkey) != -1) {

            //replace the current element with the iframe
            thisElement.parentNode.style.display = 'none';
        }
            
            /*
            //<iframe width="640px" height="400px" src="https://kuula.co/share/7fBQk" allowfullscreen="true" frameborder="0" scrolling="no"></iframe>

             */
            }
        }
    }
}