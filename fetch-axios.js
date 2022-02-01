// fetch--------------------------------------------

const showResult = document.getElementById("data1");
const getBtn = document.getElementById("get-btn");
// const postBtn = document.getElementById("post-btn");

const getData = () => {
  fetch("http://localhost:4000/products/retrieveAllActive")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
        showResult.innerHTML = JSON.stringify(data);
    });
};

const sendData = () => {};
getBtn.addEventListener("click", getData);
// postBtn.addEventListener("click", sendData);

// axios--------------------------------------------
