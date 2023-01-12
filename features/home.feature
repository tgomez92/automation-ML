Feature: Challenge in mercadolibre website

  Scenario Outline: As a user, I can navigate to the differents categories

    Given I am on the home page
    When I access to a <category>
    Then I should access to the correct <category> category

    Examples:
      | category                |
      | Celulares y Smartphones |
      | Cámaras Digitales       |
      | Tablets                 |
      | Audio                   |

  
  Scenario Outline: As a user, I can navigate to the differents categories and validate the quantity results

    Given I am on the home page
    And I access to a <category>
    And I should access to the correct <category> category
    When I access to the most desired article
    Then I verify the results <quantity> quantity

    Examples:
      | category                | quantity           |
      | Celulares y Smartphones | 12.822 resultados  |
      | Cámaras Digitales       | 122 resultados     |
      | Tablets                 | 3.676 resultados   |
      | Audio                   | 680 resultados     |

  @test
  Scenario Outline: As a user, I can validate that the info that appears in the product list is the same as in the publication

    Given I am on the home page
    And I access to a <category>
    And I should access to the correct <category> category
    And I access to the most desired article
    When I access to the ubication of Montevideo
    Then I can validate that the info is the same as the publication 

    Examples:
        | category                |
        | Celulares y Smartphones |