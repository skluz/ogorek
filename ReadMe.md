improvements:
- no more callbacks, promises only (except hooks) [callbacks tree]
- no 'actions' layer - complicated logic moved to specific pages -
actions can be still useful in case operations which involve many pages/rest interfaces
[90% actions was single operations, copy & paste, long file]



- common actions & validations methods (with logging)
- debug possible: browser.pause()
- debug from intellij
- rest manager inside protractor flow
- logging framework (levels, file log, resolving placeholders, etc., custom levels for steps, scenarios)
- directory structure + easy modules import
- container class
- table class
- builder
- string instead of regexps


todo:
- samplers for GUI
- screenshots

+ bean compare without all fields
+ creating bean from page elements
+ logs inside report
+ consider names of validation methods
+ what if return button.click() will fail ?
+ _this -> bind
+ page validate element
+ better import strategy
+ self created class
+ global actions/validations
+ line in logs
+ check if there is line/trace when assertion will fail
+ check rest method one by one
+ check stack trace in case ie. expectElementIsEnabled: pass, fail, error, next step
+ check stack trace in case ie. expectElementEquals: pass, fail, error, next step
+ check stack trace in case ie. click: pass, fail, error, next step
+ check stack trace in case rest method: pass, fail, error, next step
+ using winston to handle/log exceptions
+ add Panel (to handle inside elements)
= Q.reject - confirm that this is right usage
+ prototype instead of object functions
+ steps in many directories - for better merge
+ rest interface - restify
+ naming conventions Page.js vs page.js: class should start with uppercase letter
+ table cell click
+ builder for rest entries
