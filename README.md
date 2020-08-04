# Unnamed Pwned App
<img width="1078" alt="Screen Shot 2020-08-03 at 11 22 38 PM" src="https://user-images.githubusercontent.com/29113711/89249511-585b7200-d5e0-11ea-86dd-55cdae468856.png">

<img width="1108" alt="Screen Shot 2020-08-03 at 11 23 14 PM" src="https://user-images.githubusercontent.com/29113711/89249569-80e36c00-d5e0-11ea-85da-66d3bb7ed886.png">




#### Project Description

Search a database of all known breached accounts to see if your accounts have been popped.

#### Approach

I've been interested in data security for a while and always liked the idea of having a repo where all these breaches could be tracked...as it is no longer a matter of IF your account will get popped...but when.

#### Directions

To use the current stand build, simply put your email address into the search field and it will querey the HiBP db to see if your email address is present. If it is, additionally information regarding those domains will be displayed in addition to more detailed information regarding the breach.

#### Technologies Used

- HTML
- CSS
- React.js
- React Router
- bootstrap
- HaveIBeenPwned API

#### Getting Started / Installation Instructions

- To run this app, you will need to clone or fork this repo and then push a deployment to a service like Heroku or GCP/GAE.
- run npm install
- You will need to purchase an API key from https://haveibeenpwned.com/API/Key and save to .env.local file
- You will need to add "https://cors-anywhere.herokuapp.com/" to your API calls for them to work unless you setup a proxy server to handle CORS

#### Contribution Guidelines

If something isn't working as expected, please feel free to open a pull request.

#### Challenges

This was more than a bit of a challenge. This was the first time that I've worked with an API in this particular way in addition to my first time working with bootstrap.

#### Unsolved issues and known bugs

- Some styling could be improved to help readability 

#### Additional enhancements

- Additional styling and images on the About page
- Better styling on landing page
- Landing page needs an carousel with rotating facts
- Have URL that user could copy or bookmark so they could easily return to a previous search
