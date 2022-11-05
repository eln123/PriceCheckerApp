
## DO NOT commit to github
- you are getting API keys from sendgrid
- and you want them to be secure,
- you don't want anybody else having them


## 3 libraries we are using:
- nightmare: goes to Amazon's website and does "webscraping"
- sendgrid: @sendgrid/mail, this sends email
- dotenv: allows you to create environment variables using .env files. 
  - This is where we are going to put our API keys from sendgrid to send our emails



## nightmare

- only works for websites that use frontend frameworks like javascript
- amazon happens to be one of those websites


