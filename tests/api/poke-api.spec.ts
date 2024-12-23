import test from "../../utils/fixture-utils";
import { FilesUtils } from "../../utils/files-utils";
import { PokeApiUtils } from "../../utils/poke-api-utils";
import { expect } from "playwright/test";


test.describe('Poke API Test Suit', () => {

    //Leemos el excel de pokemones
    //Tomamos la cabecera como las claves
    const data = FilesUtils.readExcelFile('./data/datos-pruebas.xlsx');
    //Iteramos sobre los datos obtenidos del excel
    data.forEach(pokeData => {
        test(`Parte 1 - Valida información del Pokemon "${pokeData.name}" y tiempo de respuesta`, async({encryptedKey , logTestEndTime})=>{
            console.log(`[Test] Clave generada en el fixture: ${encryptedKey}`);
            console.log(`[Test] Validando datos para: ${pokeData.name}.`);
            const {response, responseTime} = await PokeApiUtils.getPokemonByIdOrName(pokeData.id);
            const responseData = response.data;

            // **Extraer habilidades desde la respuesta de la API**
            const abilitiesFromApi = responseData.abilities.map((ability: any) => ability.ability.name.toLowerCase());
            console.log('[Test] Habilidades desde la API:', abilitiesFromApi);
            // **Normalizar habilidades del Excel**
            const abilitiesFromExcel = pokeData.abilities.split(',').map((habilidad: string) => habilidad.trim().toLowerCase());
            console.log('[Test] Habilidades desde el Excel:', abilitiesFromExcel);


            //Validamos properties
            await expect(responseData).toHaveProperty('name');
            await expect(responseData).toHaveProperty('id');
            await expect(responseData).toHaveProperty('abilities');

            //Validamos que se correspondan los datos
            await expect(responseData.id).toEqual(pokeData.id);
            await expect(responseData.name).toEqual(pokeData.name)
            await expect(abilitiesFromApi).toEqual(expect.arrayContaining(abilitiesFromExcel));
            //Validamos tiempo de respuesta < 10seg
            await expect(responseTime).toBeLessThan(1000);
            console.log('[Test] Validaciones finalizadas');


            //Logeamos fecha y hora de finalizacion
            logTestEndTime();
    
        });
        
    });

    
});