async function getALLFoods() {
    try {
        const response = await fetch('http://127.0.0.1:5000/foods');
        const foods = await response.json();
        console.log('all foods:', foods)
    } catch (error) {
        console.error(error);
    }
}

async function getSpecificFood(id) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/foods/${id}`);
        const food = await response.json();
        console.log('spesific food:', food);
    } catch (error) {
        console.error(error);
    }
}

setTimeout(() => {
    getALLFoods()
    getSpecificFood(3)
}, 3000)

console.log("asynchronous code takes time to complete")

