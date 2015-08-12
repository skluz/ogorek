improvements:
- removed callbacks - current version uses only promises (except hooks)
- no 'actions' layer - complicated logic moved to specific pages classes
- common actions & validations methods (with logging)
- debug possible: browser.pause()
- debug from intellij
- rest manager in flow

todo:
- better import strategy
- steps in many directories
+ rest interface - restify
- assertions inside flow ??
+ self created class
+ prototype instead of object functions
- Q.reject - confirm that this is right usage
+ naming conventions Page.js vs page.js: class should start with uppercase letter
- table cell click
+ isDisplayed, isEnabled, etc.
- builder for rest entries
- add Panel
- check stack trace in case ie. expectElementIsEnabled
