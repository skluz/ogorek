improvements:
- removed callbacks - current version uses only promises (except hooks)
- no 'actions' layer - complicated logic moved to specific pages classes
- common actions & validations methods (with logging)
- debug possible: browser.pause()
- debug from intellij
- rest manager inside protractor flow
- container
- logging framework (levels, file log, etc)

todo:
- better import strategy (requirejs?)
+ steps in many directories - for better merge
+ rest interface - restify
- assertions inside flow ??
- self created class
+ prototype instead of object functions
- Q.reject - confirm that this is right usage
+ naming conventions Page.js vs page.js: class should start with uppercase letter
- table cell click
- builder for rest entries
+ add Panel (to handle inside elements)
- check stack trace in case ie. expectElementIsEnabled
- using winston to handle/log exceptions
- samplers for GUI as well
- universal steps (eg: click on element defined by 'css':'.table')