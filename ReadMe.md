improvements:
- no more callbacks - current version uses promises only (except hooks)
- no 'actions' layer - complicated logic moved to specific pages classes - actions can be still use in case complicated logic which involve many pages at once
- common actions & validations methods (with logging)
- debug possible: browser.pause()
- debug from intellij
- rest manager inside protractor flow
- logging framework (levels, file log, resolving placeholders, etc)
- steps logging
- directory structure
- container class
- builder

problems:
- long imports

todo:
- disabled steps in logs
- assertions inside flow ??
- better import strategy (requirejs?)
- samplers for GUI as well
- universal steps (eg: click on element defined by 'css':'.table')
- creating bean from page elements
- testing pages without cucumber
- colors
- consider names of validation methods

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
