"use client"
import React, { useEffect, useState } from 'react';
const CocktailGenerator: React.FC = () => {
    const [cocktail, setCocktail] = useState<any | null>(null);
  
    

    const fetchRandomCocktail = async () => {
    try {
        const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        if (!response.ok) {
        throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const cocktailData = data.drinks[0];
        setCocktail(cocktailData);
    } catch (error) {
        console.error('Failed to fetch a random cocktail:', error);
    }
};
useEffect(() => {
        fetchRandomCocktail();
}, []);

return (
    
    <div className='text-center'>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mb-8 border border-gray-400 rounded shadow"onClick={fetchRandomCocktail}>
         Generate Cocktail 🍹</button>
      {cocktail && (
        <div className=' border-white border text-center rounded w-96 py-2 px-4 '>
          <h2 className='text-2xl font-bold mb-5'>{cocktail.strDrink}</h2>
          <h3>Ingredients:</h3>
          <ul>
            <li>{cocktail.strIngredient1}</li>
            <li>{cocktail.strIngredient2}</li>
            <li>{cocktail.strIngredient3}</li>
            {/* Add more ingredients as needed */}
          </ul>
          
          <p className=' p-4 rounded mt-4 mb-4 w-fit bg-white text-black text-left'>{cocktail.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default CocktailGenerator;
  