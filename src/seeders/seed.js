const db = require('../utils/database');
const { Users, Orders, Products, Carts, ProductsInCart, ProductsInOrder } = require('../models');
const initModels = require('../models/initModels');

initModels();

const users = [
  {username: "Cesar Adrian Lara", email: "cesar@gmail.com", password: "123"},
  {username: "Guadalupe Deyanira Hernandez", email: "deyanira@gmail.com", password: "123"},
  {username: "Kelly Yazmin Lara Cavazos", email: "yazmin@gmail.com", password: "123"},
];

const products = [
  {
    name: "Iphone 13 Pro Max", 
    imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyWQ9sKyIHLJA4PFAb8fOk_J2Ic3vYyYhsglaE8dVmczAPuSI81AZMXMLwtwtOSzVt-PLQvEjLyQ&usqp=CAc",
    price: 24500,
    availableQty: 100,
    userId: 1
  },
  {
    name: "Samsung Galaxy Z Fold4",
    imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdJwgNsDZN5Fe61y8tWBeVWcKVhiUKccs1ixuqgCJ_yBV-0z57yIFddJDo_hfD5LXJLx52diH2owSfS7flTSM96fFDXsD_iG1IUQG6YJRf6fldn0LNodc4Vg&usqp=CAE",
    price: 45000,
    availableQty: 100,
    userId: 2
  },
  {
    name: "Laptop Lenovo Ideapad 3",
    imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTstbxw7AgZmitAnaxt0luWi0C7T7PfUpy5Xs03pMOYosEw7mDUxt06VGd8BdkYPiT0gbfVZWl-cw&usqp=CAc",
    price: 9000,
    availableQty: 100,
    userId: 3
  }
];

const carts = [
  {
    userId: 1,
    totalPrice: 45000
  },
  {
    userId: 2,
    totalPrice: 9000
  },
  {
    userId: 3,
    totalPrice: 45000
  }
];

const orders = [
  {
    totalPrice: 45000,
    userId: 1,
    status: 'open'
  },
  {
    totalPrice: 9000,
    userId: 2,
    status: 'open'
  },
  {
    totalPrice: 45000,
    userId: 1,
    status: 'finished'
  },
];

const productsincart = [
  {
    cartId: 1,
    productId: 2,
    quantity: 1,
    price: 45000,
    status: 'selected', // current or purshased
  },
  {
    cartId: 2,
    productId: 3,
    quantity: 1,
    price: 9000,
    status: 'selected'
  },
  {
    cartId: 3,
    productId: 2,
    quantity: 1,
    price: 45000,
    status: 'purshased'
  },
];

const productsinorder = [
  {
    orderId: 1,
    productId: 2,
    quantity: 1,
    price: 45000,
    status: 'on hold' // on hold, purshased
  },
  {
    orderId: 2,
    productId: 3,
    quantity: 1,
    price: 9000,
    status: 'on hold'
  },
  {
    orderId: 3,
    productId: 2,
    quantity: 1,
    price: 45000,
    status: 'on hold'
  }
];


db.sync({force: true}).then(() => {
  users.forEach(async (user) => Users.create(user));

  setTimeout(() => {
    products.forEach(async (product) => Products.create(product));
  }, 200);

  setTimeout(() => {
    carts.forEach(async (cart) => Carts.create(cart));
  }, 400);

  setTimeout(() => {
    orders.forEach(async (order) => Orders.create(order));
  }, 600);

  setTimeout(() => {
    productsincart.forEach(async (productincart) => ProductsInCart.create(productincart));
  }, 800);

  setTimeout(() => {
    productsinorder.forEach(async (productinorder) => ProductsInOrder.create(productinorder));
  }, 1000)
});



