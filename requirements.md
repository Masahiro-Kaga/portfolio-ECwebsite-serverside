# Create an E-Commerce API MVP using ExpressJS.

## Packages Required:
- [x] express
- [x] mongoose
- [ ] cors
- [x] bcrypt
- [x] jsonwebtoken
- [x] nodemon

---

## Features Required:

- [x] User registration
- [x] User authentication
- [x] Set user as admin (Admin only)
- [x] Retrieve all active products
- [x] Retrieve single product
- [x] Create Product (Admin only)
- [x] Update Product information (Admin only)
- [ ] Archive Product (Admin only)
- [ ] Non-admin User checkout (Create Order)
- [ ] Retrieve authenticated user’s orders
- [ ] Retrieve all orders (Admin only)

---

## Stretch Requirements:

- [ ] Activate Product (Admin Only)  
- [ ] Display Products Per Order (User Only)

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