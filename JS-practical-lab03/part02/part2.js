//Task 2.1 — Movie Ticket Pricing: Build a nested ternary: age < 5 → "Free", age < 12 → "₹100", age < 60 → "₹250", else (senior citizen) → "₹150". Test it with 5 different ages.

    let age = 10;
    let ticketPrice = age < 5 ? "Free" : age < 12 ? "$100" : age < 60 ? "$250" : "$150";
    console.log(ticketPrice);
    let age1 = 15;
    let ticketPrice1 = age1 < 5 ? "Free" : age1 < 12 ? "$100" : age1 < 60 ? "$250" : "$150";
    console.log(ticketPrice1);
    let age2 = 35;
    let ticketPrice2 = age2 < 5 ? "Free" : age2 < 12 ? "$100" : age2 < 60 ? "$250" : "$150";
    console.log(ticketPrice2);
    let age3 = 4;
    let ticketPrice3 = age3 < 5 ? "Free" : age3 < 12 ? "$100" : age3 < 60 ? "$250" : "$150";
    console.log(ticketPrice3);
    let age4 = 100;
    let ticketPrice4 = age4 < 5 ? "Free" : age4 < 12 ? "$100" : age4 < 60 ? "$250" : "$150";
    console.log(ticketPrice4);

//Task 2.2 — Shipping Cost Calculator: cartTotal >= 2000 → "Free Shipping", cartTotal >= 1000 → "₹50", else → "₹100". Test with 3 different cart totals.
    let cartTotal = 1000;
    let shippingCost = cartTotal >= 2000 ? "Free Shipping" : cartTotal >= 1000 ? "$50" : "$100";
    console.log("Shipping Cost for Cart Total:", cartTotal, "is ",shippingCost);

    let cartTotal1 = 5000;
    let shippingCost1 = cartTotal1 >= 2000 ? "Free Shipping" : cartTotal1 >= 1000 ? "$50" : "$100";
    console.log("Shipping Cost for Cart Total:", cartTotal1, "is ",shippingCost1);

    let cartTotal2 = 500;
    let shippingCost2 = cartTotal2 >= 2000 ? "Free Shipping" : cartTotal2 >= 1000 ? "$50" : "$100";
    console.log("Shipping Cost for Cart Total:", cartTotal2, "is ",shippingCost2);

    let cartTotal3 = 2000;
    let shippingCost3 = cartTotal3 >= 2000 ? "Free Shipping" : cartTotal3 >= 1000 ? "$50" : "$100";
    console.log("Shipping Cost for Cart Total:", cartTotal3, "is ",shippingCost3);

    let cartTotal4 = 200;
    let shippingCost4 = cartTotal4 >= 2000 ? "Free Shipping" : cartTotal4 >= 1000 ? "$50" : "$100";
    console.log("Shipping Cost for Cart Total:", cartTotal4, "is ",shippingCost4);

//Task 2.3 — Trickier: Ternary + Logical Operator Together: Write a SINGLE ternary expression where discountType is "VIP Discount" if (isMember AND totalSpent >= 5000), "Regular Discount" if (totalSpent >= 5000 but not a member), or "No Discount" otherwise. Use && inside the ternary condition.
    let totalSpent = 5000;
    let isMember = true;
    let discountType = isMember && totalSpent >= 5000 ? "Vip Discount" : !ismember && totalSpent >= 5000 ? "Regular Discount" : "No Discount";

    console.log("Your Discount Type is: ", discountType);