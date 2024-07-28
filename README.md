# Expense Tracker

A simple and modern expense tracker application built using HTML, CSS (with Bootstrap), and JavaScript. The application allows users to add, display, and delete expenses, while also keeping track of the total expenses. The data is stored in the browser's local storage, ensuring persistence across page reloads.

## Features

- **Add Expenses:** Users can add expenses by providing a name, amount, and date.
- **Display Expenses:** The application displays a list of all added expenses.
- **Delete Expenses:** Users can delete individual expenses from the list.
- **Total Expenses:** The application calculates and displays the total amount of expenses.
- **Local Storage:** Expenses are stored in the browser's local storage, ensuring data persistence.

## Technologies Used

- **HTML5:** For structuring the application.
- **CSS3 (Bootstrap):** For styling and responsive design.
- **JavaScript:** For application logic and interaction.
- **Local Storage:** For data persistence.

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/expense-tracker.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd expense-tracker
    ```

3. **Open `index.html` in your web browser:**

    ```sh
    open index.html
    ```

## Usage

1. **Open the application** by navigating to the `index.html` file in your web browser.
2. **Add an expense** by filling out the form with the expense name, amount, and date, then clicking the "Submit" button.
3. **View the list of expenses** displayed below the form. Each expense will show the name, date, amount, and a delete button.
4. **Delete an expense** by clicking the "Delete" button next to the respective expense.
5. **View the total expenses** updated dynamically as you add or delete expenses.

## Code Overview

### HTML

The HTML file contains the structure of the form and table for displaying expenses.

### CSS

The CSS file (with Bootstrap) is used for styling the form, table, and overall layout.

### JavaScript

The JavaScript file contains the logic for adding, displaying, and deleting expenses, as well as storing and retrieving data from local storage.

### Local Storage

Expenses are saved to local storage whenever they are added or deleted, ensuring that the data persists even after the page is reloaded.

