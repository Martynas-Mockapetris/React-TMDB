# React-TMDB
TMDB implementation with React <br>
TMDB implementation with React - VCS <br>
First time to create an informative README for smooth launch process

## Introduction
### Purpose
The main purpose of this project is to learn nifty things about **React**. 
The reason behind this project is to have the ability to test yourself on how you can integrate previously learned material into newly learning subject - REACT. 

### Scope
Analize TMDB page, study its API documentation and learn integration from developers pages. This task requires a basic understanding on how to get necessary data from outside, publish it locally and store some favorites on a local storage. During this project I managed to learn on how to install React framework, managed to play with API fetching and data storing of specific information. Managed to, from my point of view, divide project into page components and more minor block components. **Learned new things about _React Routing_, _React API integration_, _Bootstrap Importing_, _Tailwind Importing_**. 

## Materials
### Useful links:
  - https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/?authuser=0
  - https://rapidapi.com/blog/how-to-use-an-api-with-react/?authuser=0
  - https://pusher.com/tutorials/consume-restful-api-react/
  - https://www.themoviedb.org
  - https://developer.themoviedb.org/reference/intro/getting-started
  - https://colorhunt.co/palette/091057024caaec8305dbd3d3
  - https://developer.mozilla.org
  - https://stackoverflow.com
  - GOOGLE

### Libraries:
  - React
  - Tailwind - _installed but never used in final result, only tried to get it working_
  - Bootstrap Icons

## Getting Started
### Downloading project via VS Code
1. Open a new window of VS code and press the “Source Control” icon on the left-hand side, and then the “Clone Repository” button.

![Screenshot of a first step.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*2YlAJQybd2haw51RbZk17Q.png)

2. A dropdown menu will appear at the top, where you can enter the URL of the repo you want to clone. You can also choose where to save the repo on your computer. Then click “Clone”. “Clone from URL” will let you download a repo from GitHub, or any other website that uses the git protocol. “Clone from GitHub” will let you download a repo from GitHub, but you’ll need to be logged in to your GitHub account. 

![Screenshot of a second step.](https://miro.medium.com/v2/resize:fit:640/format:webp/1*N4Ea-1Rp4ZsqruWzIHRPiQ.png)

3. After VS Code has identified which repo you would like to clone, you’ll be asked to pick a folder to save the repo in. Once you do that, VS Code will download the repo and ask if you want to open it.

![Screenshot of a third step.](https://miro.medium.com/v2/resize:fit:640/format:webp/1*YIFfuA8Gqhwl7h2WjUal-Q.png)

4. Go ahead and click “Open”. You may be asked if you trust the authors. If so (which I think you can if it’s your repo!), go ahead and click “Yes”.

![Screenshot of a fourth step.](https://miro.medium.com/v2/resize:fit:640/format:webp/1*draw3mFRum1VFSVTUOfYaw.png)

5. And there you have it! You can now see the files in your repo in the “Explorer” tab on the left-hand side.

![Screenshot of a fifth step.](https://miro.medium.com/v2/resize:fit:640/format:webp/1*0uW1ut2aKqoewl_EQIl38g.png)

### Launching the project

1. Once you’re inside the project directory, right click on any file or folder within and choose

![Screenshot of a first step.](https://code.visualstudio.com/assets/docs/terminal/basics/open-in-terminal-command.png)

2. A terminal should start, inside the terminal make sure that the directory is inside the downloaded repo, if that is the case, type:

  ```sh
  npm i
  ```

  > Hit **Enter**. This will install all the necessary libraries and files for this project. 

3. When all files have been downloaded, you should be able to type again inside the terminal, type:

  ```sh
  npm run dev
  ```

  > This command will run the React project, you should see **VITE vX.X.XX  ready in XXX ms**

4. Open the localhost link (Either copy it or `ctrl + click` / `cmd + click`)

![Screenshot of a first step.](https://flaviocopes.com/images/vite-react-app/Untitled%205.png)

5. VOILA!!! You have a running and fully working project!

## Playing around
### Structure, logic and usage
  - src folder includes all the working components
  - main component is: `App.jsx`
  - main styles are in: `App.css`
  - pages folder includes seperate pages
  - components includes blocks that go into pages
  - All files, that I have worked with, has almost every line comments unless it's a straight forward thing.
  - You might find some code commented out, you can either uncomment it and play around to see what data is parsed
### Keynotes
  - Tailwind is installed, but not applied, I only wanted to play around with it, to see how/if it works (still learning...). Luckily in this project it does work, so if you want you can play around with it
  - I was too lazy to create seperate page styles, so I dumped all of it into main `App.css` file, in general there is not much style going on there
  - Some finiky stuff might be found in styling, but that is because I did not want to brake basic applied design
  - My approach on movie titles was one line text, so I cut it out and hid the overflowing text. You can change that:
    - `App.css` > `.movie-card` > `h3` line 167-168 > `white-space: nowrap; overflow: hidden;`
    - Yes, structure is not vanilla CSS, I can't help myself using SCSS structure, I just love it.
  - If you want to play or modify applied API, I advise you to read material from useful links, helps a lot.
