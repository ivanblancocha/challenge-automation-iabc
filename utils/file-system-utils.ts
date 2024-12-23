import fs from 'fs';
import path from 'path';

export class FileSystemUtils{

    /**
    * Crea una carpeta si no existe.
    * @param folderPath - Ruta de la carpeta a crear.
    */

    static createFolderIfNotExists(folderPath: string): void {
        try {
        // Resolver la ruta completa
        const resolvedPath = path.resolve(folderPath);

        // Verificar si la carpeta existe
        if (!fs.existsSync(resolvedPath)) {
            fs.mkdirSync(resolvedPath, { recursive: true });
            console.log(`[FileSystemUtils] Carpeta creada: ${resolvedPath}`);
        } else {
            console.log(`[FileSystemUtils] La carpeta ya existe: ${resolvedPath}`);
        }
        } catch (error) {
        console.error(`[FileSystemUtils] Error al crear la carpeta: ${error.message}`);
        throw error; // Re-lanzar el error si es necesario
        }
    }

    /**
     * Guarda una imagen en la carpeta especificada.
     * @param folderPath - Ruta de la carpeta donde se guardará la imagen.
     * @param fileName - Nombre del archivo de la imagen.
     * @param imageBuffer - Buffer que contiene los datos de la imagen.
     */
    static saveImage(folderPath: string, fileName: string, imageBuffer: Buffer): void {
        try {
        // Crear la carpeta si no existe
        this.createFolderIfNotExists(folderPath);

        // Construir la ruta completa del archivo
        const filePath = path.join(folderPath, fileName);

        // Guardar el archivo, sobrescribiendo si ya existe
        fs.writeFileSync(filePath, imageBuffer);
        console.log(`[FileSystemUtils] Imagen guardada: ${filePath}`);
        } catch (error) {
        console.error(`[FileSystemUtils] Error al guardar la imagen: ${error.message}`);
        throw error;
        }
    }

}