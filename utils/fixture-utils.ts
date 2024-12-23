import { test as baseTest } from '@playwright/test';
import crypto from 'crypto';
import 'dotenv/config';

const SECRET_KEY = process.env.SECRET_KEY || ''; // Cargada desde variables de entorno

type Fixtures = {
  encryptedKey: string,
  logTestEndTime:()=>void;
};

const test = baseTest.extend<Fixtures>({
  encryptedKey: async ({}, use) => {
    const hashedKey = crypto.createHash('sha256').update(SECRET_KEY).digest('hex');
    console.log(`[Fixture] Clave generada: ${hashedKey}`);
    await use(hashedKey);
  },
  logTestEndTime: async({},use)=>{
    // Crear una función que loguee la hora y fecha de finalización
    const logEndTime = () => {
    const currentDateTime = new Date();
    console.log(`[Fixture] Finalización del test: ${currentDateTime.toISOString()}`);
  };
  await use(logEndTime);
  },

});

export default test;