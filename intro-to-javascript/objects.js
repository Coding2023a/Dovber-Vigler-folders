let person = {
    name: "Dovber",
    age: 11,
    occupation: "is smarter then the rest"
};
console.log(person["name"]);
console.log(person.name)
console.log(person["age"])
console.log(person.age);
let car = {
    make: "tayota",
    model: "camry",
    start: function() {
        console.log("Engine started!");
    }
};
console.log(car.make, car.model)
car.start();
let cars = [
 {
        make: "toyota",
        model: "corolla",
        year: 2022,
        color: "silver",
        features: ["automatic Transmission", "Touchscreen infotainment", "lane departure warning"],
    },
   { make: "ford",
    model: "mustang",
    year: 2022, 
    color: "red",
    features: ["vs Engine", "sport suspension", "Apple CarPlay"],
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2022,
        color: "Blue",
        features: ["Fuel-Efficient Engine Honda "]
    }
]