# 📚 Open Library Book Search

A simple JavaScript app that lets you search books from the [Open Library API](https://openlibrary.org/developers/api) and displays the results in a list.

## 🚀 Features
- Search for books by title or keyword
- Displays book title and first author's name
- Alerts when no results are found
- Handles missing author information
- Prevents empty searches

## 🛠️ Technologies Used
- HTML, CSS, JavaScript
- [Axios](https://github.com/axios/axios) for API requests
- [Open Library Search API](https://openlibrary.org/dev/docs/api/search)

## 📌 How to Use
1. Clone or download the project files.
2. Open `index.html` in your browser.
3. Type a book name in the search box.
4. Click the **Search** button.
5. See the book list displayed below.

## 📄 Example API Request
```javascript
https://openlibrary.org/search.json?q=mahabharat
