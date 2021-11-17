// Usando el patron factory para la creacion
// de middlewares de validación
const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    // Construyendo el objeto validador
    const dataObject = getObject(req);
    // Se realiza el proceso de validación
    try {
      // Se valida el objeto
      const validData = await shape.validate(dataObject, { abortEarly: false });
      // Se inyecta el objeto validado a la petición
      req.validData = validData;
      // Se invoca al siguiente middleware de la cadena
      return next();
    } catch (error) {
      // En caso de error se regresa la info del error
      return res.status(400).json({ error });
    }
  };

// exportando el validador
export default Validator;
