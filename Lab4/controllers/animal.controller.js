// Kyan M, Syed Hassnat A
// Lab 4

const { Animal } = require('../model/Animal');

/**
 * @param {*} req 
 * @param {*} res 
 */
exports.homeView = (req, res) => {
    res.render('index', {
        pageTitle: 'INFT 2202 - Lab4 Page',
    })
}

/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.formView = (req, res, next) => {
    res.render('animals/entry-form', {
        pageTitle: 'Add an Animal',
        errorMessage: ''
    })
}

// This adds an animal to our db
exports.addAnimal = async (req, res) => {
    try {
        const newAnimal = new Animal({
            Zoo: req.body.homeZoo,
            scientificName: req.body.scientificName,
            commonName: req.body.commonName,
            givenName: req.body.givenName,
            Gender: req.body.gender,
            DOB: req.body.dateOfBirth,
            Age: req.body.age,
            isTransportable: req.body.isTransportable === 'Available',
        });
        // 
        await newAnimal.save();
        req.session.successMessage = 'Animal added successfully to Database';
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// This gets all animals from the our db
exports.allAnimalsView = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.render('animals/all-animals', {
            pageTitle: 'All Animals',
            animals: animals,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// This will get the individual animal details for the editing
exports.editAnimalView = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findById(id);
        if (!animal) {
            throw new Error('Animal not found');
        }
        res.render('animals/edit-animal', {
            pageTitle: 'Edit Animal',
            animal: animal, 
            errorMessage: ''
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
};

// This updates animal details
exports.updateAnimal = async (req, res) => {
    try {
      const { id } = req.params;
      await Animal.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      req.session.successMessage = 'Animal updated successfully.';
      res.redirect('/animals/all-animals');
    } catch (error) {
      // this is a handle error
      res.render('animals/edit-animal', {
        pageTitle: 'Edit Animal',
        errorMessage: 'Error updating animal: ' + error.message,
        animal: req.body, 
      });
    }
};
  
  // This deletes animal
  exports.deleteAnimal = async (req, res) => {
    try {
      const { id } = req.params;
      await Animal.findByIdAndDelete(id);
      req.session.successMessage = 'Animal deleted successfully.';
      res.redirect('/animals/all-animals');
    } catch (error) {
      // handle error
      req.session.errorMessage = 'Error deleting animal: ' + error.message;
      res.redirect('/animals/all-animals');
    }
  };

module.exports = exports;