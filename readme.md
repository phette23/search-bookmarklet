LibSearch Bookmarklet
====================

A bookmarklet that, when clicked, pops up a dialog to search a library catalog. By default, the text filled in the dialog is based on the title of the web page. Thus, for instance, if I'm on the Wikipedia page for [Bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet) and I click the LibSearch link in my bookmarks toolbar, the dialog will default to "Bookmarklet" and I can search for that term in a library catalog.

Thank Stevens
-------------

This code is inspired by and heavily reuses code written by Barbara Arnett and Valerie Forrestal from the Stevens Institute of Technology. Here is [a link](stevens.edu/library/research/) to their version of the bookmarklet. I tried to improve upon it a bit, including

    - Rather than just stripping out the generic Wikipedia title, I strip out Wikipedia, Google, Bing, & Yahoo! so most major search engines are covered.
    - Slightly safer script injection, including assuring the "undefined" keyword.
    
Customization
-------------

    - Change the search URL in search-bookmarklet.js to your own catalog
    - Change the title if you like
    - Make a better marketing page
    - ...that's it.
    