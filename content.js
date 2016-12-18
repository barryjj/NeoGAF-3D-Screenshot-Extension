var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        //Need to change this to make sure it's selecting elements, not text
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');
  
            //  if node is an anchor tag we need to do the following:
            //  zß1. Grab the href attribute
            //  2. Match it against known types
            //  3. Generate the appropriate inline for embedding
            //  4. Replace the href with the embed code
            //  
            //  Note to self: check to see what the hosts are for the viewers and if their embeds can be
            //  made into a boilerplate for replacement instead of having to have cases.
            //  In the worst instance, I suppose we could have a host check once the href value is checked
            //  to determine which template for inline to use.
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}