/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* The next two tests loop through each feed in the allFeeds
         * object and ensures it has an URL and a name defined and
         * that the URL and name are not empty.
         */

        allFeeds.forEach(function(allFeeds){
            it('url is defined and not empty', function() {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });

        allFeeds.forEach(function(allFeeds){
            it('name is defined and not empty', function() {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });
        });
    });

    /* This test suite is named "The menu" */
    describe('The menu', function() {

        /* This test ensures that the menu element is hidden 
         * by default.
         */

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* This test ensures that the menu changes visibility
         * when the menu icon is clicked. This test has two
         * expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

         it('is hiding and showing on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
         })
    });

    /* This test suite is named "Initial Entries" */
    describe('Initial Entries', function() {

        /* This test ensures that when the loadFeed function is called and 
         * completes its work, there is at least a single .entry element
         * within the .feed container.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have at least 1 entry in the feed container', function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* This test suite is named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        var oldContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = $('.feed').html();
                loadFeed(1, done);
            });
        });

        /* using afterEach (var  =  0 or null) to refresh feed container 
         * and keep test from being impacted by leftover content from 
         * previous test, using .empty() kept breaking the code
         */

        afterEach(function() {
            oldContent = 0;
        });

        /* use expect to see if the newly chosen .feed is different 
         * than the original invoked in the beforeEach function above
         */
        it('displays new content', function() {
            expect($('.feed').html()).not.toBe(oldContent);
        }, 2000);

    });
}());
