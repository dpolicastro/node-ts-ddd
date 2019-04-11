import mongoose, { Schema } from 'mongoose';

interface ServiceModel extends Service, Consulting, Development, mongoose.Document { }

interface Service {
  provider: string;
  name: string;
  type: string;
}

enum Levels {
  'SENIOR' = 'senior',
  'MID-SENIOR' = 'mid-senior',
  'JUNIOR' = 'junior'
}

interface Consulting extends Service {
  price: number;
  level: Levels
}

interface Development extends Service {
  members: number;
  hours: number;
}


const schema = new mongoose.Schema({
  provider: String,
  type: String,
  category: String
}, { strict: false })

const ServiceModel = mongoose.model<ServiceModel>('Service', schema)

const consulting: Consulting = {
  provider: 'Oblue',
  name: 'Consulting',
  type: 'consulting',
  price: 75,
  level: Levels.SENIOR
}

const development: Development = {
  provider: 'Oblue',
  name: 'Consulting',
  type: 'development',
  members: 4,
  hours: 120
}


const create = (newObject: {}) => {
  ServiceModel.create(newObject)
    .then(data => console.log('Created: ', data))
    .catch(error => console.log)
}


// create(consulting);

const findAllServices = () => {
  ServiceModel.find()
    .then(data => {
      console.log('All data: ', data);
    }).catch(error => console.log);
}
// findAllServices();


// ############################################
// CONSULTING
const readConsulting = async (): Promise<Consulting[]> => {
  return ServiceModel.find({ type: 'consulting' })
}

const printConsulting = async () => {
  const consultings = await readConsulting();
  console.log('DATA: ', consultings);

  consultings.forEach(consulting => {
    console.log('Consulting: ', consulting)
  });
}
// printConsulting();


// ############################################
// DEVELOPMENT
const readDevelopment = async (): Promise<Development[]> => {
  return ServiceModel.find({ type: 'development' })
}

const printDevelopment = async () => {
  const developments = await readDevelopment();
  console.log('DATA: ', developments);

  developments.forEach(development => {
    console.log('Development: ', development)
  });
}
printDevelopment();
