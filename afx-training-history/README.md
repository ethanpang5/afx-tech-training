# Getting started

Welcome! This is the training team project for History. In this project, you will be recreating a simple version of our AFX [website](https://afx.dance/) using React and Typescript

To set up your environment, do the following:

1. If you haven't already, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Run `git clone https://github.com/afxdance/training-history.git`. This will create a folder training-history/ under the directory from which you ran the command
3. If you haven't already, install [nodeJS](https://nodejs.org/en/download/)
4. On your terminal, under training-history, run `npm install` (npm stands for node package manager, and is installed with NodeJS). This installs all the dependencies needed for this project
5. Run `npm start`, which will open [http://localhost:3000](http://localhost:3000)! You will see a very bare bones website...very soon it will be a lot livelier! 

## Project Structure

### src/App.tsx

For our purposes, this is the root of our application. Upon completing all components, remove all un-commented out sections to see the app come to life!

### src/App.css

We have implemented all necessary css for you (don't mess with the pre-existing class names!). If you have spare time, you can experiment with this file to make your app look prettier :)

### src/types.tsx

Since we use typescript, we store all our types in this file. The types you see in this file are comprehensive, so you don't have to worry about writing new types (only how to properly use them!)

### src/components/SpotlightComponent

This component "spotlights" a single person.  
We've already implemented most of this for you, but right now we only display a static ID (though this component is meant to be dynamic). We recommend implementing this last, as this will require a state change in the App.

### src/components/PersonComponent

Represents a single person.  
This component should display a person's picture, name, and position title. This is a really important component (think, what other components might need it?), so we recommend you tackle this one first!

### src/components/BoardComponent

Represents AFX Board.  
For simplicity sake, we only have **one** board in our data.tsx file (whereas in AFX each semester is a different board)

### src/components/TeamComponent

Represents a single team.  
This component should display each team's name, picture, and directors.

### src/components/TeamsComponent

Represents all teams in the data.tsx. 

## Approaching the project

Starting out, this may look intimidating, but as you may already see, you can break this entire project down into manageable chunks!  

To finish this project, we suggest following a set of deliverables:  

1. Think about, and then draw/map out the relationships between each component in the App. We suggest using a tree structure, with App.tsx at the top. Before you start coding, show your work to one of the training leads!  
2. Get familiar with the skeleton code and data. Look back to concepts introduced in our slide deck and see if you can identify places where these concepts have already been used (or may be needed!)  
3. Start coding! Our recommended order in implementation is PersonComponent --> BoardComponent --> TeamComponent --> TeamsComponent --> SpotlightComponent. However, feel free to approach this project in any way you want (it's doable if you put enough thought into step 1!!)  
4. If you are ever stuck or have any questions, **ask**. The training leads are here as a resource for you to use <3  

Good luck on the project! Go History and Go React :D










