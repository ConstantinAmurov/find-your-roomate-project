
# Find Your Roommate Project



## Project Overview

Find Your Roommate is a platform  for students and for property owners where students can register and find potential roommates based on Age, Location and Common Interests. After the registration, the users can see potential roommates and see percentage of their match, as well as all other common and general information.
For property owners they can register and add their properties so users can search and request a place.

## Technologies
Front-end:
- React.JS
- Redux
- React Query
- Tailwind
Back-end:
- Laravel
- PostgreSQL


## Software Requirements

-   Node.js **8+**

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/maitraysuthar/react-redux-saga-boilerplate.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## How to run

```bash
npm start
```

## New Module

All the modules of the project will be in `/src/modules/` folder, If you need to add more modules to the project just create a new folder in the same folder.

##### Every folder contains following files:
- Component file (`index.jsx`)
- Actions file (`actions.js`)
- Reducer file (`reducer.js`)
- Saga file (`saga.js`)
- Style file (`[module].css`)
- Sub module folder, if any.

##### Root module:
Module's root module folder is `/src/modules/app/` it contains main **Routes file (`routes.js`)**, **Reducer file (`mainReducer.js`)** and **Saga file (`mainSaga.js`)**. You will need to add your every component,reducer & saga to make your module work.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
