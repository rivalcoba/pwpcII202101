import mongoose from 'mongoose';
import winston from './winston';

class MongooseODM {
  // Constructor de la clase
  constructor(url) {
    this.url = url;
  }

  // Metodos
  async connect() {
    try {
      // Configuraciones que requiere mongoose
      mongoose.Promise = global.Promise;
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      mongoose.set('useUnifiedTopology', true);
      winston.info(`🚠 Conectado a la DB en: ${this.url}`);
      await mongoose.connect(this.url);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default MongooseODM;
