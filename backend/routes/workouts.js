const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout, 
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutControllers')


const router = express.Router();
// get all workouts
router.get("/", getWorkouts);
// get workout by id
router.get("/:id", getWorkout);
// create new workout
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.put("/:id", updateWorkout);

module.exports = router;
