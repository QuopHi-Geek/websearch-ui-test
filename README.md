# websearch-ui-test
This project shows the functionality of the bunch Help page and covers a series of tests cases on the reasoning behind the tests gathered

### Tests Coverage
- Test search bar functionality
- Search should find test results  
- Search should NOT find test results
- Test search drop-down list results 
- Click and access articles via cards 
- Validate test results not reset 
- Navigate to bunch online platform

##### Test search bar functionality
Test was implemented to check functionality of the search bar. Methods used either via click on dropdown list or keyboard entry "Enter" button should work 


##### Search should find test 
With this test we had to made sure we know what to find and thus expected a result with a known keyword or phrase. This keyword or phrase should be present in all the search results shown below 


##### Search should NOT find test 
With this test we had to made sure we enter a "dummy" or unavailable related article or wording and thus NO result with a known keyword or phrase must be seen. This keyword or phrase should not present ANY results with the search keyword


##### Click and access articles via cards
Aside the functionality of the search bar in retrieving articles from the page , we must have access to these articles via the carded article modules ( General , Funds etc) . Once the card is clicked we must see and access the articles associated with the card


##### Validate test results not reset
After a search and a result is returned, the user must return to list of results obtained from the search query and hence we validate the presence of the results to prevent further search attempts whiles most related items are retrieved hence user can gain access to the results once more


##### Navigate to bunch online platform
From the Help page a user must be allowed access to the platform and that this test was performed on accessing bunch platform. Users should be able to quick navigate between the help and online portal seamlessly
