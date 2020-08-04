# Unnamed Pwned App

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
- bootstrap
- HaveIBeenPwned API

#### Getting Started / Installation Instructions

- To run this app, you will need to clone or fork this repo and then push a deployment to a service like Heroku or GCP/GAE.
- You will need to purchase an API key from https://haveibeenpwned.com/API/Key

#### Contribution Guidelines

If something isn't working as expected, please feel free to open a pull request.

#### Challenges

This was more than a bit of a challenge. This was the first time that I've worked with an API in this particular way in addition to my first time working with bootstrap.

#### Unsolved issues and known bugs

- Stricter validation of exact email results need to be implemented. On occasion approximate results will be returned.

#### Additional enhancements

- Additional styling and images on the About page
- Better styling on landing page
- Landing page needs an carousel with rotating facts
