// routes/stories.js
//const express = require('express');
import express from 'express';

const router = express.Router();
import Story from '../mongodb/models/stories.js';

//const Story = require('../mongodb/models/stories.js');

// Create a new story
router.post('/', async (req, res) => {
  try {
    // Create a new Story instance with the data from the request body
    const story = new Story(req.body);
    // Set the expiration date to 24 hours from now
    story.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    // Save the new story to the database
    await story.save();
    // Send a 201 status (Created) and the new story object as a response
    res.status(201).json(story);
  } catch (error) {
    // If there's an error, send a 400 status (Bad Request) and the error message
    res.status(400).json({ error: error.message });
  }
});
// Get all stories
router.get('/', async (req, res) => {
    try {
      // Find all stories in the database that haven't expired
      const stories = await Story.find({ expiresAt: { $gt: new Date() } });
      // Send the stories array as a response
      res.json(stories);
    } catch (error) {
      // If there's an error, send a 500 status (Internal Server Error) and the error message
      res.status(500).json({ error: error.message });
    }
  });
  // Get a story by ID
router.get('/:id', async (req, res) => {
    try {
      // Find the story in the database by its ID (from the parameters)
      const story = await Story.findById(req.params.id);
      // If the story is not found or has expired, send a 404 status (Not Found) and an error message
      if (!story || story.expiresAt <= new Date()) {
        return res.status(404).json({ error: 'Story not found or expired' });
      }
      // Send the story object as a response
      res.json(story);
    } catch (error) {
      // If there's an error, send a 500 status (Internal Server Error) and the error message
      res.status(500).json({ error: error.message });
    }
  });
  // Delete a story by ID
router.delete('/:id', async (req, res) => {
    try {
      // Find the story in the database by its ID and delete it
      const story = await Story.findByIdAndDelete(req.params.id);
      // If the story is not found, send a 404 status (Not Found) and an error message
      if (!story) {
        return res.status(404).json({ error: 'Story not found' });
      }
      // Send a 204 status (No Content) to indicate that the story has been deleted
      res.status(204).end();
    } catch (error) {
      // If there's an error, send a 500 status (Internal Server Error) and the error message
      res.status(500).json({ error: error.message });
    }
  });
  
  export { router };
  //module.exports = router;
