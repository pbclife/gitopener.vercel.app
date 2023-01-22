# GitOpener

<!-- Descrption -->

Checkout out [contribution guidelines][contributing] before you start with contributions

## Contribution guide

### Installation

> This is a Next.js project bootstrapped with create-next-app

1. Fork the repo into your account

![Fork Image](https://i.imgur.com/mNw6zxu.png)

2. Clone the project into your local machine

```sh
git clone https://github.com/<Your-GitHub-username>/gitopener.vercel.app.git
```

3. Navigate the folder

```sh
cd gitopener.vercel.app
```

3. Install the dependencies
 > As Git Opener uses yarn package manager, it is recommended to use yarn, [install yarn][yarn-website]

```sh
yarn install
```

4. Make .env.local file in root directory with these variables
  > This step is optional, Do this step if you want to run complete application with database support

```
MONGO_URI= 'YOUR MONGODB CONNECTION STRING GOES HERE'
GITHUB_TOKEN= 'YOUR GITHUB TOKEN GOES HERE'
```

- Get mongodb connection string here: [MONGODB DOCS][mongodb-docs]
- Generate github token here: [GITHUB TOKEN][github-token]

5. Run the project on local machine

```sh
yarn dev
```

6. Every time you start making changes to your forked repo make sure it's in sync with the original repo

## Contributing Guidelines

Thank you for considering to contribute to this project.

### What do I need to know to contribute?

This project is in a very early stage so anybody who's familiar with **ReactJS**/**NextJS**/**Typescript**/**TailwindCSS** can contribute. If you don't feel ready to make a contribution yet, no problem at all. You can also contribute to this `ReadMe` section or the **Documentation** part of our project.

If you are interested to contribute and want to learn more about the technologies that are used in this project, checkout the links below.

- [ReactJS Official Docs](https://reactjs.org/docs/getting-started.html)
- [NextJS Documentation](https://beta.nextjs.org/docs)
- [Typescript Documentaion](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation)

### How to make a Contribution?

Never made an open source contribution before? And wondering how to contribute to this project?
No worries! Here's a quick guide,

1. Choose any feature/bug you wish to contribute to.
2. Fork the repository into your own account.
3. Clone the repo you have forked in your local machine using `git clone https://github.com/<Your-GitHub-username>/gitopener.vercel.app.git`
4. Create a new branch for your fix by using the command `git checkout -b YourName-branch-name `
5. Make the changes you wish to do and stage them using the command `git add files-you-have-changed ` or use `git add .`
6. Use the command `git commit -m "Short description of the changes"` to describe the changes you have done with a message.
7. Push the changes to your remote repository using `git push origin your-branch-name`
8. Submit a PR(pull request) to the upstream repository `pbclife/gitopener.vercel.app` with a title and a small description.
9. Wait for the pull request to be reviewed by us.
10. Make appropriate changes if the maintainer recommends you to and submit it.
11. Await for your contribution to be merged into the repository.

Checkout the [Contributing.md][contributing] file before contributing.


<!-- ### Where can I go for help? -->


## License

[MIT][license]


## Thanks to all the Contributors ❤️

<a href = "https://github.com/pbclife/gitopener.vercel.app/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=pbclife/gitopener.vercel.app"/>
</a>


## Your Support means a lot

Give a ⭐ to the project if you liked it. :)

[yarn-website]: https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable
[mongodb-docs]: https://www.mongodb.com/docs/compass/current/connect
[github-token]: https://github.com/settings/tokens
[contributing]: https://github.com/pbclife/gitopener.vercel.app/blob/main/CONTRIBUTING.md
[license]:https://github.com/pbclife/gitopener.vercel.app/blob/main/LICENCE
