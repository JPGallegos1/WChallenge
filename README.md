# Wolox Challenge

#### Run it!
- Clone the project
- Run: `yarn install`
- Go to the project root
- Run: `yarn dev` or...
- `yarn build` and `yarn start`

## Or you can try Docker configuration

- With the Dockerfile, I won't integrate CI/CD from here or some kind of testing. I'm looking to share my environment, so it just contains a basic configuration to run at http://localhost:5000 

#### Run it!

- With the commands below, you can get my environment and run the Wolox container:
`docker build -t wolox .`

- And then just make this:
`docker build -t wolox . && docker run --name WOLOX_CONTAINER -p 0.0.0.0:5000:3000 wolox`

- That'll start the Wolox container and then you can handle it from VSCode with his respective extension, from Docker dashboard or terminal.

- So, with Docker running, you can see the application here: http://localhost:5000
