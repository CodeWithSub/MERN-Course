# 🎨 Random Background Color Generator

A simple JavaScript project that generates a random RGB color and updates the background of a box when a button is clicked. It also displays the RGB value and a message each time the color changes.

## 🛠 Features

- Generates random RGB colors.
- Updates the background color of a `.box` element.
- Displays the RGB value in an `<h2>` element.
- Inserts a `"Color changed!"` message above the button on every click.

## 📄 How It Works

1. User clicks the button.
2. JavaScript generates a random `rgb(r, g, b)` color.
3. The `.box` element's background is updated with the new color.
4. The `<h2>` element shows the new RGB value.
5. A new `<p>` element saying `"Color changed!"` is added before the button.

## 🧩 Dependencies

- None. This project uses:
  - Plain HTML
  - CSS
  - Vanilla JavaScript

## 📌 Note

- Every click adds a new `<p>` tag saying `"Color changed!"`, which may clutter the interface.
- Consider limiting messages or clearing them before adding a new one in a more polished version.
