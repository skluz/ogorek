Feature: Hello world!
  As a developer I want to have nice testing framework
  so I could write tests fast and have lots of time
  to watch youtube

  Scenario: Multiplication
    Given I'm on the calculator page
    When I multiply '2' by '3'
    Then Result should be '6'

#  Scenario: Initial validation
#    Given I'm on the calculator page
#    Then Operation Select should contains: '-, +, *' values
#    And First Field should be empty
#    And Second Field should be empty
#    And Result table should be empty
#    And Go Button should have 'Go!' value