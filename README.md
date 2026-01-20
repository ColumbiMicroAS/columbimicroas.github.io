# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install 
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This project can be deployed to GitHub Pages using the built-in deployment command.

#### Prerequisites

1. Make sure you have push access to the repository
2. Ensure the `gh-pages` branch exists or will be created automatically
3. Configure your repository settings to serve from the `gh-pages` branch

#### Deployment Methods

**Using SSH (Recommended if you have SSH keys configured):**

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

Please follow standards used in existing documentation when contributing new content or making changes.
If you think something can be improved, feel free to discuss this so we can decide the best way forward.
The goal is to make the documentation as clear and easy to understand as possible for all users.

### Adding date to documentation pages
So we can see how current the documentation is, we add a "Last Updated" date to each page.
To do this, add an `updated` field to the front matter of the markdown file, e.g.
```md
---
sidebar_position: 1
updated: 2026-01-20
---
``` 
Then, at the bottom of the page, add the following code snippet:
```md
:::info Last Updated
{new Date(frontMatter.updated).toLocaleDateString()}
:::
``` 


