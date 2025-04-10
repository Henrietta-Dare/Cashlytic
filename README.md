# Cashlytic - Expense Tracker

Cashlytic is a simple and intuitive expense tracker application built with React and Vite. It helps users manage their finances by tracking expenses, categorizing them, and visualizing spending patterns.

## Purpose
The purpose of this app is to provide users with an easy way to:
- Add and categorize expenses.
- Filter expenses by month and category.
- View total expenses and a breakdown of spending using charts.
- Persist expense data locally in the browser.

## Major Functions
- **Add Expenses**: Users can input expense details, including name, amount, and category.
- **Filter by Month**: Filter expenses based on the selected month.
- **Category Filtering**: Filter expenses by category (e.g., Food, Transport, Entertainment).
- **Expense Summary**: View the total amount of expenses.
- **Expense Chart**: Visualize spending patterns with a bar chart.
- **Local Storage**: All data is saved in the browser's local storage, ensuring persistence across sessions.

## Dependencies
The app uses the following major dependencies:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Recharts**: A charting library for visualizing data.
- **React Icons**: A library for including icons in React apps.
- **uuid**: A library for generating unique IDs.

## File Structure
- **`src/components`**: Contains reusable components like `ExpenseForm`, `ExpenseList`, `ExpenseChart`, etc.
- **`src/App.jsx`**: The main app component that integrates all features.
- **`src/index.css`**: Contains the app's styling.

## Build Instructions
Follow these steps to run the app locally:

1. **Clone the Repository**:
   ```bash
   git clone https://https://github.com/Henrietta-Dare/Cashlytic
   cd cashlytic

2. Install Dependencies: Make sure you have Node.js installed, then run:
npm install

3. Run the Development Server: Start the app in development mode:
npm run dev

4. Build for Production: To create a production build, run:
npm run build


