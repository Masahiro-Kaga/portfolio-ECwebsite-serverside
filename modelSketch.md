# type: E-Commerce API

## User
firstName - string  
lastName - string  
email - string  
password - string   
mobileNo - string   
isAdmin - boolean / default:false   

## Product
name - string   
description - string    
price - number  
isActive - boolean / default:true
createdOn - date / default:new Date
orders:[
    {
        orderId
        quantity
    }
]

### associative entity - two way embed

{
    orderId
    productId
    quantity
}

## Order
userId - string
totalAmount - number
purchaseOn - date / default:new Date
products:[]
