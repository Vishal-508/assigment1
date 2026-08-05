validation kya hota hai, mongoose me kese use krte hai 
minLength,maxLength,type,required, trim,enum, default,uppercase,lowercase, validate(),
throw new Error,
strict,

get method me ->
skip(),limit(), select(), 
query, params, body, --> page, limit


third party validation joi
bcrypt -> password hash
jwt -> token generation for validation and paload
auth api creation -> Registration and Login
cookie and header 





Assignment 1

npm init 
git init


Third party libraries --> 
express --> creating server
bcrypt --> hashing pasword
jwt --> generate token and pass payload
mongoose -> to connect database and create schema and model
cookie-parse -> parse cookie
nodemon -> auto reload server 


install all third party libaries- 
create server using express-
setup middlewares (json parser and cookie parser);

AuthSchema and model-

Auth apis -->
registration, login and logout

registration ->
method -> post 
try catch 
check user exist 
validation check 
password hash
save to db
response to client

login ->
method -> post
try catch 
check user exist 
password match 
jwt token create 
cookie set 
response to client 

logout ->
clear cookie -> token delete 
response to client 

Protected apis below -- (use middleware for validation check )
Product CRUD apis 
create product , getAllProduct, getProductById, updateProduct, deleteProduct

create Product ->
method -> post 
try catch 
validation check
product exist check
create product save to db
response to client

getAllProduct ->
method -> get
try catch 
fetch data from db ()
(page-1)* limit
select() 
skip().limit().sort()
response to client

getProductById
route -> /getSingleProduct/:id
method ->get
try catch 
req.params.id
fetch data from db
response to client 

updateProduct 
route -> /updateSingleProduct/:id
method -> patch
try catch 
req.params.id
validation check 
user exist 
req.body
update to db 
reponse to client 

deleteProduct 
method -> delete
try catch 
check user 
req.params.id
delete product from db
response to client 









<!-- 05/08/2026 -->
MVC pattern ->code split and structure
controller-> req.body and reponse handler
service -> Business logic and database intraction
route-> express Router, 
.env  -> store config credentials (dotenv-> third party module)
page not found handler
model folder ko module kese banaye (index.js)
mongoose Hooks -> pre and post 






