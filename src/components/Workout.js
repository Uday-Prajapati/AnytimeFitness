import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Workout.css'; // Styles scoped only to this component

const workoutCategories = [
  {
    name: 'Back',
    imageUrl: '/images/back.jpg',
    exercises: [
  { name: 'Deadlift', videoUrl: require('../assets/deadlift.mp4'), info: 'Targets lower back, glutes, hamstrings.' },
  { name: 'Barbell Row', videoUrl: require('../assets/barbell-row.mp4'), info: 'Works the lats, traps, and rear deltoids.' },
  { name: 'Pull Up', videoUrl: require('../assets/pull-up.mp4'), info: 'Engages the latissimus dorsi and biceps.' },
  { name: 'Lat Pull Down', videoUrl: require('../assets/lat-pull-down.mp4'), info: 'Focuses on the lats and shoulder stability.' },
  { name: 'Seated Cable Row', videoUrl: require('../assets/seated-cable-row.mp4'), info: 'Targets the mid-back muscles.' },
  { name: 'T-Bar', videoUrl: require('../assets/t-bar.mp4'), info: 'Strengthens traps and rhomboids.' },
  { name: 'Smith Machine Barbell Row', videoUrl: require('../assets/smbr.mp4'), info: 'Isolates the back muscles with machine support.' },
  { name: 'Arm Pulldown', videoUrl: require('../assets/arm-pulldown.mp4'), info: 'Emphasizes the lat muscles.' },
  { name: 'Reverse Lat Pulldown', videoUrl: require('../assets/reverse-lat-pulldown.mp4'), info: 'Targets lower lats for thickness.' },
    ],
  },
  {
    name: 'Bicep',
    imageUrl: '/images/bicep.jpg',
    exercises: [
      { name: 'Cable Bicep Curl', videoUrl: require('../assets/cable-bicep-curl.mp4'), info: 'Constant tension on biceps.' },
      { name: 'Barbell Bicep Curl', videoUrl: require('../assets/barbell-bicep-curl.mp4'), info: 'Targets both heads of the biceps.' },
      { name: 'Preacher Curl Machine', videoUrl: require('../assets/preacher-curl-machine.mp4'), info: 'Isolates the lower biceps.' },
      { name: 'Ez-Bar Bicep Curl', videoUrl: require('../assets/ez-bar-bicep-curl.mp4'), info: 'Reduces wrist strain, focuses on biceps.' },
      { name: 'Rope Hammer Curl', videoUrl: require('../assets/rope-hammer-curl.mp4'), info: 'Targets brachialis for arm thickness.' },
      { name: 'Incline Dumbbell Curl', videoUrl: require('../assets/incline-dumbbell-curl.mp4'), info: 'Focuses on the long head of the biceps.' },
      { name: 'Hammer Curl', videoUrl: require('../assets/hammer-curl.mp4'), info: 'Develops forearms and biceps.' },
    ],
  },
  {
    name: 'Chest',
    imageUrl: '/images/chest.png',
    exercises: [
      { name: 'Dumbbell Incline Bench Press', videoUrl: require('../assets/ibp.mp4'), info: 'Targets upper chest for balanced development.' },
      { name: 'Dumbbell Bench Press', videoUrl: require('../assets/dbp.mp4'), info: 'Focuses on lower chest.' },
      { name: 'Barbell Incline Bench Press', videoUrl: require('../assets/bibp.mp4'), info: 'Strengthens upper chest and shoulders.' },
      { name: 'Peck Deck Fly', videoUrl: require('../assets/peck-deck-fly.mp4'), info: 'Isolates chest muscles for definition.' },
      { name: 'Dumbbell Fly', videoUrl: require('../assets/dumbbell-fly.mp4'), info: 'Stretches and develops pectorals.' },
      { name: 'Cable Fly', videoUrl: require('../assets/cable-fly.mp4'), info: 'Constant tension on chest.' },
      { name: 'Dips', videoUrl: require('../assets/dips.mp4'), info: 'Strengthens lower chest and triceps.' },
      { name: 'Low Cable Crossover', videoUrl: require('../assets/low-cable-crossover.mp4'), info: 'Isolates lower chest for definition.' },
    ],
  },
  {
    name: 'Tricep',
    imageUrl: '/images/tricep.jpg',
    exercises: [
      { name: 'Rope Tricep Pushdown', videoUrl: require('../assets/rope-pushdown.mp4'), info: 'Builds tricep muscle definition.' },
      { name: 'Dumbbell Tricep Extension', videoUrl: require('../assets/dumbbell-extension.mp4'), info: 'Targets the long head of the triceps.' },
      { name: 'Overhead Cable Tricep Extension', videoUrl: require('../assets/overhead-extension.mp4'), info: 'Stretches and strengthens triceps.' },
      { name: 'Incline Ez-Bar Tricep Extension', videoUrl: require('../assets/incline-ezbar-extension.mp4'), info: 'Enhances tricep activation.' },
    ],
  },
  {
    name: 'Legs',
    imageUrl: '/images/legs.jpg',
    exercises: [
      { name: 'Dumbbell Squats', videoUrl: require('../assets/dumbbell-squats.mp4'), info: 'Focuses on form and depth for leg strength.' },
      { name: 'Barbell Squats', videoUrl: require('../assets/barbell-squats.mp4'), info: 'A compound lift for overall leg development.' },
      { name: 'Leg Press', videoUrl: require('../assets/leg-press.mp4'), info: 'Targets quads and glutes.' },
      { name: 'Leg Extension', videoUrl: require('../assets/leg-extension.mp4'), info: 'Isolates the quadriceps.' },
      { name: 'Dumbbell Sumo Squat', videoUrl: require('../assets/sumo-squats.mp4'), info: 'Works inner thighs and glutes.' },
      { name: 'Barbell Hip Thrust', videoUrl: require('../assets/hip-thrust.mp4'), info: 'Targets glutes for strength.' },
      { name: 'Smith Machine Squat', videoUrl: require('../assets/smith-machine-squats.mp4'), info: 'Improves control and balance.' },
      { name: 'Barbell Lunges', videoUrl: require('../assets/lunges.mp4'), info: 'Strengthens quads and glutes.' },
    ],
  },
  {
    name: 'Shoulder',
    imageUrl: '/images/shoulder.jpg',
    exercises: [
      { name: 'Dumbbell Shoulder Press', videoUrl: require('../assets/dsp.mp4'), info: 'Builds shoulder strength.' },
      { name: 'Barbell Overhead Press', videoUrl: require('../assets/bop.mp4'), info: 'Engages entire shoulder complex.' },
      { name: 'Side Raises', videoUrl: require('../assets/side-raises.mp4'), info: 'Targets lateral deltoids.' },
      { name: 'Front Raises', videoUrl: require('../assets/front-raises.mp4'), info: 'Isolates front deltoid muscles.' },
      { name: 'Face Pull', videoUrl: require('../assets/face-pull.mp4'), info: 'Engages rear deltoids and traps.' },
      { name: 'Peck Deck Rear Delt', videoUrl: require('../assets/pdrd.mp4'), info: 'Isolates rear delts.' },
      { name: 'Shrugs', videoUrl: require('../assets/shrugs.mp4'), info: 'Targets the traps for strength.' },
      { name: 'Arnold Press', videoUrl: require('../assets/arnold-press.mp4'), info: 'Combines front and side deltoid engagement.' },
    ],
  },
  {
    name: 'Forearm',
    imageUrl: '/images/forearm.jpg',
    exercises: [
      { name: 'Dumbbell Wrist Curl', videoUrl: require('../assets/dwc.mp4'), info: 'Strengthens forearm flexors.' },
      { name: 'Wrist Roller', videoUrl: require('../assets/wrist-roller.mp4'), info: 'Builds wrist and forearm strength.' },
      { name: 'Cable Wrist Curl', videoUrl: require('../assets/cable-wrist-curl.mp4'), info: 'Works forearm muscles.' },
      { name: 'Wrist Curl with Machine', videoUrl: require('../assets/wrist-curl-machine.mp4'), info: 'Strengthens the forearm flexors.' },
      { name: 'Zottman Curl', videoUrl: require('../assets/zottman-curl.mp4'), info: 'Targets both forearms and biceps.' },
    ],
  },
  {
    name: 'Abs',
    imageUrl: '/images/abs.jpg',
    exercises: [
      { name: 'Plank', videoUrl: require('../assets/plank.mp4'), info: 'Core stability and strength exercise.' },
      { name: 'Barbell Rollout', videoUrl: require('../assets/barbell-rollout.mp4'), info: 'Works the entire core.' },
      { name: 'Hanging Knee Raise', videoUrl: require('../assets/hkr.mp4'), info: 'Targets lower abs.' },
      { name: 'Crunches', videoUrl: require('../assets/crunches.mp4'), info: 'Isolates upper abdominal muscles.' },
      { name: 'High Knees', videoUrl: require('../assets/high-knees.mp4'), info: 'Engages core and improves stamina.' },
      { name: 'Mountain Climbers', videoUrl: require('../assets/mountain-climber.mp4'), info: 'Full-body cardio move focusing on core.' },
      { name: 'Seated Abs Machine', videoUrl: require('../assets/sbm.mp4'), info: 'Isolates abs for strength.' },
    ],
  },
  {
    name: 'Cardio',
    imageUrl: '/images/cardio.jpg',
    exercises: [
      { name: 'Skipping', videoUrl: require('../assets/skipping.mp4'), info: 'Great for cardiovascular endurance.' },
      { name: 'Running', videoUrl: require('../assets/running.mp4'), info: 'A basic cardio move that burns calories.' },
      { name: 'High Knees', videoUrl: require('../assets/high-knees.mp4'), info: 'Intense cardio workout targeting core.' },
      { name: 'Mountain Climbers', videoUrl: require('../assets/ecw.mp4'), info: 'Full-body cardio focusing on core strength.' },
      { name: 'Treadmil Walk', videoUrl: require('../assets/tw.mp4'), info: 'Full-body cardio focusing on core strength and weight.' },
    ],
  },
];

const Workout = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="workout-container container-fluid">
      <button onClick={() => navigate('/')} className="back-button left-corner">
        ← Home
      </button>

      {!selectedCategory ? (
        <div className="category-list row justify-content-center">
          {workoutCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 category-item">
              <button
                onClick={() => setSelectedCategory(category)}
                className="category-button animated-button"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              >
                <h3 className="category-text">{category.name}</h3>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="exercise-list animate__animated animate__fadeIn">
          <button className="btn back-button" onClick={() => setSelectedCategory(null)}>
            ← Back to Categories
          </button>
          <h2 className="text-center mt-4">{selectedCategory.name} Exercises</h2>
          <div className="row justify-content-center">
            {selectedCategory.exercises.map((exercise, index) => (
              <div key={index} className="col-lg-4 col-md-6 exercise-item text-center">
                <h3>{exercise.name}</h3>
                <video controls className="exercise-video img-fluid">
                  <source src={exercise.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="exercise-info">{exercise.info}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Workout;
