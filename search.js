document.addEventListener('DOMContentLoaded', function() {
    console.log("Search is ON");

    var search = document.getElementById("search");

    search.addEventListener("keypress", function() {
        console.log(this.value);
        var markInstance = new Mark(doc);
        markInstance.markRegExp(/this.value/gm, {
            "noMatch": function(term) {
                console.log("No matched  " + term);
            },
            "done": function(counter) {
                console.log("Found " + counter + " results");
            },
        });
    });
});
