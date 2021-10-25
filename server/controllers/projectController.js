// Actions Methods
// "/projects" "/porjects/index"
const index = (req, res) => {
  res.send('Respondiendo a "/projects/index"');
};

// GET "/projects/add"
// Enviar el formulario para crear nuevas ideas
// de proyectos
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/projects/add"
const addPost = (req, res) => {
  // Rescatando la información del formulario
  const { name, description } = req.body;
  res.json({
    name,
    description,
  });
};

// Pendiente por programar
export default {
  add,
  addPost,
  index,
};
