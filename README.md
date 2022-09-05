# Portfolio Website V2 (2022 - Current)

![Deployment Status](https://github.com/tengznaim/portfolio-website-v2/actions/workflows/build-deploy.yml/badge.svg)

<img src="static/og.png">

This is the second version of my [portfolio website](https://tengkunaim.web.app) built using Gatsby and hosted on Firebase hosting. This repository also includes a GitHub workflow that enables continuous deployment.

This takes inspiration from one of my favourite portfolio websites by [Brittany Chiang](https://github.com/bchiang7/v4) found at https://brittanychiang.com/ in terms of professionally structuring a Gatsby project.

### Plugins and Dependencies Used

1. gatsby-plugin-react-svg
2. gatsby-source-filesystem
3. gatsby-transformer-remark
4. gatsby-plugin-react-helmet
5. AOS

### Colour Scheme

| Colour         | Hex                                                                    |
| -------------- | ---------------------------------------------------------------------- |
| Primary Blue   | ![#18223C](https://via.placeholder.com/10/18223C/18223C.png) `#18223C` |
| Secondary Blue | ![#233554](https://via.placeholder.com/10/233554/233554.png) `#233554` |
| Light Purple   | ![#9DAAF2](https://via.placeholder.com/10/9DAAF2/9DAAF2.png) `#9DAAF2` |
| Yellow         | ![#F4DB7D](https://via.placeholder.com/10/F4DB7D/F4DB7D.png) `#F4DB7D` |
| Purplish White | ![#e6f1ff](https://via.placeholder.com/10/E6F1FF/E6F1FF.png) `#E6F1FF` |
| White          | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF/FFFFFF.png) `#FFFFFF` |

### Running the Site Locally

For personal reference and/or for whoever who would like to run this site locally, use the following commands.

1. Assuming the repository is initially cloned, navigate into the project directory and install the dependencies:
   ```
   npm install
   ```
2. Run the development server:
   ```
   gatsby develop
   ```

> Note: Bugs when working in development mode
>
> - Multiple "root" queries found. When working with VSCode and the Powershell terminal, sometimes the case of the directory is, for some reason, inaccurate, eg. Desktop -> desktop. This can cause an issue when building and hence, to fix it, cd out and into the project directory with the correct casing and run gatsby clean, gatsby develop.
> - The result of this StaticQuery could not be fetched. To fix this issue, first run gatsby clean to remove build cache and rerun gatsby develop.

### References

1. [How to use useRef and the difference with useState](https://www.youtube.com/watch?v=t2ypzz6gJm0)
2. [Gatsby SEO component](https://www.gatsbyjs.com/docs/add-seo-component/)
3. [GitHub actions for deploying to Firebase](https://github.com/marketplace/actions/deploy-to-firebase-hosting)
4. [Deploying a Gatsby application to Firebase](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-firebase/)
5. [Guide on GitHub actions for Gatsby Build + Firebase Deploy](https://www.andrewvillazon.com/automatically-deploying-with-github-actions/)
6. [Fixing SSL issues with Firebase .web.app URLs](https://stackoverflow.com/questions/63508679/how-do-i-resolve-err-cert-common-name-invalid-page-after-visiting-my-firebase)
7. [Multiple Root Query Issue with Terminal Casing](https://github.com/gatsbyjs/gatsby/issues/22795)
