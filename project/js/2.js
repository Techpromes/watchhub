const searchicon1 = document.querySelector( '#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 =  document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display =  'flex'
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector( '#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 =  document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display =  'flex'
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
setTimeout(()=>{
    cross.style.display ='block';
},200);
headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right='-100%';
})

var watches = {
    s1: {
        name: "Samsung series 5 smart watch",
        price: "₦50000",
        description: "Very Delicious and you can choose the amount of spice you want!"
    },
    s2: {
        name: "Samsang Galaxy S Watch",
        price: "$150",
        description: "Classic, cheap, and affordable watch."
    },
    sb2: {
        name: "Spicy Grilled Fish Watch",
        price: "$120",
        description: "Very Delicious, satisfying, and spicy as well!"
    }
};

function updateDetails() {
    var watchSelector = document.getElementById("watchSelector");
    var selectedWatchKey = watchSelector.value;

    var selectedWatch = watches[selectedWatchKey];

    document.getElementById("selectedWatch").innerText = selectedWatch.name;
    document.getElementById("price").innerText = "Price: " + selectedWatch.price;
    document.getElementById("description").innerText = "Description: " + selectedWatch.description;
}

function placeOrder() {
    var selectedWatch = document.getElementById("selectedWatch").innerText;
    var price = document.getElementById("price").innerText;

    alert("Order Placed!\nSelected Watch: " + selectedWatch + "\nPrice: " + price);
}

// Initial details update
updateDetails();
