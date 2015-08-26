My approach:
- less code
- better control which means possibility of debug, nice logging, easy maintenance, readability


improvements:
1. no more callbacks, promises only (except hooks) [callbacks tree]
2. no 'actions' layer - [90% actions contains only single operations, the same operation in steps layer]
- simple operation or validation directly in step files
- complicated logic moved to specific pages
- actions can be still useful in case operations which involve many pages/rest interfaces
3. common actions & validations methods (logging)
4. logging framework: levels + steps, variables resolving, timestamp, line numbers, possibility to attach logs to allure report
5. directory structure [hard to find right file, really big files]
- features in separate directories
- steps in separate directories
6. imports without complicated directories structure + global available methods - validations, logger
7. debug
- from intellij
- browser.pause();




- rest manager inside protractor flow
- container class
- table class
- builder


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
