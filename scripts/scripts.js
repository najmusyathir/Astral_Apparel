
fetch("../assets/products.json")

.then(function (response){

    return response.json();
})

.then (function (products){
    let dressContainer = document.getElementById("dress_container");
    let maxiProducts = products.Maxi_Dress;

    let itemDress = "";

    for (let product of maxiProducts){
        itemDress += `<div class="prod_item">
        <img src="${product.img}" alt="${product.name}">
        <div class="prod_details">
            <p id="prod_name"><strong>${product.name}</strong></p>
            <p id="prod_price">${product.price}</p>
        </div>
    </div>`;
    }
    dressContainer.innerHTML = itemDress;


    let abayaContainer = document.getElementById("abaya_container");
    let abayaProducts = products.Abaya;

    let itemAbaya = "";

    for (let product of abayaProducts){
        itemAbaya += `<div class="prod_item">
        <img src="${product.img}" alt="${product.name}">
        <div class="prod_details">
            <p id="prod_name"><strong>${product.name}</strong></p>
            <p id="prod_price">${product.price}</p>
        </div>
    </div>`;
    }
    abayaContainer.innerHTML = itemAbaya;
})