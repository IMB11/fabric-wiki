# Fabric Wiki

> [!IMPORTANT]  
> This wiki is still a work in progress, and may be missing pages from the legacy wiki. If you are looking for a page that is not here, please check the [legacy wiki](https://fabricmc.net/wiki).

This is the repository for the official Fabric Wiki. The wiki is built using [VitePress](https://vitepress.vuejs.org/) and hosted on [GitHub Pages](https://pages.github.com/).

## Contributing

Contributions of "new" pages are currently not being accepted due to the early stage of the wiki's development. Once the wiki is more complete, contributions will be accepted.

If you are interested in helping out in migrating, updating and rewriting content for this new wiki, please join the [Fabric Discord](https://discord.gg/v6v4pMv) and go to the `#wiki` channel where you will find the [`VitePress Wiki System`](https://discord.com/channels/507304429255393322/1189966334369484862) thread.

## Translating

Currently, translations are not being worked on. Once the wiki is more complete, a translation system will be set up to aid the process.

## Running Locally

> [!TIP]  
> You don't nessecarily need to run vitepress locally to contribute, as you can edit the markdown files directly on GitHub. However, if you want to see your changes in the same style as the wiki before making a commit, you should run the wiki locally or via GitHub Codespaces.

**Prerequisites:**

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [PNPM](https://pnpm.io/)

```bash
# Install dependencies.
pnpm install
# Start the development server.
pnpm run docs:dev
```

*(You can use other package managers, but PNPM is recommended. If you do end up using another package manager, make sure to remove any cache directories or files before making a commit.)*

## License

Unless where noted, all content on this wiki is licensed under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). 

See the [LICENSE](./LICENSE) file for more information.