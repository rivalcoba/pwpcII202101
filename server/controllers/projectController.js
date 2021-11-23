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
  const { validData, errorData } = req;
  // Creando view models
  let project = {};
  let errorModel = {};
  // Verificando si hay errores
  if (errorData) {
    // Rescatando objeto validado
    project = errorData.value;
    // Usamos reduce para generar
    // un objeto de errores
    // apartir del arreglo inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Creamos una variable temporal para evitar
      // el error "no-param-reassing"
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    project = validData;
  }
  res.render('project/addView', { project, errorModel });
};

// Pendiente por programar
export default {
  add,
  addPost,
  index,
};
