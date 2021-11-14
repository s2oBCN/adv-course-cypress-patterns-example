@connectors
Feature: FilterBy

  Scenario: Initial view
    Given I'm at 'Home' page
    When I go to 'connectors' page
    Then I see 'View All' selected
    And I see all the connectors:
      | connectors                |
      | "amazon-web-services-aws" |
      | "box"                     |
      | "box-enterprise"          |

  # Scenario: Filter by AWS
  #   Given I'm at 'connectors' page
  #   When I'm in 'View All' filter
  #   And I type search word 'AWS'
  #   Then I can go to 'amazon-web-services-aws'