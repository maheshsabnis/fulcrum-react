# React Application Development

1. Install The React CLI
    - npm install -g create-react-app
2. Create The React Application using CLI
    - create-react-app [APPLICATIOn-NAME]
        - create-react-app my-react-app

3. Folder Structure
    - The 'node_modules'
        - Folder that contains all dependency packages those are used for development, compile, build, test and run the react application
    - The 'src' folder 
        - Folder that contains React application files
    - The 'public' folder
        - Folder that contains build output
    - The 'package.json' file
        - The file that contains application development and testing dependencies (devDependencies), runtime dependencies (dependencies)
        - The 'script' commands
            - Running command, 'start', the command will be 'npm run start'
            - Build command, 'build', the command will be 'npm run build'
            - Test command, 'test', the command will be 'npm run test'   
# React.js Object Model

1. The 'react', the base object model aka, the react library
    - Defines component
        - The 'class component', the ES 6 class derived from 'Component' base class
        - The 'functional component', new and recommended from React 16.0+
    - Define Hooks (VERY-IMPORTANT-CONCEPT)
        - New Concept from React 16.8+
            - A JavaScript Function that is having predefined behavior     
2. The 'react-dom', the package that is used to Rendering and Mounting the Component in Browser
    - Provide the 'ReactDOM' object that has the 'render()' method to render and 'MOUNT' the UI in HTML page that is executed browser          
    - Manages the Mounting of UI using the HTML Container element e.g. <div>   

# Packages those are installed using REACT CLI

1. react-scripts
    - The package is used to Compile, Build, Run, test and Host React Application      
2. web-vitals
    - The package used by theReact CLI for managing the Compilation and Build Process
3. @testing-library/react
    - The React Testing Environment      
    - Allows to Unit Test The React UI
4. @testing-library/jest-dom
    - An integration with 'Jest', a JavaScript Framework to Unit Test JavaScrip apps
5. @testing-library/user-event
    - Test an Event that is raised on React Component's UI e.g. Click event on the button    

