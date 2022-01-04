# Vremea weather forecasting app

I build this app in response to the [challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) from devChallenges.io and added my own flair to it.

>**Table of Contents**
>*   [Live preview](#live-preview)
>*   [User stories](#user-stories)
>*   [Tech stack](#tech-stack)
>*   [Screenshots](#screenshots)
>*   [Install and run](#install-and-run)

## Live preview

Check out the live deployment hosted on Vercel: [vremea.vercel.app](https://vremea.vercel.app).

## User stories

Quoted from the devChallenges.io:
-  I can see city weather as default, preferably my current location
-  I can search for a city
-  I can see weather of today and the next 5 days
-  I can see the date and location of the weather
-  I can see the corresponding images for each type of weather
-  I can see the min and max degree each day
-  I can see wind status and wind direction
-  I can see humidity percentage
-  I can see a visibility indicator
-  I can see the air pressure number
-  I can request my current location weather
-  I can convert temperature in Celsius to Fahrenheit and vice versa

Extra functionality I decided to add:
-  Replaced first user story and instead **created small 'onboarding' experience** instead of directly fetching current location
-  **Two themes** - dark or light mode, by using `prefers-color-scheme`
-  **Internationalization** - created strings for three languages: `DE`, `EN`, `RO`, based on the users' navigator language
-  tiny animations - sliding location search, close button

## Tech stack

I built this using the following:
-  **React.js** with **context** for location, weather, and ui preferences
-  CSS-in-JS - **styled-components**
-  CORS proxy - created and deployed my own **CORS proxy server** based on [cors-anywhere](https://github.com/Rob--W/cors-anywhere/)

## Screenshots

* Onboarding (desktop)

    ![Two themes](screenshots/onboarding.png)

* Two themes based on user preference (desktop)

    ![Two themes](screenshots/desktop.png)

* Responsive layout and 3 languages supported (mobile)

    ![Two themes](screenshots/mobile.png)

## Install and run

1. Get the code:

    ```
    git clone https://github.com/nosthrillz/redux-counter.git
    ```

2. Install dependencies:

    ```
    npm i
    ```
    OR

    ```
    yarn i
    ```

3. Add an environment variable to `.env.local`, that points to a CORS-proxy server:

    ```
    REACT_APP_PROXY_URL=https://YOUR_CORS_PROXY_URL.com
    ```
    > Note: For preview purposes, you can use the [cors-anywhere demo](https://cors-anywhere.herokuapp.com/corsdemo).<br>
    > Once you've requested access, add the `https://cors-anywhere.herokuapp.com` url to the `.env.local` file, and you're ready to go.

3. Run the app:

    ```
    npm start
    ```
    OR

    ```
    yarn start
    ```