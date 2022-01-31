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
isActive - boolean
		   default: true
CreatedOn - date
			default: new Date
orders: [
	
	{
		orderId
		quantity
	}

]

### associative entity - two way embed

{
    productId
    quantity
}

## Order
userId - string
totalAmount - number
purchasedOn - date
			default: new Date
products: [

	{
		productId
		quantity
	}

]