'use strict'

//  General psuedocode to get the ball rolling:
//  
//      If node is an anchor tag we need to do the following:
//          1. grab the href attribute
//          2. Match it against known types
//          3. Generate the appropriate inline for embedding
//          4. Replace the href with the embed code
//  
//  kuula.co embeds look like this:
//  <iframe width="640px" height="400px" src="https://kuula.co/share/7fBQk" allowfullscreen="true" frameborder="0" scrolling="no"></iframe>

function embed3dScreenshots(){
    //set the filter key to kuula.co
    var filterkey = "kuula.co";
    //get all a tags
    var links = document.querySelectorAll('.post a');
    //variables to be used later for storing href value and creating the screenshot to embed
    var screenshot, link;
 
    //for each anchor tag
    for (var i = 0; i < links.length; i++) {
        
        //store the current href value
        link = links[i].href;

        //if the href contains the filterkey, or kuula.co
        if (link.indexOf(filterkey) != -1) {
            screenshot = document.createElement('iframe');
            screenshot.src = link;
            screenshot.width="640px";
            screenshot.height="400px";
            screenshot.allowfullscreen="true";
            screenshot.frameborder="0";
            screenshot.scrolling="no";
            
            //<iframe width="640px" height="400px" src="https://kuula.co/share/7fBQk" allowfullscreen="true" frameborder="0" scrolling="no"></iframe>
    }
}
//In doing some research, this might help the extension to work with the LiveThreadUpdate plugin
//document.addEventListener('LiveThreadUpdate', embed3dScreenshots);