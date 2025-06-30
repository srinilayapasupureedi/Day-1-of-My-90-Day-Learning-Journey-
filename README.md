# Day -1: Learning Outcomes

## 1. Creating a Basic "Hello World" using React
- Set up a simple React application from scratch.
- Created and rendered a "Hello World" element to the DOM.
- Understood the basic file structure required for a React app.

## 2. Creating Elements in React & Improving README Documentation
- Learned how to create React elements using `React.createElement`.
# Day-1 (part 2)

## 1. Rendering Components and Data Flow
- Implemented `Header`, `Body`, and `RestroCard` components.
- Used mock data (`mockData.js`) to render a list of restaurants dynamically.
- Extracted and combined restaurant arrays from nested mock data structures.

## 2. State Management and Filtering
- Used the `useState` hook to manage the list of restaurants displayed.
- Added a "Top rated Restaurants" button to filter restaurants with `avgRating >= 4.0`.
- Understood the difference between rendering all restaurants by default and filtering on user action.

## 3. Import and Export Types in React
- Practiced both **named exports/imports** and **default exports/imports**:
  - **Named export:**  
    ```js
    // Export
    export const Header = () => { ... }
    // Import
    import { Header } from './components/Header';
    ```
  - **Default export:**  
    ```js
    // Export
    export default Header;
    // Import
    import Header from './components/Header';
    ```
- Used named exports for all components and constants for better clarity and maintainability.

---

**Reflection:**  
Today, I learned how to manage and display dynamic lists in React using state and props. I also practiced extracting deeply nested data and filtering it based on user interaction.

