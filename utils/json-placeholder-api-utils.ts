import axios, { AxiosResponse } from "axios";

export class JsonPlaceholderApiUtils{

    private static JSON_PLACEHOLDER_BASE_URL = process.env.JSON_PLACEHOLDER_BASE_URL || 'https://jsonplaceholder.typicode.com';
    private static JSON_PLACEHOLDER_POSTS = process.env.JSON_PLACEHOLDER_POSTS || '/posts';

    /*
    * Realiza una solicitud POST al endpoint de Pokémon.
    * @data body del request
    * @returns Respuesta completa del endpoint.
    * */

  static async postCreatePost(data: Record<string, any>): Promise<AxiosResponse> {
    try {

        //Ejecutamos el request
        const response = await axios.post(`${this.JSON_PLACEHOLDER_BASE_URL}${this.JSON_PLACEHOLDER_POSTS}`,data, {
            headers: {
              'Content-Type': 'application/json',
            },
        });

        //Devolvemos la respuesta del request
        return response;
    } catch (error) {
      console.error(`[JSONPlaceholderUtils] Error al crear el nuevo post`, error.message);
      throw error; // Re-lanzamos el error para manejarlo en el test
    }
  }

}