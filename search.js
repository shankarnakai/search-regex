;(function(doc) {
    'use strict';

    console.log("Search in ON");
    var markInstance = new Mark(document);
    markInstance.markRegExp(/Lor.*/gmi, {
        "noMatch": function(term) {
	    console.log("No matched  "+ term); 
        },
        "done": function(counter) {
	    console.log("Found "+ counter + " results");
        },
    });
    console.log("Marquei ");
})(document);

