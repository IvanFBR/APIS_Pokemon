# APIS_Pokemon

### 📚₊˚✩ Description
 
This project was built using Angular 19 and integrates a Pokémon API to retrieve data, images, and detailed information about each Pokémon, including their types, stats, abilities, and more.
_______

The project begins with the creation of a home component. In the HTML section of this component, a welcoming interface is designed featuring the Pokémon logo, a Pikachu-themed background, and a button. When clicked, this button navigates the user to the lista-pokemones (Pokémon list) component.

In this list component, the same background is maintained, but instead of the welcome screen, a page filled with Pokémon cards is displayed. These cards are built using Bootstrap, and each includes a Pokémon image (sourced from a game) along with the corresponding name. At the bottom of the page, there are two navigation buttons: "Previous" and "Next". These buttons allow users to move through the pages. Clicking "Next" loads the next 20 Pokémon from the API, updating their names and images, while "Previous" goes back to the previous 20 Pokémon.

Between these two buttons, a dynamic text display shows the current page number. As users navigate forward or backward, the counter updates accordingly and also displays the total number of available pages. Lastly, there's a button that redirects the user back to the home component, where the welcome screen is shown again, along with background Pokémon music.

When a user clicks on any Pokémon card, they are directed to the detalle-pokemon (Pokémon detail) component. This component displays a well-organized table (styled with Bootstrap) that presents detailed information about the selected Pokémon, such as its name, type(s), stats, moves, and an animated image using animate.css. Within this component, there is also a button that redirects back to the Pokémon list. The page number from which the Pokémon was selected is preserved, so the user returns to the same page they were on.
