import express from "express";
const router = express.Router();
import Grade from "../models/grades.mjs";
import db from "../db/conn.mjs";

// seed route
router.get("/seed", async (req, res) => {
  console.log("in seed");
  try {
    await Grade.create([
      {
        StudentName: "Khadija",
        type: "quiz",
        score: "100",
        pass: true,
      },
      {
        StudentName: "Nahid",
        type: "quiz",
        score: "98",
        pass: true,
      },
      {
        StudentName: "Mary",
        type: "quiz",
        score: "90",
        pass: true,
      },
    ]);
    res.status(200).redirect("/grades");
  } catch (err) {
    res.status(400).send(err);
  }
});

// I - Index    GET         READ - display a list of elements
router.get("/", async (req, res) => {
  try {
    const foundGrades = await Grade.find({});
    res.status(200).render("grades/Index", { grades: foundGrades });
    // res.status(200).send(foundGrades);
  } catch (err) {
    res.status(400).send(err);
  }
});

// N - New - allows a user to input a new grade
router.get("/new", (req, res) => {
  res.render("grades/New");
});

//ID- DELETE--
router.delete("/:id", async (req, res) => {
  try {
    const deletedGrade = await Grade.findByIdAndDelete(req.params.id);
    // console.log(deletedGrade);
    res.status(200).redirect("grades");
  } catch (err) {
    res.status(400).send(err);
  }
});

// U - UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.pass === "on") {
    req.body.pass = true;
  } else {
    req.body.passt = false;
  }

  try {
    const updatedGrade = await Grade.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(updatedGrade);
    res.redirect(`/grades/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  // Convert 'on' to true or false for the pass field
  if (req.body.pass === "on") {
    req.body.pass = true;
  } else {
    req.body.pass = false;
  }

  try {
    const createdGrade = await Grade.create(req.body);
    res.status(200).send(createdGrade);
  } catch (err) {
    res.status(400).send(err.message); // Send only the error message
  }
});

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
    const foundGrades = await Grade.findById(req.params.id);
    res.status(200).render("grades/Edit", { Grade: foundGrades });
  } catch (err) {
    res.status(400).send(err);
  }
});

// S - SHOW - show route displays details of an individual grade
router.get("/:id", async (req, res) => {
  try {
    const foundGrades = await Candy.findById(req.params.id);
    res.render("grades/Show", { grade: foundGrades });
  } catch (err) {
    res.status(400).send(err);
  }
});
export default router;
