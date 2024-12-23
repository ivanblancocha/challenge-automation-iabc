import { expect } from "playwright/test";
import test from "../../utils/fixture-utils";
import { JsonPlaceholderApiUtils } from "../../utils/json-placeholder-api-utils";

test.describe('JSON Placeholder test suit', () => {

    test('JSON Placeholder create new post',async({encryptedKey , logTestEndTime})=>{
        console.log(`[Test] Clave generada en el fixture: ${encryptedKey}`);
        // Datos para enviar en el POST
        const postData = {
            userId: 10,
            id: 101,
            title: 'Ivan test',
            body: 'un texto para la prueba',
        };

        const newPostResponse = await JsonPlaceholderApiUtils.postCreatePost(postData);

         // Validar la respuesta
        await expect(newPostResponse.status).toBe(201); // Validar que el código de estado sea 201 (Created)
        await expect(newPostResponse.data.title).toBe(postData.title); // Validar que el título coincida
        await expect(newPostResponse.data.body).toBe(postData.body); // Validar que el cuerpo coincida

        console.log(`[Test] Respuesta del servidor: ${JSON.stringify(newPostResponse.data, null, 2)}`);

        // Log de finalización del test
        logTestEndTime();


    })
    
});