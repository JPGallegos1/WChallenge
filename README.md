# Wolox Challenge

#### Before to start...
There are others READMEs that I'm sure it will be helpful to understand some points of the project. You can follow the next links to go:
- [Layout README](https://github.com/JPGallegos1/WChallenge/blob/master/components/README.md)
- [Tests README](https://github.com/JPGallegos1/WChallenge/blob/master/tests/README.md)
- [Pages README](https://github.com/JPGallegos1/WChallenge/blob/master/pages/README.md)

- This is the [Trello](https://trello.com/b/gPSKvW2n/wolox) what a follow for my tasks.
- This is the Git and Github flow that I followed to handle features
![alt text](https://imgur.com/EtCjpDe.png "Github and Git flow")

#### Starting.
- Clone the project
- Go to the project root

#### Set the environment variables:
- `NEXT_PUBLIC_BASE_URL=http://private-8e8921-woloxfrontendinverview.apiary-mock.com`
- `NEXT_PUBLIC_LOGIN_ENDPOINT=login`
- `NEXT_PUBLIC_TECHS_ENDPOINT=techs`

#### Run it!
- Run: `yarn install`
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
