function sum(a, b) {
  return a + b;
}

var x = 12;
var y = 13;
var u = "a";

function multi(a, b, c) {
  return a * b * c;
}

multi(12, 6, y);

function max(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a;
  }
}

function mention(moy) {
  if (moy < 6 && moy >= 0) {
    return "very weak";
  } else if (moy >= 6 && moy < 10) {
    return "weak";
  } else if (moy >= 10 && moy <= 15) {
    return "Good";
  } else if (moy > 15 && moy < 18) {
    return "Very Good";
  } else if (moy >= 18 && moy <= 20) {
    return "Excellent";
  } else {
    return "Error";
  }
}

// alert(mention(40));
// alert(mention(15));
// alert(mention(5));

function average(math, phy, info) {
  return (math * 3 + info * 4 + phy * 2.5) / 9.5;
}

function maxArray(T) {
  var max = T[0];
  for (let i = 0; i < T.length; i++) {
    if (T[i] > max) {
      max = T[i];
    }
  }
  return max;
}

function sumArray(T) {
  var sum = 0;
  for (let i = 0; i < T.length; i++) {
    sum = sum + T[i];
  }
  return sum;
}

function checkNegativeEl(T) {
  var i = 0;
  while (T[i] >= 0 && i < T.length) {
    i++;
  }
}
checkNegativeEl([12, 2, 8]);

function sortArray(T) {
  for (let i = 0; i < T.length - 1; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[i] > T[j]) {
        var x = T[i];
        T[i] = T[j];
        T[j] = x;
      }
    }
  }
  return T;
}
// alert(sortArray([5,8,-2,13,9]));

// T=[12,6,8,10];
// T=[10,8,6,12];
function reverse(T) {
  var stop = T.length / 2;
  for (let i = 0; i < stop; i++) {
    var x = T[i];
    T[i] = T[T.length - i - 1];
    T[T.length - i - 1] = x;
  }
  return T;
}

// alert(reverse([12,6,8,3,10]));

// T=['ali', 'salah', 'ala eddine'];
// result=[2, 2, 5];
function voyelCounter(T) {
  var result = [];
  for (let i = 0; i < T.length; i++) {
    var sum = 0;
    for (let j = 0; j < T[i].length; j++) {
      if (verifVoyel(T[i][j]) == true) {
        // sum = sum +1;
        sum += 1;
      }
    }
    result[i] = sum;
  }
  return result;
}
// alert(voyelCounter(["ali", "salah", "ala eddine"]));
function verifVoyel(x) {
  var V = ["a", "e", "i", "o", "u", "y"];
  var isVoyel = false;
  for (let i = 0; i < V.length; i++) {
    if (x.toLowerCase() == V[i]) {
      isVoyel = true;
    }
  }
  return isVoyel;
}
function pairImpair(T) {
  for (let i = 0; i < T.length; i++) {
    if (T[i] % 2 == 0) {
      alert("Nbr pair");
    } else {
      alert("Nbr impair");
    }
  }
}
// pairImpair([12,7,19,3,6]);

