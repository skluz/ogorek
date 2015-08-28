Feature: Demo
  As a test developer I want to have nice testing framework so I could write tests fast and spend rest of the day on facebook

  @wip
  Scenario: First scenario
    Given user on main calculator page
    When user multiply 2 by 3
    Then result should be 7

  Scenario: Rest scenario
    Given user on main calculator page
    And entry named one already exists

  Scenario: Section object
    Given user on main calculator page
    When some action using section object can be performed
    Then result should be 0

  Scenario: Table object
    Given user on main calculator page
    When user multiply 2 by 4
    Then table assertions should pass, result: 8

