pl.view.listBooks = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#books>tbody");
    var keys = [], key = "", row = {};
    // load all book objects
    Book.loadAll();
    keys = Object.keys( Book.instances);
    / for each book, create a table row with cells for the 3 attributes
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow(-1);
      row.insertCell(-1).textContent = Book.instances[key].isbn;
      row.insertCell(-1).textContent = Book.instances[key].title;
      row.insertCell(-1).textContent = Book.instances[key].year;
    }
  }
};