function negativeElements(T) {
  var V = [];
  var sum = 0;
  for (let i = 0; i < T.length; i++) {
    if (T[i] < 0) {
      V.push(T[i]);
      // sum = sum+ T[i];
      sum += T[i];
    }
  }
  return [V, sum];
}
// alert(negativeElements([-9,6,12,-2,-4]));
function signup(x) {
  var firstName = document.getElementById("firstName").value;
  var verifFirstName = firstName.length < 3;
  displayError(
    "firstNameError",
    "First Name must have at least 3 chars",
    verifFirstName,
    "red"
  );
  var lastName = document.getElementById("lastName").value;
  var verifLastName = lastName.length < 4;
  displayError(
    "lastNameError",
    "Last Name must have at least 4 characters",
    verifLastName,
    "red"
  );
  var email = document.getElementById("email").value;
  var ifEmailExists = checkIfUserExistsByEmail(email);
  if (ifEmailExists) {
    alert("Email exists");
  } else {
    alert("Email does not exists");
  }
  displayError("emailError", "Invalid Email", !validateEmail(email), "red");
  var pwd = document.getElementById("pwd").value;
  var verifPwd = pwd.length < 8;
  displayError(
    "pwdError",
    "Pwd must have at least 8 characters",
    verifPwd,
    "red"
  );
  var tel = document.getElementById("tel").value;
  var verifTel = tel.length < 8;
  displayError(
    "telError",
    "Tel number must have 8 characters",
    verifTel,
    "red"
  );
  if (
    !verifLastName &&
    !verifFirstName &&
    validateEmail(email) &&
    !verifPwd &&
    !verifTel &&
    !ifEmailExists
  ) {
    var id = JSON.parse(localStorage.getItem("id") || "1");
    var user = {
      id: Number(id),
      firstName: firstName,
      lastName: lastName,
      email: email,
      pwd: pwd,
      tel: tel,
      role: x,
    };
    addObject("users", user);
    localStorage.setItem("id", Number(id) + 1);
  }
}
function validateEmail(email) {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}
function displayError(spanId, msgError, condition, color) {
  if (condition) {
    document.getElementById(spanId).innerHTML = msgError;
    document.getElementById(spanId).style.color = color;
  } else {
    document.getElementById(spanId).innerHTML = "";
  }
}
function searchUserByEmailAndPwd(email, pwd) {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var findedUser;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].pwd == pwd) {
      findedUser = users[i];
      break;
    }
  }
  return findedUser;
}
function login() {
  var email = document.getElementById("emailLogin").value;
  var pwd = document.getElementById("pwdLogin").value;
  var verifEmail = email.length > 0;
  var verifPwd = pwd.length > 0;
  displayError("emailLoginError", "Please insert email", !verifEmail, "red");
  displayError("pwdLoginError", "Please insert pwd", !verifPwd, "red");
  if (verifPwd && verifEmail) {
    var user = searchUserByEmailAndPwd(email, pwd);
    localStorage.setItem("connectedUser", user.id);
    if (user.role == "admin") {
      location.replace("admin.html");
    } else {
      location.replace("shop.html");
    }
  }
}
function checkIfUserExistsByEmail(email) {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var findedUser = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      findedUser = true;
      break;
    }
  }
  return findedUser;
}
function searchObjectById(id, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  var findedObject;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      findedObject = objects[i];
      break;
    }
  }
  return findedObject;
}
function addProduct() {
  var prName = document.getElementById("prName").value;
  var verifPrName = prName.length < 5;
  var price = document.getElementById("price").value;
  var verifPrice = Number(price) > 10;
  var stock = document.getElementById("stock").value;
  var verifStock = Number(stock) > 50;
  var category = document.getElementById("selectCategory").value;
  var fabricationDate = document.getElementById("fabricationDate").value;

  if (!verifPrName && verifPrice && verifStock) {
    var prId = JSON.parse(localStorage.getItem("prId") || "1");
    var product = {
      id: Number(prId),
      prName: prName,
      price: price,
      stock: stock,
      category: category,
      fabricationDate: fabricationDate,
    };

    addObject("products", product);
    localStorage.setItem("prId", Number(prId) + 1);
  }
}
function addObject(key, obj) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  objects.push(obj);
  localStorage.setItem(key, JSON.stringify(objects));
}
function displayUsers() {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var userTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < users.length; i++) {
    userTable =
      userTable +
      `
    <tr>
                            <td>${users[i].id}</td>
                            <td>${users[i].firstName}</td>
                            <td>${users[i].lastName}</td>
                            <td>${users[i].email}</td>
                            <td>
                            <button class="btn btn-success">Display</button>
                            <button class="btn btn-info">Edit</button>
                            <button class="btn btn-danger" onclick="deleteObject(${i}, 'users')">Delete</button>
                            </td>
                          </tr>`;
  }
  userTable =
    userTable +
    `
  </tbody>
                      </table>`;
  document.getElementById("tableOfUsers").innerHTML = userTable;
}
function displayProducts() {
  var products = JSON.parse(localStorage.getItem("products") || "[]");
  var productTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Category</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < products.length; i++) {
    productTable =
      productTable +
      `
    <tr>
                            <td>${products[i].id}</td>
                            <td>${products[i].prName}</td>
                            <td>${products[i].price}</td>
                            <td>${products[i].stock}</td>
                            <td>${products[i].category}</td>
                            <td>
                            <button class="btn btn-success">Display</button>
                            <button class="btn btn-info" onclick="displayEdit(${products[i].id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteObject(${i}, 'products')">Delete</button>
                            </td>
                          </tr>`;
  }
  productTable =
    productTable +
    `
  </tbody>
                      </table>`;
  document.getElementById("tableOfProducts").innerHTML = productTable;
}
function deleteObject(pos, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  objects.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(objects));
  location.reload();
}
function shopProducts() {
  var products = JSON.parse(localStorage.getItem("products") || "[]");
  var shopProductsTable = ``;
  for (let i = 0; i < products.length; i++) {
    shopProductsTable =
      shopProductsTable +
      `
      <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                  <ul class="featured__item__pic__hover">
                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                  </ul>
              </div>
              <div class="featured__item__text">
                  <h6><a href="#">${products[i].prName}</a></h6>
                  <h5>${products[i].price} DT</h5>
                  <h5>${products[i].category} </h5>
                  <button class='btn btn-success' onclick="goToPage('display-product.html', ${products[i].id})">Reserve </button>
              </div>
          </div>
      </div>
`;
    document.getElementById("shopProductsID").innerHTML = shopProductsTable;
  }
}
function goToPage(pageName, id) {
  localStorage.setItem("prToReserve", id);
  location.replace(pageName);
}
function displayProductById() {
  var id = localStorage.getItem("prToReserve");
  var product = searchObjectById(id, "products");
  document.getElementById("prName").innerHTML = product.prName;
  document.getElementById("prPrice").innerHTML = product.price;
  document.getElementById("prCategory").innerHTML = product.category;
}
function displayEdit(id) {
  var product = searchObjectById(id, "products");
  var editForm = `
  <div >
                <div class="row">
                    <div class="col-lg-12 col-md-12" class="form-group">
                        <input type="number" id="editPrice" class="form-control" value=${product.price} placeholder="Price">
                        <span id="priceError"></span>
                    </div>
                    <div class="col-lg-12 col-md-12" class="form-group">
                        <input type="number" id="editStock" class="form-control" value=${product.stock} placeholder="Stock">
                        <span id="stockError"></span>
                    </div>
                    <div class="col-lg-12 text-center">
                        <button type="submit" class="site-btn" onclick="validateEdit(${product.id})">Edit product</button>
                    </div>
                </div>
            </div>`;
  document.getElementById("editFormDiv").innerHTML = editForm;
}
function validateEdit(id) {
  alert("here id from btn " + id);
  var newPrice = document.getElementById("editPrice").value;
  var newStock = document.getElementById("editStock").value;
  var products = JSON.parse(localStorage.getItem("products") || "[]");
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].price = newPrice;
      products[i].stock = newStock;
      break;
    }
  }
  localStorage.setItem("products", JSON.stringify(products));
  location.reload();
}
function reserve() {
  var id = localStorage.getItem("prToReserve");
  var product = searchObjectById(id, "products");
  var qty = document.getElementById("qty").value;
  if (Number(qty) <= Number(product.stock)) {
    // edit product stock
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        // products[i].stock = products[i].stock - Number(qty);
        products[i].stock -= Number(qty);
        break;
      }
    }

    localStorage.setItem("products", JSON.stringify(products));
    var connectedUserId = localStorage.getItem("connectedUser");
    var orderId = JSON.parse(localStorage.getItem("orderId") || "1");
    var order = {
      id: orderId,
      qty: Number(qty),
      prId: Number(id),
      userId: Number(connectedUserId),
    };
    addObject("orders", order);
    localStorage.setItem("orderId", Number(orderId) + 1);
    location.replace("basket.html");
  } else {
    document.getElementById("qtyError").innerHTML = "Unavailable Stock";
    document.getElementById("qtyError").style.color = "red";
  }
}
function myOrders() {
  var connectedUser = localStorage.getItem("connectedUser");
  var orders = JSON.parse(localStorage.getItem("orders") || "[]");
  var connectedUserOrders = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].userId == connectedUser) {
      connectedUserOrders.push(orders[i]);
    }
  }

  var user = searchObjectById(connectedUser, "users");
  document.getElementById("userName").innerHTML =
    user.firstName + " " + user.lastName + " orders";
  var orderTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Product name</th>
      <th scope="col">Qty</th>
      <th scope="col">Product price</th>
      <th scope="col">Total price</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>`;
  var sum = 0;

  for (let i = 0; i < connectedUserOrders.length; i++) {
    var pr = searchObjectById(connectedUserOrders[i].prId, "products");
    sum = sum + pr.price * connectedUserOrders[i].qty;
    orderTable =
      orderTable +
      `
    <tr>
                            <td>${connectedUserOrders[i].id}</td>
                            <td>${pr.prName}</td>
                            <td>${connectedUserOrders[i].qty}</td>
                            <td>${pr.price} DT</td>
                            <td>${pr.price * connectedUserOrders[i].qty} DT</td>
                            <td>
                              ${displayModal(i, "orders", "Order")}
                            </td>
                          </tr>`;
  }

  orderTable =
    orderTable +
    `
  <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Total</th>
      <th scope="col">${sum} DT</th>
    </tr>
    </tbody>
