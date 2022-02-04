# Create an E-Commerce API MVP using ExpressJS.

## Packages Required:
- [x] express
- [x] mongoose
- [x] cors
- [x] bcrypt
- [x] jsonwebtoken
- [x] nodemon

---

## Features Required:

- [x] 01_GET_user registration
- [x] 02_POST_User authentication
- [x] 03_PUT_Set user as admin (Admin only)
- [x] 04_POST_Create Product (Admin only)
- [x] 05_GET_Retrieve all active products
- [x] 06_GET_Retrieve single product
- [x] 07_PUT_Update Product information (Admin only)
- [x] 08_PUT_Archive Product (Admin only)
- [x] 09_POST_Non-admin User checkout (Create Order)
- [x] 10_GET_Retrieve authenticated user’s orders
- [x] 11_GET_Retrieve all orders (Admin only)

---

## Stretch Requirements:

- [x] 12_PUT_Activate Product (Admin Only)  
- [x] 13_GET_Display Products Per Order (User Only)

---

## Data Model Requirements

### User
First Name (string)    
Last Name (String)  
MobileNo (String)  
Email (string)  
Password (string)  
isAdmin (Boolean - defaults to false)  

---

### Product
Name (string)  
Description (string)  
Price (number)  
isActive (Boolean - defaults to true)  
createdOn (Date - defaults to current date of   creation)

---

### Order

totalAmount (number)  
purchasedOn (Date - defaults to current date of creation)  
Must be associated with:
A user who owns the order  
Products that belong to the order 