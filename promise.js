/**
  
    ICE CREAM BUSINESS STEPS --------> 
    
 * 1. Place Order       -      2
 * 2. Cut Fruit         -      2
 * 3. Add Water & Ice   -      1
 * 4. Start Machine     -      1
 * 5. Select Container  -      2
 * 6. Select Toppings   -      3
 * 7. Server Ice cream  -      2
 */


// Raw Materials 
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = false;

let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else
            reject(console.log("Sorry shop is closed"))
    })
}


order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

    .then(() => order(0000, () => console.log("Production has started")))
    .then(() => order(2000, () => console.log("Fruits has been chopped")))
    .then(() => order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)))
    .then(() => order(1000, () => console.log("Machine has started")))
    .then(() => order(2000, () => console.log(`Ice cream was placed on ${stocks.holder[0]} `)))
    .then(() => order(3000, () => console.log(`${stocks.toppings[0]} added as topping`)))
    .then(() => order(2000, () => console.log("Serve ice cream")))
    .catch(() => {
        console.log("Customer Left!!! :( ")
        return { name: "Nishant" }
    })
    .then((data) => console.log(`Here It will come whether rejected or resolved. Okay ${data.name}?`))
    .finally(() => console.log("Times Up Shop Closing"))