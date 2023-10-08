// Event listener for branch selection
const branchSelect = document.getElementById('branch');
branchSelect.addEventListener('change', function() {
  const selectedBranch = branchSelect.value;
  filterBooksByBranch(selectedBranch);
});

// Function to filter books by branch
function filterBooksByBranch(branch) {
  const bookList = document.getElementById('bookList');
  const books = bookList.getElementsByTagName('div');

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookBranch = book.dataset.branch;

    if (branch === '' || branch === bookBranch) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  }
}

// Initial filter
filterBooksByBranch('');

// Get references to all book elements
        const books = document.querySelectorAll('.book');

        // Add event listeners to each book's button
        books.forEach((book, index) => {
            const decreaseButton = book.querySelector('.decreaseButton');
            const bookCountDisplay = book.querySelector('.bookCount');
            
            let bookCount = 10; // Initial count for each book

            function decreaseBookCount() {
                if (bookCount > 0) {
                    bookCount--;
                    bookCountDisplay.textContent = "Available - " + bookCount;
                } else {
                    alert('No more books available for Book ' + (index + 1));
                }
            }

            decreaseButton.addEventListener('click', decreaseBookCount);
        });