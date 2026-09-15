import { useState } from "react";

function Goal() {

    const [foodName, setFoodName] = useState("");
    const [nutrition, setNutrition] = useState(null);

    function searchFood() {

        fetch("http://localhost:3000/nutrition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                foodName: foodName
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setNutrition(data);
        });
    };

    return (
        <div>

            <h1>Search Food</h1>

            <input
                type="text"
                placeholder="Enter food name"
                value={foodName}
                onChange={(event) => {
                    setFoodName(event.target.value);
                }}
            />

            <button onClick={searchFood}>
                Search
            </button>

            {nutrition && (
                <div>
                    <h2>{nutrition.food}</h2>

                    <p>Calories: {nutrition.calories}</p>
                    <p>Protein: {nutrition.protein}</p>
                    <p>Carbs: {nutrition.carbs}</p>
                    <p>Fat: {nutrition.fat}</p>
                </div>
            )}

        </div>
    );
}

export default Goal;