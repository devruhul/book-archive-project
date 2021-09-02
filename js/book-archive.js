//  Function for search button

const bookArchive = () => {
  const books = document.getElementById("books-name");
  const booksValue = books.value;
  const url = `https://openlibrary.org/search.json?q=${booksValue}`;
  //  url fetching
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data));
};
// Display Books
const displayBooks = (books) => {
  const booklist = books.docs;
  // displaying search count
  const searchCount = document.getElementById("search-count");
  searchCount.textContent = "";
  if (books.numFound === 0) {
    searchCount.innerHTML = `
        <p class="text-light fs-2">
            No result found
        </p>
      `;
  } else {
    searchCount.innerHTML = `
      <p class="fs-3 text-success">Search Result Found: ${books.numFound}</p>
      `;
  }
  // displayng books details
  const booksCard = document.getElementById("books-card");
  booksCard.textContent = "";
  booklist.length = 20;
  booklist.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div class="card h-100">
              <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid p-2" >
          <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Author Name: ${book.author_name[0]}</p>
                <p class="card-text">First Publish Year: ${book.first_publish_year}</p>
                <p class="card-text">Publisher: ${book.publisher[0]}</p>
          </div>
          </div>
  `;
    booksCard.appendChild(div);
  });
};
