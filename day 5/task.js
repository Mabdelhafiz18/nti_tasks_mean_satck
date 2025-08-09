var items = [];

function createItem(item) {
    items.push(item);
    return items.length - 1; 
}

function readItems() {
    if (items.length === 0) {
        console.log("No items to display.");
        return;
    }
    
    items.forEach(function(item, index) {
        console.log(index + ": " + item);
    });
}

function updateItem(index, newValue) {
    if (index < 0 || index >= items.length) {
        return false;
    }
    
    items[index] = newValue;
    return true;
}

function deleteItem(index) {
    if (index < 0 || index >= items.length) {
        return false;
    }
    
    var deletedItem = items.splice(index, 1)[0];
    return deletedItem;
}


createItem("apple");
createItem("banana");
createItem("orange");
createItem("grapes");

readItems();
console.log("---------------------\n");
updateItem(1, "strawberry");
readItems();
console.log("---------------------\n");

deleteItem(2);
readItems();
console.log("---------------------\n");

updateItem(10, "pineapple"); 
deleteItem(-1);


readItems();