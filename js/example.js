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
function updatePrice() {
    var menuItems = document.getElementById("menuItems");
    var quantity = document.getElementById("quantity").value;
    var totalPrice = document.getElementById("totalPrice");

    // Get the selected item's price from the dropdown
    var selectedItemPrice = parseFloat(menuItems.value);

    // Calculate the total price based on quantity
    var total = selectedItemPrice * quantity;

    // Update the total price on the page
    totalPrice.innerText =  + total.toFixed(2);
}

function placeOrder() {
    var selectedItem = document.getElementById("menuItems").options[document.getElementById("menuItems").selectedIndex].text;
    var quantity = document.getElementById("quantity").value;
    var totalPrice = document.getElementById("totalPrice").innerText;

    alert("Order Placed!\nItem: " + selectedItem + "\nQuantity: " + quantity + "\nTotal Price: " + totalPrice);
}

function sendOrderConfirmation(orderData) {
    const bodyMessage = `
        Item: ${orderData.item}<br>
        Quantity: ${orderData.quantity}<br>
        Total Price: ${orderData.totalPrice}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "idudupromise2@gmail.com",
        Password: "580800E95290FA8997598946B61E9D8D01E8",
        To: 'idudupromise2@gmail.com',
        From: "idudupromise2@gmail.com",
        Subject: "Order Confirmation",
        Body: bodyMessage,
    }).then((message) => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Order placed successfully! Check your email for confirmation.",
                icon: "success"
            });
        }
    });
}

function placeOrder() {
    const selectedItem = document.getElementById("menuItems");
    const selectedQuantity = document.getElementById("quantity");
    const selectedPrice = selectedItem.value;
    const quantity = selectedQuantity.value;
    const totalPrice = selectedPrice * quantity;

    const orderData = {
        item: selectedItem.options[selectedItem.selectedIndex].text,
        quantity: quantity,
        totalPrice: `&#8358;${totalPrice.toLocaleString()}`,
    };

    sendOrderConfirmation(orderData);
}