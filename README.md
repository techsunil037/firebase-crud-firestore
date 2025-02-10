# FirebaseCrudFirestore

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Setup Firebase Account

### Navigate to https://console.firebase.google.com/ and click on Create a project
![alt text](/src/assets/step-0.png)

### Give a name for your project and click on continue
![alt text](/src/assets/step-1.png)

### On AI assistance for your Firebase project disable Gemini in Firebase
![alt text](/src/assets/step-2.png)

### On Google Analytics for your Firebase project disable Google Analytics for this project
![alt text](/src/assets/step-3.png)

### The it will create a firebase project for you
![alt text](/src/assets/step-4.png)

### Now your firebase project is ready
![alt text](/src/assets/step-5.png)

### Click on build and choose firestore database
![alt text](/src/assets/step-6.png)

### Click on Create Database
![alt text](/src/assets/step-7.png)

### From location choose a location
![alt text](/src/assets/step-8.png)

### For testing purpose you can choose Start in test mode
![alt text](/src/assets/step-9.png)

### Click on rules to change the rule
![alt text](/src/assets/step-10.png)

### Omit the condition to perform always do crud operation
![alt text](/src/assets/step-11.png)

### Now go on Project settings and choose web app
![alt text](/src/assets/step-12.png)

### Register app through a app nick name
![alt text](/src/assets/step-13.png)

### Now you can see firebase config that is what you need in the application
![alt text](/src/assets/step-14.png)

## Firebase config

Copy your firebase config to ```src/environments/environment.ts```

```bash
export const environment = {
  firebaseConfig: {
    /*
        COPY YOUR FIREBASE CONFIG HERE
    */
  },
};
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
