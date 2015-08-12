improvements:
- removed callbacks - current version uses only promises (except hooks)
- no 'actions' layer - complicated logic moved to specific pages classes
- common actions & validations methods (with logging)
- debug possible: browser.pause() !!!

todo:
- only one import
- rest interface - restify
- assertions inside flow
- self created class
- prototype instead of object functions
- Q.reject - confirm that this is right usage
- naming conventions Page.js vs page.js
- table cell click
- isDisplayed, isEnabled, etc.
- builder for rest entries
- add Panel