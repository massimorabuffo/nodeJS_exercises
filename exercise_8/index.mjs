import { readFile, writeFile } from 'node:fs'
import figlet from 'figlet';

const fileTextName = 'text.txt';

writeFile(fileTextName, 'Hello!', error => {
    if(error){
        console.error(error);
        return;
    } 
    readFile(fileTextName, {encoding: 'utf-8'}, (error, data) => {
        if(error){
            console.error(error);
            return;
        }
       figlet(data, (error, dataFiglet) => {
        if(error){
            console.error(error);
            return;
        }
        console.log(dataFiglet);
       })
    })
})
