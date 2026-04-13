const books = [
    { id: 1, name: "Harry Potter", available: true },
    { id: 2, name: "DBMS Basics", available: true },
    { id: 3, name: "Data Structures", available: false }
];

function displayBooks(list) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    list.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${book.name} 
            ${book.available ? 
                `<button onclick="reserveBook(${book.id})">Reserve</button>` : 
                "Not Available"}
        `;
        bookList.appendChild(li);
    });
}

function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = books.filter(b => b.name.toLowerCase().includes(query));
    displayBooks(filtered);
}

function reserveBook(id) {
    const book = books.find(b => b.id === id);
    if (book.available) {
        book.available = false;
        alert("Book Reserved!");
        displayBooks(books);
    }
}

displayBooks(books);
