import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Diet.css';
import vegImage from '../assets/veg.png'; // Example paths to images
import nonVegImage from '../assets/non-veg.png';
import supplementsImage from '../assets/supplements.png';

const Diet = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [bodyWeight, setBodyWeight] = useState('');
  const [dietPlan, setDietPlan] = useState(null);

  const dietPlans = {
    veg: {
      underweight: [
        { meal: 'Moong Dal Chilla (2-3 chillas)', protein: '12-15g' },
        { meal: 'Sprouts Salad (100g)', protein: '7g' },
        { meal: 'Oats with Milk and Nuts', protein: '8g' },
        { meal: 'Chana Sundal (100g cooked black chana)', protein: '10g' },
        { meal: 'Boiled Chickpeas (Chana)', protein: '19g' },
        { meal: 'Masala Khichdi (Moong Dal & Rice)', protein: '8g' },
        { meal: 'Curd (200g)', protein: '6-8g' },
        { meal: 'Rajma Chawal (Kidney Beans and Rice)', protein: '20g' },
        { meal: 'Palak Paneer', protein: '14g' },
        { meal: 'Soya Curry with Brown Rice', protein: '28g' }
      ],
      normal: [
        { meal: 'Paneer Sandwich (Whole Wheat Bread)', protein: '15g' },
        { meal: 'Soybean Chunks Salad', protein: '25g' },
        { meal: 'Chole (Chickpeas) with Chapati', protein: '19g' },
        { meal: 'Mixed Dal Khichdi', protein: '12g' },
        { meal: 'Tofu Stir Fry with Brown Rice', protein: '15g' },
        { meal: 'Paneer Bhurji with Chapati', protein: '18g' },
        { meal: 'Vegetable Pulao with Paneer', protein: '18g' },
        { meal: 'Curd Rice', protein: '8g' },
        { meal: 'Sambar with Rice/Idli', protein: '10g' },
        { meal: 'Methi Thepla with Curd', protein: '8g' }
      ],
      overweight: [
        { meal: 'Grilled Vegetables', protein: '8g' },
        { meal: 'Lentil Soup', protein: '10g' },
        { meal: 'Ragi Dosa', protein: '5g' },
        { meal: 'Stuffed Paratha (Paneer/Chana)', protein: '15g' },
        { meal: 'Vegetable Stir-Fry with Tofu', protein: '18g' },
        { meal: 'Rajgira (Amaranth) Roti', protein: '5g' },
        { meal: 'Hummus with Whole Wheat Pita', protein: '10g' },
        { meal: 'Chickpea and Avocado Salad', protein: '10g' },
        { meal: 'Vegetable Quinoa Pulao', protein: '8g' },
        { meal: 'Moong Dal Soup', protein: '10g' }
      ]
    },
    nonVeg: {
      underweight: [
        { meal: 'Egg Bhurji (3 eggs)', protein: '18g' },
        { meal: 'Chicken Sandwich (Whole Wheat Bread)', protein: '20g' },
        { meal: 'Boiled Eggs (3-4)', protein: '18-24g' },
        { meal: 'Oats with Milk and Egg Whites', protein: '12g' },
        { meal: 'Boiled Chicken Breast', protein: '31g' },
        { meal: 'Tandoori Chicken', protein: '30g' },
        { meal: 'Scrambled Eggs', protein: '12g' },
        { meal: 'Chicken Curry with Brown Rice', protein: '30g' },
        { meal: 'Prawn Curry with Rice', protein: '24g' },
        { meal: 'Mutton Keema with Bajra Roti', protein: '25g' }
      ],
      normal: [
        { meal: 'Egg White Omelette with Spinach', protein: '15g' },
        { meal: 'Grilled Chicken Salad', protein: '25g' },
        { meal: 'Tuna Salad', protein: '20g' },
        { meal: 'Fish Tikka', protein: '20g' },
        { meal: 'Grilled Salmon', protein: '24g' },
        { meal: 'Turkey Breast (100g)', protein: '29g' },
        { meal: 'Grilled Fish with Quinoa', protein: '30g' },
        { meal: 'Chicken Bhuna with Rice', protein: '28g' },
        { meal: 'Grilled Chicken Wrap (Whole Wheat)', protein: '20g' },
        { meal: 'Chicken Kebab', protein: '22g' }
      ],
      overweight: [
        { meal: 'Grilled Chicken with Salad', protein: '30g' },
        { meal: 'Egg White Dosa', protein: '12g' },
        { meal: 'Mutton Curry with Rice', protein: '25g' },
        { meal: 'Fish Stew with Brown Rice', protein: '28g' },
        { meal: 'Grilled Fish with Vegetables', protein: '24g' },
        { meal: 'Shrimp Stir Fry', protein: '20g' },
        { meal: 'Egg Bhurji with Paneer', protein: '20g' },
        { meal: 'Chicken Tikka', protein: '28g' },
        { meal: 'Prawn Masala with Chapati', protein: '25g' },
        { meal: 'Chicken Shashlik', protein: '20g' }
      ]
    },
    supplements: {
      underweight: [
        {
          meal: 'Whey Protein Shake',
          info: 'Whey protein helps build muscle mass and support recovery after workouts.',
          advantages: 'Easily absorbed, supports muscle growth.',
          disadvantages: 'May cause digestive issues for lactose-intolerant individuals.'
        },
        {
          meal: 'Creatine Monohydrate',
          info: 'Creatine supports strength and muscle gains, improving workout performance.',
          advantages: 'Boosts strength, improves endurance.',
          disadvantages: 'Can cause water retention.'
        },
        {
          meal: 'Mass Gainer',
          info: 'A high-calorie supplement designed to help gain weight and build muscle.',
          advantages: 'Helps increase calorie intake, supports muscle gain.',
          disadvantages: 'May contain a high amount of sugar.'
        },
        {
          meal: 'BCAAs',
          info: 'Branched-chain amino acids (BCAAs) aid in muscle recovery and reduce fatigue.',
          advantages: 'Supports muscle recovery, reduces soreness.',
          disadvantages: 'Effectiveness can vary; not essential if protein intake is adequate.'
        },
        {
          meal: 'Glutamine',
          info: 'Glutamine helps in muscle recovery and supports immune function.',
          advantages: 'Aids in recovery, boosts immune system.',
          disadvantages: 'Limited benefits for muscle growth compared to other supplements.'
        }
      ],
      normal: [
        {
          meal: 'Whey Protein Shake',
          info: 'Whey protein provides essential amino acids, supporting muscle repair and growth.',
          advantages: 'Fast absorption, supports muscle maintenance.',
          disadvantages: 'May cause bloating for some.'
        },
        {
          meal: 'Casein Protein',
          info: 'A slow-digesting protein that helps maintain muscle mass overnight.',
          advantages: 'Slow release of protein, ideal for nighttime recovery.',
          disadvantages: 'Can cause digestive discomfort in lactose-intolerant individuals.'
        },
        {
          meal: 'BCAA Supplement',
          info: 'BCAAs help prevent muscle breakdown during intense workouts.',
          advantages: 'Enhances endurance, prevents muscle loss.',
          disadvantages: 'May not provide additional benefits if you consume enough protein.'
        },
        {
          meal: 'Fish Oil',
          info: 'Fish oil provides Omega-3 fatty acids, promoting heart and joint health.',
          advantages: 'Supports heart health, reduces inflammation.',
          disadvantages: 'May cause fishy aftertaste.'
        },
        {
          meal: 'Multivitamins',
          info: 'A multivitamin provides essential vitamins and minerals to support overall health.',
          advantages: 'Fills nutritional gaps, supports overall wellness.',
          disadvantages: 'May not be necessary if diet is well-balanced.'
        }
      ],
      overweight: [
        {
          meal: 'Fat Burner Supplement',
          info: 'Fat burners increase metabolism, helping to accelerate fat loss.',
          advantages: 'Boosts metabolism, increases fat oxidation.',
          disadvantages: 'May cause jitteriness or increase heart rate in sensitive individuals.'
        },
        {
          meal: 'Green Tea Extract',
          info: 'Green Tea Extract supports fat loss by enhancing metabolism and fat oxidation.',
          advantages: 'Boosts metabolism, rich in antioxidants.',
          disadvantages: 'May cause sleep disturbances due to caffeine content.'
        },
        {
          meal: 'CLA (Conjugated Linoleic Acid)',
          info: 'CLA helps reduce body fat and improve lean muscle mass.',
          advantages: 'Supports fat loss, may improve body composition.',
          disadvantages: 'Effectiveness varies; requires long-term use.'
        },
        {
          meal: 'ZMA (Zinc, Magnesium, Vitamin B6)',
          info: 'ZMA supports muscle recovery, improves sleep quality, and boosts testosterone.',
          advantages: 'Improves recovery, supports muscle health.',
          disadvantages: 'Limited evidence for its effectiveness in boosting testosterone.'
        },
        {
          meal: 'Electrolytes',
          info: 'Electrolytes help maintain hydration levels, especially after intense exercise.',
          advantages: 'Replenishes lost minerals, supports hydration.',
          disadvantages: 'Unnecessary if hydration is maintained through food and water intake.'
        }
      ]
    }
  };


  const handleDietSelection = (dietType) => {
    setSelectedDiet(dietType);
    setDietPlan(null);
  };

  const handleGenerateDietPlan = () => {
    let weightCategory;
    if (bodyWeight < 60) {
      weightCategory = 'underweight';
    } else if (bodyWeight >= 60 && bodyWeight <= 80) {
      weightCategory = 'normal';
    } else {
      weightCategory = 'overweight';
    }
    const selectedPlan = dietPlans[selectedDiet][weightCategory];
    setDietPlan(selectedPlan);
  };

  // Handle home button click
  const handleHomeNavigation = () => {
    navigate('/'); // Replace '/home' with your actual home route
  };

  return (
    <div className="diet-container">
      {/* Home Button */}
      <button 
        className="back-button left-corner" 
        onClick={handleHomeNavigation}
      >
        ← Home
      </button>

      <h2 className="animate__animated animate__fadeInDown">Select Your Diet Type</h2>
      <div className="diet-buttons">
        <div className="diet-option text-center">
          <img src={vegImage} alt="Veg Diet" className="diet-image" />
          <button
            className="btn btn-primary animate__animated animate__pulse animate__infinite"
            onClick={() => handleDietSelection('veg')}
          >
            Veg Diet
          </button>
        </div>
        <div className="diet-option text-center">
          <img src={nonVegImage} alt="Non-Veg Diet" className="diet-image" />
          <button
            className="btn btn-danger animate__animated animate__pulse animate__infinite"
            onClick={() => handleDietSelection('nonVeg')}
          >
            Non-Veg Diet
          </button>
        </div>
        <div className="diet-option text-center">
          <img src={supplementsImage} alt="Supplements" className="diet-image" />
          <button
            className="btn btn-success animate__animated animate__pulse animate__infinite"
            onClick={() => handleDietSelection('supplements')}
          >
            Supplements
          </button>
        </div>
      </div>

      {selectedDiet && (
        <div className="weight-input">
          <h3 className="animate__animated animate__fadeIn">Enter Your Body Weight (in kg)</h3>
          <input
            type="number"
            value={bodyWeight}
            onChange={(e) => setBodyWeight(e.target.value)}
            placeholder="Enter weight"
            className="form-control"
          />
          <button className="btn btn-warning mt-3" onClick={handleGenerateDietPlan}>
            Generate Diet Plan
          </button>
        </div>
      )}

      {dietPlan && (
        <div className="diet-plan animate__animated animate__fadeInUp">
          <h3>Your Diet Plan</h3>
          <ul>
            {dietPlan.map((item, index) => (
              <li key={index}>
                <strong>{item.meal}</strong> - {selectedDiet === 'supplements' ? (
                  <>
                    {item.info} <br />
                    <em>Advantages:</em> {item.advantages} <br />
                    <em>Disadvantages:</em> {item.disadvantages}
                  </>
                ) : (
                  <>Protein: {item.protein}</>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diet;
