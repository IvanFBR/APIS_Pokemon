# APIS_Pokemon
 
This project was built using Angular 19 and integrates a Pokémon API to retrieve data, images, and detailed information about each Pokémon, including their types, stats, abilities, and more.

The project begins with the creation of a home component. In the HTML section of this component, we designed a welcoming interface that features the Pokémon logo, a Pikachu-themed background, and a button. When this button is clicked, it navigates the user to the lista-pokemones (Pokémon list) component.

In this list component, we keep the same background, but instead of a welcome screen, we display a page filled with Pokémon cards built using Bootstrap. Each card includes a Pokémon image (sourced from a game) and the corresponding name. At the bottom of the page, there are two navigation buttons: "Previous" and "Next". These buttons allow the user to navigate through the pages — clicking "Next" loads the next 20 Pokémon from the API, updating their names and images, while "Previous" returns to the previous 20 Pokémon.

Between these two buttons, there's a text display showing the current page number. As users navigate forward or backward, this counter updates dynamically and also displays the total number of available pages. Lastly, there's a button that redirects the user back to the home component, where the welcome screen is displayed again along with background Pokémon music playing.

When clicking on any Pokémon card, the user is directed to the detalle-pokemon (Pokémon detail) component. This component displays a well-organized Bootstrap table that shows detailed information about the selected Pokémon, such as its name, type(s), stats, moves, and an animated image using animate.css. Within this component, there is also a button that redirects back to the Pokémon list. The page number from which the Pokémon was selected is preserved, so the user returns to the same page they came from.
