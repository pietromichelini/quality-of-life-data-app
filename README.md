# Webpack-QOL-Data-App
App that displays quality of life data about a list of urban areas (through [Teleport.org](https://developers.teleport.org/api/)'s API).

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="src/assets/img/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://fascinating-pie-7a403c.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/pietromichelini/Webpack-QOL-Data-App/issues">Report Bug</a>

    ·
    <a href="https://github.com/pietromichelini/Webpack-QOL-Data-App/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JS](https://en.wikipedia.org/wiki/JavaScript)
* [Webpack](https://webpack.js.org)
* [Sass](https://sass-lang.com/)
* [Lodash](https://lodash.com)
* [Axios](https://axios-http.com/)
* [Webpack-Dotenv](https://www.npmjs.com/package/dotenv-webpack)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

If you don't have npm installed yet, simply type the following command in your terminal.

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pietromichelini/Webpack-QOL-Data-App.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build from source 
   ```sh
   npm run build
   ```
4. Open dist/index.html 

In alternative to steps 3 and 4 you can also just serve directly from source (using [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)).
```sh
   npm run dev
   ```
   
## Usage

Simply type a city name in the search bar and click the "SEARCH" button. There will be 4 possible outcomes.

1. If the name you have searched for matches exactly or is close enough to a city name present in Teleport.org's database. The site will display some information about that city. There will also be a "LEARN MORE" button at the bottom that will link to Teleport.org's page dedicated to that city.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/95065307/171222921-88c37db1-877f-449a-b5f6-92974d3376f7.gif)

2. If the name you have searched for is NOT close enough to any of the actual city names present in Teleport.org's database. The site will display an error message (as shown in the gif below).

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/95065307/171223535-2dfd26dd-3a15-4883-b74d-b363d74872fe.gif)

3. If you have clicked the "SEARCH" button without entering any characters. The site will display error message (as shown in the gif below).

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/95065307/171223215-44fa94a2-2f6e-4131-900f-72cafadbb946.gif)

4. In any other case the site will display an error message (as shown in the gif below).

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/95065307/171223667-96bad84a-babe-405f-8384-cb87fe2623af.gif)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Pietro Michelini - pietro.michelini@gmail.com

Project Links: 
- [Github Repository](https://github.com/github_username/repo_name)
- [Netlify Website](https://fascinating-pie-7a403c.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>
