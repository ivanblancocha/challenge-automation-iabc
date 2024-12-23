import xlsx from 'xlsx';

export class FilesUtils{

     /**
    * Lee un archivo XLSX y lo convierte a un array de objetos.
    * @param filePath - Ruta del archivo XLSX.
    * @returns Array de objetos que representan los datos del archivo.
    */

     static readExcelFile(filePath: string): any[] {
        try {
          // Leer el archivo
          const workbook = xlsx.readFile(filePath);
    
          // Seleccionar la primera hoja del archivo
          const sheetName = workbook.SheetNames[0]; // Obtener el nombre de la primera hoja
          const sheet = workbook.Sheets[sheetName]; // Obtengo los datos de la hoja
    
          // Convierto la hoja a JSON
          const jsonData = xlsx.utils.sheet_to_json(sheet);
    
          console.log(`[FilesUtils] Datos leídos del archivo ${filePath}:`, jsonData);
    
          return jsonData; // Retorna un array de objetos con los datos
        } catch (error) {
          console.error(`[FilesUtils] Error al leer el archivo XLSX: ${error}`);
          throw error; // Re-lanza el error para que pueda manejarse en otros lugares
        }
      }

      static getNameFile(src:string){
        return src.split('/').pop();
      }




}