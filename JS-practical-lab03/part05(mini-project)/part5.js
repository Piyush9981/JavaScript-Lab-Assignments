//Create THREE product objects
const product1 = {
    name: "Laptop",
    price: 4500,
    qty: 1
};

const product2 = {
    name: "Keyboard",
    price: 800,
    qty: 2
};

const product3 = {
    name: "Mouse",
    price: 500,
    qty: 1
};

// Check the all price are numbers
if (typeof product1.price === "number" && typeof product2.price === "number" && typeof product3.price === "number") {
    // Calculate each product subtotal
    const subtotal1 = product1.price * product1.qty;
    const subtotal2 = product2.price * product2.qty;
    const subtotal3 = product3.price * product3.qty;

    const grandTotal = subtotal1 + subtotal2 + subtotal3;

    //Tiered discount using nested ternary
    const discountPercentage = grandTotal >= 5000 ? 20 : grandTotal >= 2000 ? 10 : grandTotal >= 1000 ? 5 : 0;

    const discountAmount = grandTotal * discountPercentage / 100;
    const amountAfterDiscount = grandTotal - discountAmount;

    //Apply 18% GST
    const gstAmount = amountAfterDiscount * 18 / 100;
    const finalPayableAmount = amountAfterDiscount + gstAmount;

    //Free shipping
    const freeShipping =
        (amountAfterDiscount >= 1500) || (3 >= 3);

    const shippingStatus = freeShipping ? "FREE" : "₹100 shipping charge";

    //Create Receipt
    document.getElementById("billing").innerHTML = `
        <p>${product1.name} * ${product1.qty} = ₹${subtotal1.toFixed(2)}</p>

        <p>${product2.name} * ${product2.qty} = ₹${subtotal2.toFixed(2)}</p>

        <p>${product3.name} * ${product3.qty} = ₹${subtotal3.toFixed(2)}</p>

        <hr>

        <p>Grand Total: ₹${grandTotal.toFixed(2)}</p>

        <p>Discount: ${discountPercentage}%</p>

        <p>Discount Amount: ₹${discountAmount.toFixed(2)}</p>

        <p>Amount After Discount: ₹${amountAfterDiscount.toFixed(2)}</p>

        <p>GST (18%): ₹${gstAmount.toFixed(2)}</p>

        <p>Final Payable Amount: ₹${finalPayableAmount.toFixed(2)}</p>

        <p>Shipping: ${shippingStatus}</p>
    `;

} else {

    document.getElementById("billing").innerHTML =
        "<p>Error: Product prices must be Numbers.</p>";
}