</table>`;
  document.getElementById("userOrders").innerHTML = orderTable;
}
function orderNbr() {
  var connectedUser = localStorage.getItem("connectedUser");
  var orders = JSON.parse(localStorage.getItem("orders") || "[]");
  var connectedUserOrdersNbr = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].userId == connectedUser) {
      connectedUserOrdersNbr += 1;
    }
  }
  document.getElementById("orderNbr").innerHTML = connectedUserOrdersNbr;
}
function displaySearchedProducts() {
  var minPrice = localStorage.getItem("min");
  var maxPrice = localStorage.getItem("max");
  var products = getObjects("products");
  var searchResult = [];
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].price >= Number(minPrice) &&
      products[i].price <= Number(maxPrice)
    ) {
      searchResult.push(products[i]);
    }
  }

  var shopProductsTable = ``;
  for (let i = 0; i < searchResult.length; i++) {
    shopProductsTable =
      shopProductsTable +
      `
      <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="featured__item">
              <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                  <ul class="featured__item__pic__hover">
                      <li><a href="#"><i class="fa fa-heart"></i></a></li>
                      <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                  </ul>
              </div>
              <div class="featured__item__text">
                  <h6><a href="#">${searchResult[i].prName}</a></h6>
                  <h5>${searchResult[i].price} DT</h5>
                  <h5>${searchResult[i].category} </h5>
                  <button class='btn btn-success' onclick="goToPage('display-product.html', ${products[i].id})">Reserve </button>
              </div>
          </div>
      </div>
