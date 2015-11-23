# Project Overview

In this project I was given a web-based application that reads RSS feeds and my task was to implement test suites with [Jasmine](http://jasmine.github.io/).

To run this application locally, open index.html in your browser and the pager will render including the test results at the bottom.

About the test suites:

"RSS Feeds"
This suite is about the RSS feeds definitions, the allFeeds variable in our application.

The 1st test checks that the allFeeds variable has been defined and that it is not empty (you can break this test by commenting out names and urls in app.js)

The 2nd and 3rd test loop through each feed in the allFeeds object and check if an URL and a name have been defined for each and that the URL and name are not empty.

"The menu"
This suite is about the menu element on the left of the page, which is shown/hidden on click

The 1st test checks whether the menu element is hidden by default.

The 2nd test ensures that the menu changes it's visibility when the menu icon is clicked. The menu is shown on the first click and hidden on a second click.

"Initial Entries"
This suite concerns the entries first loaded.

The test checks if at least one feed has been loaded once loadFeed from app.js has been called

"New Feed Selection"
This test checks for content updates

It ensures that when a new feed is loaded that the content actually changes.