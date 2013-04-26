//= require application
//= require fixtures

// Stop Ember from automatically scheduling run loops with setTimeout. It's
// non-deterministic, which is bad for tests.
Ember.testing = true;

// Re-enable automatic run loops when testing is over, for easy debugging in
// the console.
after(function() { // after all tests have finished
  Ember.testing = false;
});


Textbook.reopen({
  // Use a separate root element so we don't interfere with the test reporter.
  rootElement: '#test-app-container'
});

// Wait to initialize until we are done setting up.
Textbook.deferReadiness();

before(function(done) { // before any tests have started
  // Now that the DOM is ready, add the root element.
  $('body').append('<div id="test-app-container"></div>');

  Ember.run(function() {
    // We are done setting up. The app can now initialize.
    Textbook.advanceReadiness();

    // This `before` handler blocks the test suite until the callback (done)
    // is called. Textbook.then fires when the app has finished initializing.
    Textbook.then(function() {
      done();
    });
  });
});


// Reset the entire app before each test.
beforeEach(function() {
  Textbook.reset();
});


// Do not muck with the URL, or URL state will leak between tests.
Textbook.Router.reopen({
  location: 'none'
});


// Use the fixture adapter to pick up fixtures from Textbook.Blog.FIXTURES, etc.
Textbook.Store.reopen({
  adapter: DS.FixtureAdapter.extend({
    // Make the adapter deterministic.
    simulateRemoteResponse: false
  })
});

// Disable Konacha's resetting. We bring our own reset for Ember.
Konacha.reset = function() { };