// Importando biblioteca de validación
import * as Yup from 'yup';

// Creando el esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere nombre'),
  description: Yup.string()
    .max(500, 'La descripción esta limitada a 500 carácteres')
    .required('Se requiere un descripción'),
});

// Creando el middleware que realizará la validación
const getProject = (req) => {
  // Extraemos los datos del formulario del cuerpo de la petición
  const { name, description } = req.body;
  // Regresamos un objeto Project formado por los datos del formulario
  return {
    name,
    description,
  };
};

export default {
  getProject,
  projectSchema,
};
