const sandwiches = ['pastrami', 'meatball', 'veggie', 'hoagie', 'cheesesteak', 'pb&j'];
renderSandwiches();

// const button = document.getElementById('clicky');
// button.addEventListener('click', handleClick);

const newSandwichForm = document.getElementById('new-sandwich-form');
newSandwichForm.addEventListener('submit', handleNewSandwich);

// Helper Functions

function handleNewSandwich(event) {
    event.preventDefault();

    const newSandwich = event.target.sandwichname.value;

    if (newSandwich === '') {
        window.alert('Please input a sandwich!')
    }
    else {
        sandwiches.push(newSandwich);
        renderSandwiches();
        event.target.reset();
    }
}

function handleClick() {
    sandwiches.push('chicken salad');
    renderSandwiches();
}

function renderSandwiches() {
    document.getElementById('sandwiches').innerHTML = '';
    sandwiches.forEach(addSandwich);
}

function addSandwich(sandwichString) { // takes string
    // create a new empty list item for the name
    const listItem = document.createElement('li');
    // put the sandwich name in the list item (li)
    listItem.textContent = sandwichString;
    // select the sandwich list ul element
    const sandwichList = document.getElementById('sandwiches');
    // put the list item on the ul element - append
    sandwichList.append(listItem);
}
