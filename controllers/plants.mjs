import express from "express";
const router = express.Router();
import plant from "../models/plants.mjs";
import db from "../db/conn.mjs";

// seed route
router.get("/seed", async (req, res) => {
  console.log("in seed");
  try {
    await plant.create([
      {
        name: "mosses",
        color: "green",
        forEat: true,
      },
      {
        name: "ferns",
        color: "gray-green",
        forEat: true,
      },
      {
        name: "flowering plants",
        color: "Mixed Color",
        forEat: false,
      },
    ]);
    res.status(200).redirect("/plants");
  } catch (err) {
    res.status(400).send(err);
  }
});

// I - Index    GET         READ - display a list of elements
router.get("/", async (req, res) => {
  try {
    const foundPlant = await plant.find({});
    res.status(200).render("plants/Index", { plant: foundPlant });
  } catch (err) {
    res.status(400).send(err);
  }
});

// N - New - allows a user to input a new plant
router.get("/new", (req, res) => {
  res.render("plants/New");
});

//ID- DELETE--
router.delete("/:id", async (req, res) => {
  try {
    const deletedPlant = await plant.findByIdAndDelete(req.params.id);
    // console.log(deletedPlant)
    res.status(200).redirect("plants");
  } catch (err) {
    res.status(400).send(err);
  }
});

// U - UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.forEat === "on") {
    req.body.forEat = true;
  } else {
    req.body.forEat = false;
  }

  try {
    const updatedPlant = await plant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(updatedPlant);
    res.redirect(`/plants/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// C - CREATE
// Route to create a new plant
router.post("/", async (req, res) => {
  // Convert 'on' to true or false for the forEat field
  if (req.body.forEat === "on") {
    req.body.forEat = true;
  } else {
    req.body.forEat = false;
  }

  try {
    // Create a new plant using the Plant model
    const createdPlant = await plant.create(req.body);
    res.status(200).redirect("/plants");
  } catch (err) {
    res.status(400).send(err);
  }
});

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
    const foundPlant = await plant.findById(req.params.id);
    res.status(200).render("plants/Edit", { plant: foundPlant });
  } catch (err) {
    res.status(400).send(err);
  }
});

// S - SHOW - show route displays details of an individual plant
router.get("/:id", async (req, res) => {
  try {
    const foundPlant = await plant.findById(req.params.id);
    res.render("plants/Show", { plant: foundPlant });
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
