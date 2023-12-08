import {Request, Response} from "express"
import {db} from "./../db.js"

const getAll = async (req: Request, res: Response) => {
    const planets = await db.many(`SELECT * FROM planets`);
    res.status(200).json(planets);
}

const getOneById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1`, Number(id));
    res.status(200).json(planet);
}

const create = async (req: Request, res: Response) => {
    const {id, name} = req.body;
    const newPlanet = {id, name};
    const planets = await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
  
    res.status(201).json({msg: 'A new planet was created.'}).end();
}

const updateById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name} = req.body;
    // planets = planets.map(el => el.id === Number(id) ? {...el, name} : el);
    const planets = await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [Number(id), name]);
  
    res.status(200).json({msg: `Planet: '${name}' was updated.`});
}

const deleteById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const planets = await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
  
    res.status(200).json({msg: `The planet was deleted.`});
}

const createImage = async (req: Request, res: Response) => {
    const {id} = req.params;
    const filename = req.file?.path;

    if(filename && id){
        db.none(`UPDATE planets SET image$2 WHERE id=$1`, [Number(id), filename]);
        res.status(201).json({msg: `Planet image uploded successfully.`})
    }else{
        res.status(400).json({msg: `Planet image failed to upload.`})
    }

}

export {getAll, getOneById, create, updateById, deleteById, createImage}