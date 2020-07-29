## Unnamed Pwnd App

#### Project Description
Search a database of all known breached accounts to see if your accounts have been popped.

#### Wireframes
###### Home
![Image01](https://user-images.githubusercontent.com/29113711/88751839-7c254080-d126-11ea-875d-4a785fa1c8f8.png)
(User enters email address to search db)

###### Search Results
![Image02](https://user-images.githubusercontent.com/29113711/88751841-7cbdd700-d126-11ea-99b3-4489638ead6d.png)
(If any results are returned, they are displayed)

##### MVP User Stories
* As a user I'd like to search for my email to see if it was part of a data breach
* As a user I'd like to see more detail about the data breach

#### Post MVP Stretch Goals
* As a user I'd like to see more data breach stats display on the landing page
* As a user I'd like some direction and clear call to action for what next steps should be taken if there are breaches discovered
* As a user I'd like to receive a notification that my information was found in a breach.

#### API
[Have I Been Pwned Documentation](https://haveibeenpwned.com/API/v3)
##### HiBP Sample Breach Response

```json
[
{
"Name":"Adobe",
"Title":"Adobe",
"Domain":"adobe.com",
"BreachDate":"2013-10-04",
"AddedDate":"2013-12-04T00:00Z",
"ModifiedDate":"2013-12-04T00:00Z",
"PwnCount":152445165,
"Description":"In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and <a href=\"http://stricture-group.com/files/adobe-top100.txt\" target=\"_blank\" rel=\"noopener\">many were quickly resolved back to plain text</a>. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
"DataClasses":["Email addresses","Password hints","Passwords","Usernames"],
"IsVerified":True,
"IsFabricated":False,
"IsSensitive":False,
"IsRetired":False,
"IsSpamList":False,
"LogoPath":"https://haveibeenpwned.com/Content/Images/PwnedLogos/Adobe.png"
},
{
"Name":"BattlefieldHeroes",
"Title":"Battlefield Heroes",
"Domain":"battlefieldheroes.com",
"BreachDate":"2011-06-26",
"AddedDate":"2014-01-23T13:10Z",
"ModifiedDate":"2014-01-23T13:10Z",
"PwnCount":530270,
"Description":"In June 2011 as part of a final breached data dump, the hacker collective &quot;LulzSec&quot; <a href=\"http://www.rockpapershotgun.com/2011/06/26/lulzsec-over-release-battlefield-heroes-data\" target=\"_blank\" rel=\"noopener\">obtained and released over half a million usernames and passwords from the game Battlefield Heroes</a>. The passwords were stored as MD5 hashes with no salt and many were easily converted back to their plain text versions.",
"DataClasses":["Passwords","Usernames"],
"IsVerified":True,
""IsFabricated":False,
"IsSensitive":False,
"IsRetired":False,
"IsSpamList":False,
"LogoPath":"https://haveibeenpwned.com/Content/Images/PwnedLogos/BattlefieldHeroes.png"
}
]
```

#### Component Hierarchy

![Image03](https://user-images.githubusercontent.com/29113711/88753704-e50eb780-d12a-11ea-8331-fe08d64fcb62.png)
