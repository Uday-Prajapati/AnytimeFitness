import React, { useState } from 'react';
import '../styles/CommunityChallenge.css'; // Ensure you have the relevant styles here
import { Button, Card, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components

const exercises = {
  Back: [
    { title: 'Deadlift', challenges: ['Complete 3 sets of 10 reps', 'Perform with correct form', 'Increase weight gradually', 'Incorporate in back day', 'Track your progress'] },
    { title: 'Barbell Row', challenges: ['Complete 4 sets of 8 reps', 'Keep your back straight', 'Use a full range of motion', 'Increase weight as you progress', 'Record your reps and weight'] },
    { title: 'Pull-Up', challenges: ['Complete 3 sets to failure', 'Focus on full range of motion', 'Gradually increase reps', 'Use different grips', 'Track progress over time'] },
    { title: 'Lat Pulldown', challenges: ['Complete 4 sets of 12 reps', 'Keep shoulders down', 'Use a full range of motion', 'Increase weight gradually', 'Record your performance'] },
  ],
  Back: [
    { title: 'Deadlift', challenges: ['Complete 3 sets of 10 reps', 'Perform with correct form', 'Increase weight gradually', 'Incorporate in back day', 'Track your progress'] },
    { title: 'Barbell Row', challenges: ['Complete 4 sets of 8 reps', 'Keep your back straight', 'Use a full range of motion', 'Increase weight as you progress', 'Record your reps and weight'] },
    { title: 'Pull-Up', challenges: ['Complete 3 sets to failure', 'Focus on full range of motion', 'Gradually increase reps', 'Use different grips', 'Track progress over time'] },
    { title: 'Lat Pulldown', challenges: ['Complete 4 sets of 12 reps', 'Keep shoulders down', 'Use a full range of motion', 'Increase weight gradually', 'Record your performance'] },
  ],
  Bicep: [
    { title: 'Bicep Curl', challenges: ['Complete 3 sets of 12 reps', 'Maintain a slow tempo', 'Use proper form', 'Incorporate into arm day', 'Increase weight weekly'] },
    { title: 'Hammer Curl', challenges: ['Complete 4 sets of 10 reps', 'Keep elbows close to your body', 'Perform slowly', 'Track progress', 'Increase weights as you get stronger'] },
    { title: 'Preacher Curl', challenges: ['Complete 3 sets of 8 reps', 'Ensure full range of motion', 'Maintain proper form', 'Gradually increase weight', 'Track your progress'] },
    { title: 'Concentration Curl', challenges: ['Complete 4 sets of 12 reps per arm', 'Focus on muscle contraction', 'Perform slowly', 'Increase weight over time', 'Record reps and weight'] },
  ],
  Chest: [
    { title: 'Bench Press', challenges: ['Complete 3 sets of 8 reps', 'Use proper form', 'Gradually increase weight', 'Incorporate into chest day', 'Track your progress'] },
    { title: 'Push-Up', challenges: ['Complete 4 sets of 15 reps', 'Maintain a straight body', 'Perform with proper form', 'Increase reps weekly', 'Track your performance'] },
    { title: 'Incline Bench Press', challenges: ['Complete 3 sets of 10 reps', 'Use correct incline angle', 'Gradually increase weight', 'Track progress', 'Maintain form'] },
    { title: 'Chest Fly', challenges: ['Complete 4 sets of 12 reps', 'Keep arms slightly bent', 'Perform with controlled motion', 'Increase weight as you progress', 'Record performance'] },
  ],
  Tricep: [
    { title: 'Tricep Dips', challenges: ['Complete 3 sets to failure', 'Keep elbows close to your body', 'Perform with full range of motion', 'Track your progress', 'Gradually add weight'] },
    { title: 'Tricep Pushdown', challenges: ['Complete 4 sets of 12 reps', 'Use proper form', 'Gradually increase weight', 'Focus on muscle contraction', 'Record your performance'] },
    { title: 'Skull Crushers', challenges: ['Complete 3 sets of 10 reps', 'Maintain control throughout', 'Use appropriate weight', 'Track progress', 'Perform with proper form'] },
    { title: 'Overhead Tricep Extension', challenges: ['Complete 4 sets of 12 reps', 'Keep elbows close to head', 'Perform with controlled motion', 'Increase weight over time', 'Record reps and weight'] },
  ],
  Legs: [
    { title: 'Squats', challenges: ['Complete 3 sets of 10 reps', 'Maintain proper form', 'Gradually increase weight', 'Incorporate into leg day', 'Track your progress'] },
    { title: 'Lunges', challenges: ['Complete 4 sets of 12 reps per leg', 'Keep torso upright', 'Increase weight gradually', 'Perform with controlled motion', 'Record performance'] },
    { title: 'Leg Press', challenges: ['Complete 3 sets of 15 reps', 'Use appropriate weight', 'Ensure full range of motion', 'Gradually increase weight', 'Track your progress'] },
    { title: 'Leg Curl', challenges: ['Complete 4 sets of 12 reps', 'Maintain control throughout', 'Increase weight gradually', 'Record performance', 'Perform with proper form'] },
  ],
  Shoulder: [
    { title: 'Shoulder Press', challenges: ['Complete 3 sets of 8 reps', 'Use proper form', 'Gradually increase weight', 'Incorporate into shoulder day', 'Track your progress'] },
    { title: 'Lateral Raise', challenges: ['Complete 4 sets of 12 reps', 'Keep arms straight', 'Perform with controlled motion', 'Increase weight gradually', 'Record your performance'] },
    { title: 'Front Raise', challenges: ['Complete 3 sets of 10 reps', 'Keep torso stable', 'Gradually increase weight', 'Perform with proper form', 'Track progress'] },
    { title: 'Rear Delt Fly', challenges: ['Complete 4 sets of 12 reps', 'Use correct form', 'Increase weight as you progress', 'Maintain control', 'Record performance'] },
  ],
  Forearm: [
    { title: 'Wrist Curl', challenges: ['Complete 3 sets of 15 reps', 'Use appropriate weight', 'Perform with controlled motion', 'Gradually increase weight', 'Track your progress'] },
    { title: 'Reverse Wrist Curl', challenges: ['Complete 4 sets of 12 reps', 'Maintain proper form', 'Increase weight gradually', 'Record your performance', 'Perform with control'] },
    { title: 'Farmer’s Walk', challenges: ['Complete 3 sets for 1 minute each', 'Use heavy weights', 'Maintain good posture', 'Track distance and weight', 'Gradually increase weight'] },
    { title: 'Wrist Roller', challenges: ['Complete 3 sets to failure', 'Use appropriate weight', 'Perform with full range of motion', 'Increase weight over time', 'Record your progress'] },
  ],
  Abs: [
    { title: 'Crunches', challenges: ['Complete 4 sets of 20 reps', 'Maintain proper form', 'Perform with controlled motion', 'Gradually increase reps', 'Track your progress'] },
    { title: 'Leg Raises', challenges: ['Complete 3 sets of 15 reps', 'Keep legs straight', 'Perform with controlled motion', 'Gradually increase reps', 'Record performance'] },
    { title: 'Plank', challenges: ['Hold for 1 minute', 'Maintain proper form', 'Increase hold time gradually', 'Incorporate into core day', 'Track your progress'] },
    { title: 'Russian Twists', challenges: ['Complete 4 sets of 20 reps per side', 'Use appropriate weight', 'Perform with controlled motion', 'Gradually increase weight', 'Record performance'] },
  ],
  Cardio: [
    { title: 'Running', challenges: ['Run 5 kilometers', 'Increase pace gradually', 'Track your distance and time', 'Incorporate intervals', 'Record your progress'] },
    { title: 'Cycling', challenges: ['Cycle for 45 minutes', 'Increase resistance gradually', 'Track distance and time', 'Incorporate intervals', 'Record performance'] },
    { title: 'Jump Rope', challenges: ['Jump for 10 minutes', 'Increase duration gradually', 'Track jumps per minute', 'Incorporate tricks', 'Record your progress'] },
    { title: 'Rowing', challenges: ['Row for 20 minutes', 'Maintain a steady pace', 'Track distance and time', 'Increase intensity gradually', 'Record performance'] },
  ],
};

  const CommunityChallenge = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [completedChallenge, setCompletedChallenge] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedExercise(null);
    setSelectedChallenge(null);
    setCompletedChallenge(false);
  };

  const handleExerciseSelection = (exercise) => {
    setSelectedExercise(exercise);
    setSelectedChallenge(null);
    setCompletedChallenge(false);
  };

  const handleChallengeSelection = (challenge) => {
    setSelectedChallenge(challenge);
    setCompletedChallenge(false);
  };

  const handleCompleteChallenge = () => {
    setCompletedChallenge(true);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Workout Categories - List */}
        <Col md={3}>
          <h2>Select Workout Category</h2>
          <ul className="workout-list">
            {Object.keys(exercises).map((category) => (
              <li key={category}>
                <Button
                  variant="primary"
                  className="m-1"
                  onClick={() => handleCategorySelection(category)}
                >
                  {category}
                </Button>
              </li>
            ))}
          </ul>
        </Col>

        {/* Exercise and Challenges */}
        <Col md={9}>
          {selectedCategory && (
            <div className="mb-4">
              <h3>Select Exercise</h3>
              <ul className="exercise-list">
                {exercises[selectedCategory].map((exercise) => (
                  <li key={exercise.title}>
                    <Button
                      variant="success"
                      className="m-1"
                      onClick={() => handleExerciseSelection(exercise)}
                    >
                      {exercise.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedExercise && (
            <div className="mb-4">
              <h3>{selectedExercise.title}</h3>
              <h4>Select a Challenge</h4>
              <ul className="challenge-list">
                {selectedExercise.challenges.map((challenge, index) => (
                  <li key={index}>
                    <Button
                      variant="warning"
                      className="m-1"
                      onClick={() => handleChallengeSelection(challenge)}
                    >
                      Challenge {index + 1}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedChallenge && (
            <div className="mt-4">
              <Card>
                <Card.Header as="h5">Challenge Details</Card.Header>
                <Card.Body>
                  <Card.Text>{selectedChallenge}</Card.Text>
                  {completedChallenge ? (
                    <Card.Text className="text-success">
                      Congratulations! You have completed the challenge.
                    </Card.Text>
                  ) : (
                    <Button variant="success" onClick={handleCompleteChallenge}>
                      Mark as Complete
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CommunityChallenge;
