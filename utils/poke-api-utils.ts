import axios, { AxiosResponse } from "axios";

export class PokeApiUtils{

    private static POKE_BASE_URL = process.env.POKE_BASE_URL || 'https://pokeapi.co/api/v2/pokemon';

    /*
    * Realiza una solicitud GET al endpoint de Pokémon.
    * @param idOrName - ID o nombre del Pokémon.
    * @returns Respuesta completa del endpoint.
    * */

  static async getPokemonByIdOrName(idOrName: string | number): Promise<{response:AxiosResponse,responseTime:number}> {
    try {

        // Registrar el tiempo de inicio
        const startTime = performance.now();
        //Ejecutamos el request
        const response = await axios.get(`${this.POKE_BASE_URL}/${idOrName}`);
        // Registrar el tiempo de finalización
        const endTime = performance.now();

        // Calcular el tiempo de respuesta
        const responseTime = endTime - startTime;

        console.log(`[ApiUtils] Tiempo de respuesta para ${idOrName}: ${responseTime.toFixed(2)} ms`);

        //Devolvemos la respuesta del request y el tiempo de respuesta de la ejecución
        return {response, responseTime};
    } catch (error) {
      console.error(`[ApiUtils] Error al obtener el Pokémon ${idOrName}:`, error.message);
      throw error; // Re-lanzamos el error para manejarlo en el test
    }
  }


}