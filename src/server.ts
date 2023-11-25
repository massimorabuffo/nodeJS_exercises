import { log } from "console";
import express from "express";
import "express-async-errors"
import morgan from "morgan"

const TODO: string = "start writing your Express API server here :)";

console.log(TODO);

const app = express()
const port = 3000

app.use(morgan("dev"));

app.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
})

app.get('/api/planets/:id', (req, res) => {
  const {id} = req.params;
  const planet = planets.find(el => el.id === Number(id));
  res.status(200).json(planet);
})

app.post('/api/planets', (req, res) => {
  const {id, name} = req.body;
  const newPlanet = {id, name};
  planets = [...planets, newPlanet];

  res.status(201).json({msg: 'A new planet was created.'}).end();
})

app.put('/api/planets/:id', (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  planets = planets.map(el => el.id === Number(id) ? {...el, name} : el);

  res.status(200).json({msg: `Planet: '${name}' was updated.`});
})

app.delete('/api/planets/:id', (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  planets.filter(el => el.id !== Number(id));

  res.status(200).json({msg: `Planet: '${name}' was deleted.`});
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];