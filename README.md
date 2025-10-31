# Web Development Project 5 - Recipe Dashboard

Submitted by: **Surya Varun Kolachana**

This web app: **A recipe dashboard that displays various recipes with search and filter functionality**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays 10 unique recipe items, one per row
  - Each recipe row includes: image, title, preparation time, servings, health score, and diet tags
- [x] **`useEffect` React hook and `async`/`await` are used**
  - The app uses async/await for data handling (simulated API call)
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - Total number of recipes
  - Average preparation time
  - Number of vegetarian recipes
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar correctly filters recipes by name
  - The list dynamically updates as the user types
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The diet filter restricts items by diet type (different from search)
  - The filter correctly filters recipes by diet category
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
  - Search and diet filters work together
- [x] Filters use different input types
  - Search uses text input, diet filter uses dropdown

The following **additional** features are implemented:

* [x] Responsive design that works on mobile and desktop
* [x] Attractive UI with hover effects and smooth transitions
* [x] Health score indicator for each recipe
* [x] Visual diet tags for each recipe

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/)

## Notes

Challenges encountered while building the app:
- Simulating API data since Spoonacular requires an API key
- Ensuring filters work together correctly (search + diet filter)
- Creating a responsive design that works well on all screen sizes

## Setup Instructions

1. Download all files to a folder
2. Open the folder in VS Code
3. Install the "Live Server" extension if not already installed
4. Right-click on `index.html` and select "Open with Live Server"
5. The app will open in your default browser

## License

    Copyright 2025 Surya Varun Kolachana

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.