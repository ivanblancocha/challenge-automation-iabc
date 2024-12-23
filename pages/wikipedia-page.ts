import { Page, Locator } from "playwright/test";
import { ApiUtils } from "../utils/api-utils";
import { FileSystemUtils } from "../utils/file-system-utils";
import { FilesUtils } from "../utils/files-utils";
import * as path from "path";
import * as fs from "fs";

export class WikipediaPage{
    readonly page:Page;
    readonly wikipediaUrl = process.env.WIKIPEDIA_URL;
    readonly pageTitleLocator:Locator;
    readonly artWorkByLocator:Locator;
    readonly infoboxImg:Locator;
    readonly imgboxImgOpened:Locator;
    imageExtension: string | undefined;
    imageSize: number | undefined;


    constructor(page:Page){
        this.page=page;
        this.pageTitleLocator=page.locator('#firstHeading');
        this.artWorkByLocator=page.locator('//*[contains(text(),"artwork by")]');
        this.infoboxImg=page.locator('//*[@class="infobox-image"]//img');
        this.imgboxImgOpened=page.locator('//img[@crossorigin="anonymous"]');
    }

    async goToPokemonPage(pokemonName:string){
        const url = `${this.wikipediaUrl}/${pokemonName}`;
        console.log(`[WikipediaPage] Navegando a: ${url}`);
        await this.page.goto(url);
    }

    async downloadInfoBoxImage(){
        const src = await this.imgboxImgOpened.getAttribute('src');
        const fileName = FilesUtils.getNameFile(src);
        const filePath = path.join(process.env.IMAGE_FOLDER,fileName); 
    
        if (!src) {
            console.error(`[WikipediaPage] No se encontró la imagen en la infobox.`);
            return;
          }

        console.log(`[WikipediaPage] Descargando imagen desde: ${src}`);
        const downloadedImageBuffer = await ApiUtils.downloadImage(src);
        await FileSystemUtils.saveImage(process.env.IMAGE_FOLDER,fileName,downloadedImageBuffer);

        // Asignamos extensión y tamaño
        this.imageExtension = path.extname(filePath).toLowerCase();
        this.imageSize = fs.statSync(filePath).size; // Tamaño en bytes

    }
}