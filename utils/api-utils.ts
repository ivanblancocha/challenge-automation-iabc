import axios from "axios";

export class ApiUtils{

    /* 
     * Realiza una solicitud GET para descargar una imagen
     * @param imageUrl - src o url de la imagen.
     * @returns Devuelve la imagen descargada.
     * 
    */
    
    static async downloadImage(imageUrl:string){
        console.log(`[ApiUtils - Descargando imagen desde ${imageUrl}]`)
        const response = await axios.get(imageUrl, {responseType: 'arraybuffer'});
        return Buffer.from(response.data);
    }
}