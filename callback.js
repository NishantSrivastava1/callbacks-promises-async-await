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


let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
};


// Call back hell :(
    
let production = () => {

    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("Food has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("Machine has started");

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]} `);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} added as topping`);

                            setTimeout(() => {
                                console.log("Serve ice cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}


order(0, production)