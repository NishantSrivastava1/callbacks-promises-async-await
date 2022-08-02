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

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {

        if (is_shop_open)
            setTimeout(resolve, ms)
        else
            reject(console.log("Shop is close"))
    })
}

async function kitchen() {
    try {

        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        console.log("Production has started")

        await time(2000)
        console.log("Fruits has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("Machine has started")

        await time(2000)
        console.log(`Ice cream was placed on ${stocks.holder[0]} `)

        await time(3000)
        console.log(`${stocks.toppings[0]} added as topping`)

        await time(2000)
        console.log("Serve ice cream")
    }

    catch (error) {
        console.log("Customer left!!!!!!!!!!")
    }

    finally {
        console.log("Day ended. shop closed")
    }
}

kitchen()