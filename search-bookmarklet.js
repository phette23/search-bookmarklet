// inspired by & based on a bookmarklet by Barbara Arnett and Valerie Forrestal at the
// Stevens Institute of Technology, 2011. See https://www.stevens.edu/library/research/
(function (window, document, undefined) {
    var a=document.title.replace(' - Wikipedia, the free encyclopedia','')
		.replace(' - Google Search','')
		.replace(' - Bing','')
		.replace(' - Yahoo! Search Results','');
    void(a=prompt('Search the Chesapeake College Library for:',a));
    if(a)
        {
        var b='http://catalog.chesapeake.edu/view.aspx?keyword='+a;
        window.location.href=b;
        }
}(window, document));