`;
  }
  document.getElementById("result").innerHTML = shopProductsTable;
}
function getObjects(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}
function goToSearch() {
  var minPrice = document.getElementById("minPrice").value;
  var maxPrice = document.getElementById("maxPrice").value;
  localStorage.setItem("min", minPrice);
  localStorage.setItem("max", maxPrice);
  location.replace("search.html");
}
function displayModal(i, key, objectName) {
  return `
  <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Delete
    </button>
    <div class="modal fade" id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Order</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        Would you like to delete this ${objectName} ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="deleteObject(${i}, '${key}')">Confirm Delete</button> 
        </div>
      </div>
    </div>
  </div>`;
}
function setHeader() {
  var connectedUser = localStorage.getItem("connectedUser");
  if (connectedUser != null) {
    var user = searchObjectById(connectedUser, "users");
    if (user.role == "user") {
      // set header for simple user
      var headerBloc = `
      <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="./basket.html">Basket</a></li>
                            <li><a>Welcome ${user.firstName}</a></li>
                            <li><a href="#" onclick= "logout()" >Logout</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>`;
      document.getElementById("headerId").innerHTML = headerBloc;
    } else {
      // set header for simple admin
      var headerBloc = `
      <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="./index.html">Home</a></li>
                            <li><a href="./admin.html">Admin</a></li>
                            <li><a href="./add-product.html">Add Product</a></li>
                            <li><a>Welcome ${user.firstName}</a></li>
                            <li><a href="#" onclick= "logout()" >Logout</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>`;
      document.getElementById("headerId").innerHTML = headerBloc;
    }
  } else {
    // display header for not connected user
    var headerBloc = `
      <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="./login.html">Login</a></li>
                            <li><a href="./signup.html">Signup</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>`;
    document.getElementById("headerId").innerHTML = headerBloc;
  }
}
function logout() {
  localStorage.removeItem("connectedUser");
  location.reload();
}

function getAllUsersEmails() {
  var dynamicList = "";
  var users = getObjects("users");
  for (let i = 0; i < users.length; i++) {
    var dynamicList =
      dynamicList +
      `
    <li onclick="alertId(${users[i].id})"><a href="#" >${users[i].email}</a></li>`;
  }
  document.getElementById("usersEmail").innerHTML = dynamicList;
}

function alertId(id) {
  alert("Here the user ID " + id);
}

function addCategory() {
  var name = document.getElementById("categoryName").value;
  var categoryId = localStorage.getItem("catId") || "1";
  var category = {
    id: Number(categoryId),
    name: name,
  };
  var categories = getObjects("categories");
  categories.push(category);
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("catId", Number(categoryId) + 1);
  location.reload();
}

function displayCategories() {
  var categories = getObjects("categories");
  catOption = "";
  for (let i = 0; i < categories.length; i++) {
    catOption =
      catOption +
      `
    <option value="${categories[i].id}">${categories[i].name}</option>
    `;
  }
  document.getElementById("selectCategory").innerHTML = catOption;
}

// function getOptionId(id) {
//   document.getElementById('optionId').innerHTML = id;
// }
