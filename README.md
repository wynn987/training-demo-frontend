# Objective 
This project was created for me to learn ReactJS with a RoR backend

# Key Areas of Research
1. ReactJS - Redux (with redux-thunk, react-redux-form)
1. Redux_Token_Auth

# Key points
1. Front End done in react-redux using a seperate project
1. Front End uses Redux_token_auth to sync with Devise_Token_Auth because initially the devise token was set to change every request
1. Use CORS with a white list to enable front-end to request from backend

# Known issues
1. Create returns 500 although successfully created when called from front-end (calling from postman works fine)
1. The index page doesnt update sometimes
1. Single item pages use data from the array rather than requesting from server again because the show function returns 500 rather than 200 (even on postman and on test)
1. Devise Token Auth is config-ed to not create a new token for each request
1. No testing for front-end