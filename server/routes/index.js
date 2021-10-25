// Importando el router de Home
import homeRouter from './home';
// Importando router de users
import userRouter from './user';
// Importando router de projects
import projectRouter from './project';

// Agregando las rutas a la aplicación
const addRoutes = (app) => {
  // Home Routes
  app.use('/', homeRouter);

  // Project Routes
  app.use('/projects', projectRouter);

  app.use('/user', userRouter);
  return app;
};

export default {
  addRoutes,
};
