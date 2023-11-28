# NodeJS Part 2 :: Exercise 3 :: Add Controllers

## Do

- Add planets Controller (`controllers/planets.ts`) consisting of the following functions:
  - `getAll`
  - `getOneById`
  - `create`
  - `updateById`
  - `deleteById`.
- Then, replace callback functions in routes `(req: Request, res: Response) =>` with the functions above. (For example: the route `/api/planets` should use `getAll` function.)

## Use

- The dummy database of planets from the previous exercise.
- `Array.prototype.find` higher-order function to Get One.
- Spread operator (`[...planets]`) to Create.
- `Array.prototype.map` higher-order function to Update.
- `Array.prototype.filter` higher-order function to Delete.

## Check

- Use Postman to test the routes.
