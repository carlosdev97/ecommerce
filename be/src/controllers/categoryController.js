const Category = require("../models/category");

exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la categoría",
      error: error.message,
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las categorías",
      error: error.message,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la categoría",
      error: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la categoría",
      error: error.message,
    });
  }
};
