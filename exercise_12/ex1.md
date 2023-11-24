# NodeJS Part 2 :: Exercise 1 :: Set up a simple Express App

## Do

- Write simple Express server that listens on port `3000` (use dotenv to specify the port)
- Create a dummy "database" of `planets` using a `let` variable. (You will use this data in further exercises.)
- Configure your app (`app.use()`) to:
  - accept JSON from the Client
  - log the Client's requests

## Use

- Dummy database with initial data:

  ```js
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
  ```

- `express-async-errors`
- `morgan`
