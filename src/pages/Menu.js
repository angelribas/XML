import React, { useEffect, useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [error, setError] = useState(null); // State to hold error messages

  useEffect(() => {
    fetch('/menu.xml') // Using HTTPS
      .then((response) => {
        // Check if response is OK (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((xmlString) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlString, 'application/xml');

        const mealItems = Array.from(xml.getElementsByTagName('meal')).map((meal) => ({
          name: meal.getElementsByTagName('name')[0].textContent,
          price: meal.getElementsByTagName('price')[0].textContent,
          description: meal.getElementsByTagName('description')[0].textContent,
          image: meal.getElementsByTagName('image')[0].textContent,
        }));

        const beverageItems = Array.from(xml.getElementsByTagName('beverage')).map((bev) => ({
          name: bev.getElementsByTagName('name')[0].textContent,
          price: bev.getElementsByTagName('price')[0].textContent,
          description: bev.getElementsByTagName('description')[0]?.textContent || '',
        }));

        setMeals(mealItems);
        setBeverages(beverageItems);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message); // Set error message if fetch fails
      });
  }, []);

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      
      <section className="menu-section">
        <h2>Meals</h2>
        <div className="menu-items">
          {meals.map((meal, index) => (
            <div className="menu-item" key={index}>
              <img src={`${meal.image}`} alt={meal.name} />
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
              <span>{meal.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Beverages</h2>
        <div className="menu-items">
          {beverages.map((bev, index) => (
            <div className="menu-item" key={index}>
              <h3>{bev.name}</h3>
              <p>{bev.description}</p>
              <span>{bev.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;

