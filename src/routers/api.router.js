const express = require('express');

const apiController = require('../controllers/api.controller');

const router = express.Router();

// Endpoint for getting all the records
router.get('/get-all-users', apiController.getUsers);

// Endpoint for creating a new record
router.post('/add-new-user', apiController.addUser);

// Endpoints for updating a record
router.put('/update/:id', apiController.updateUser);

// Endpoints for deleting a record
router.delete('/delete/:id', apiController.deleteUser);

module.exports = router;
