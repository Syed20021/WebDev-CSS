// Kyan M, Syed Hassnat A
// Lab 4
const router = require('express').Router();

const {
	homeView,
    formView,
    addAnimal,
    allAnimalsView,
    editAnimalView,
    updateAnimal,
    deleteAnimal
} = require('../controllers/animal.controller');

// Home/Index 
router.get('/', homeView);

// Animal Form
router.get('/animals/entry-form', formView);

// Add Animal form submission
router.post('/add-animal', addAnimal);

// All Animals list
router.get('/animals/all-animals', allAnimalsView);

// Edit Animal form
router.get('/edit-animal/:id', editAnimalView);

// Update Animal route
router.post('/update-animal/:id', updateAnimal);

// Delete Animal route
router.post('/delete-animal/:id', deleteAnimal);

module.exports = router;
