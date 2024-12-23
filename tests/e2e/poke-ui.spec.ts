import { expect } from "playwright/test";
import { WikipediaPage } from "../../pages/wikipedia-page";
import { FilesUtils } from "../../utils/files-utils";
import test from "../../utils/fixture-utils";

test.describe('E2E Poke search test suit', () => {

    //Leemos el excel de pokemones
    //Tomamos la cabecera como las claves
    const data = FilesUtils.readExcelFile('./data/datos-pruebas.xlsx');
    //Iteramos sobre los datos obtenidos del excel

    data.forEach(pokeData => {
        test(`Buscar el pokemon: ${pokeData.name} en wikipedia`,async({ encryptedKey, page } )=>{

            const wikipediaPage = new WikipediaPage(page);
    
            console.log(`[Test] Buscando en Wikipedia a: ${pokeData.name}.`);

            await test.step(`Ir a la pagina de Wikipedia para: ${pokeData.name}`, async()=>{
               await wikipediaPage.goToPokemonPage(pokeData.name);
            });

            await test.step(`Validación del título ${pokeData.name}`, async()=>{
                const titleText = await wikipediaPage.pageTitleLocator.evaluate(el => el.textContent?.toLowerCase());
                await expect(titleText).toEqual(pokeData.name);
             });

             await test.step(`Descargamos imagen de: ${pokeData.name}`, async()=>{
                await wikipediaPage.infoboxImg.click();
                await wikipediaPage.downloadInfoBoxImage();
             });

            await test.step(`Validamos tamaño de la imagen`, async()=>{
                const maxSize = 500000; // 500 KB
                await expect(wikipediaPage.imageSize).toBeLessThanOrEqual(maxSize);
                console.log(`[Test] Validación de tamaño: ${wikipediaPage.imageSize} bytes`);

            });

            await test.step(`Validamos formato de la imagen`, async()=>{
                const validExtensions = ['.jpg', '.jpeg', '.png', '.svg'];
                await expect(validExtensions).toContain(wikipediaPage.imageExtension);
                console.log(`[Test] Validación de extensión: ${wikipediaPage.imageExtension}`);
            });    
        });
        
    });
    
    
});