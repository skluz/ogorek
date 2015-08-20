improvements:
- removed callbacks - current version uses only promises (except hooks)
- no 'actions' layer - complicated logic moved to specific pages classes
- common actions & validations methods (with logging)
- debug possible: browser.pause()
- debug from intellij
- rest manager inside protractor flow
- logging framework (levels, file log, etc)
- directory structure
- class files starting from capital letter
- container class
- builder

problems:
- long imports

todo:
- check if there is line/trace when assertion will fail
- disabled steps in logs
- line in logs
- global actions/validations
- assertions inside flow ??
- better import strategy (requirejs?)
- self created class
- samplers for GUI as well
- universal steps (eg: click on element defined by 'css':'.table')
- creating bean from page elements
- testing pages without cucumber

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
