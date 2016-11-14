# Link Sharing Site - Backend using AdonisJs

#### Routes/API Instructions

####To create an account:
POST http://localhost:3333/users
Request body must include:
* username
* email address
* password


####To post a link:
POST http://localhost:3333/links
Request header must include:
* Autorization with API token
Request body must include:
* user_id
* title
* destination (url you are sharing)

####To post a comment:
POST http://localhost:3333/comments
Request header must include:
* Autorization with API token
Request body must include:
* link_id
* user_id
* content

####To look at all links/posts in order from newest - oldest:
GET http://localhost:3333/links

####To look at all comments on a specific link:
Request body must include:
* link_id
* user_id
