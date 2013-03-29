// inspired by & based on a bookmarklet by Barbara Arnett & Valerie Forrestal at the
// Stevens Institute of Technology, 2011. See https://www.stevens.edu/library/research/
(function ( window, document, undefined ) {
    var d = document;
    try {
        if ( !d.body ) throw 0;
        var a = d.title.replace( ' - Wikipedia, the free encyclopedia', '' )
                .replace( ' - Google Search', '' )
                .replace( ' - Bing', '' )
                .replace( ' - Yahoo! Search Results', '' )
                .replace( 'Amazon.com: ', '' )
                .replace( 'BARNES & NOBLE | ', '' );
                // what other sites would this be useful on?
        a = prompt( 'Search the Chesapeake College Library for:', a );
        if (a) {
            window.location.href = 'http://catalog.chesapeake.edu/view.aspx?keyword=' + encodeURIComponent(a);
        }
    }
    catch(e) {
        alert( 'Please wait until the page is finished loading.' );
    }
} ( window, document ));
