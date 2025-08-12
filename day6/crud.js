let name = document.getElementById("name");
let description = document.getElementById("description");
let category = document.getElementById("category");
let add = document.getElementById("add");
let mood = 'add';
let tmp;

// console.log(name, description, category, add);

let product;
if (localStorage.product != null) {
    product = JSON.parse(localStorage.product);
}
else {
    product = [];
}


add.onclick = function () {
    let new_product = {
        name: name.value,
        description: description.value,
        category: category.value
    };
    if (mood === 'add') {
    product.push(new_product);
    }
    else {
        product[tmp] = new_product;
        mood = 'add';
        add.innerHTML = "Add";
    }

    // console.log(product);
    localStorage.setItem("product", JSON.stringify(product));
    clear();
    read_data()
}


function clear() {
    name.value = "";
    description.value = "";
    category.value = "";
}


function read_data() {
let table ='';
    for (let i = 0; i < product.length; i++) {
        table += `   
        <tr>
        <td>${i + 1}</td>
        <td>${product[i].name}</td>
        <td>${product[i].description}</td>
        <td>${product[i].category}</td>
        <td>
            <button id="update" onclick="update_data(${i})">Update</button>
            <button id="delete" onclick="delete_data(${i})">Delete</button>
        </td>
        </tr>
        `
    }
document.getElementById("table").innerHTML = table;
}

read_data()


function delete_data(i) {
    product.splice(i, 1);
    localStorage.setItem("product", JSON.stringify(product));
    read_data();
}


function update_data(i) {
name.value = product[i].name;
description.value = product[i].description;
category.value = product[i].category;
add.innerHTML = "Update";
mood = 'update';
tmp = i;
}