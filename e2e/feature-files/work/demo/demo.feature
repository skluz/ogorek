Feature: Demo
  As a test developer I want to have nice testing framework so I could write tests fast and spend rest of the day on facebook

  Scenario: Steps without callbacks
    Given user on main calculator page
    When user multiply 2 by 3
    Then result should be 5
