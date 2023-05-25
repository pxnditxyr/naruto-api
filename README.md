# Project Naruto API | Nest

This is an open-source API for Naruto fans, licensed under the MIT license. The project is currently in development and does not have any endpoints yet. 

## How to Run

To run the project, make sure you have [Node.js](https://nodejs.org/) installed on your computer. Then, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/pxnditxyr/naruto-api
```

2. Open a terminal and navigate to the project's directory.

```bash
cd naruto-api
```

3. Run next command to install the project's dependencies.

```bash
npm install
```

4. Rename .env.example to .env

```bash
mv .env.example .env
```

4. Run next command to start the development server.

```bash
npm run start:dev
```

5. Open a web browser and navigate to

```bash
http://localhost:3000
```

6. Up Database
```bash
docker compose up -d
```

7. Rebuild Database with seed
```bash
http://localhost:3000/api/seed
```

## Production Build

1. Create file .env.production or clone .env.example

```bash
cp .env.example .env.prod
```

2. Change Environment Variables

3. Create new image with command:

```bash
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4. Test in local
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

```

## Contributors

- Pxndxs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
