const button = document.querySelector("#button")

const onClick = function() {
    alert("congrats on unlocking the super special secret brazilian dessert!!!!!");

    beijinho.innerHTML = 'Beijinhos (little kisses) are a traditional Brazilian dessert similar to brigadeiros but made with sweetened condensed milk, butter, and shredded coconut instead of cocoa powder. They are cooked until thickened, rolled into small balls, and coated in more shredded coconut. Often topped with a whole clove for decoration, beijinhos are sweet, chewy, and have a rich coconut flavor. They are commonly served at parties and celebrations in Brazil. <br><br> <img src="beijinho.jpg" alt="Photo of a Brazilian dessert, beijinho." style="width: 300px;">';
};

button.addEventListener("click", onClick)
