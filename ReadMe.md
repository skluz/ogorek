improvements:
- no more callbacks - promises only (except hooks)
- no 'actions' layer - complicated logic moved to specific pages classes - actions can be still use in case operations which involve many pages at once

- common actions & validations methods (with logging)
- debug possible: browser.pause()
- debug from intellij
- rest manager inside protractor flow
- logging framework (levels, file log, resolving placeholders, etc., custom levels for steps, scenarios)
- steps logging
- directory structure + imports
- container class
- builder
- easy modules import


todo:
- creating bean from page elements
- samplers for GUI
- testing pages without cucumber
- consider names of validation methods
- what if return button.click() will fail ?
- check all utils methods + add new once
- better validation for select.select();

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
