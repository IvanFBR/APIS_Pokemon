# APIS_Pokemon

### 📚₊˚✩ Description
 ___
In this project, I proudly present my very own Pokémon-themed web page!
You can browse Pokémon by their official number, view their names, and—if you're curious—explore detailed information about each one. All components are fully responsive, so feel free to navigate the site from any device you prefer!
 
### 🌱₊˚✩ Explication
____
#### 🏠 *·.༄࿔ Home Screen*

The project begins with the creation of a home component. In the HTML section of this component, a welcoming interface is designed featuring the Pokémon logo, a background inspired by the Pokémon Black and White games, and a button. When clicked, this button navigates the user to the lista-pokemones (Pokémon list) component.

![image](https://github.com/user-attachments/assets/8b0cc6a8-6677-4308-9283-75c9fa9fb0c7)

#### 📙*·.༄࿔ Pokemon list*

In this list component, the background has been updated to feature a view inspired by the Pokémon games. Instead of the welcome screen, the page displays a grid of Pokémon sprites. When you hover over a sprite, a subtle animation is triggered, causing the sprite to slightly lift. Clicking on a Pokémon sprite will navigate the user to the detalle-pokemon component, where detailed information about that Pokémon is displayed.

At the bottom of the page, two arrow buttons are provided for navigation. When clicked, these arrows trigger a smooth animation within the box, updating the displayed content. The text "Box 1" (used as an example) is dynamically updated to reflect the current page in a pagination style. Each time an arrow button is clicked, the box number changes, and 31 Pokémon images are loaded from the API.

A button is also included to redirect the user back to the home component, where the welcome screen is shown again, along with background Pokémon music.

![image](https://github.com/user-attachments/assets/705152e9-84c6-4bbb-88be-e3417664952b)
![image](https://github.com/user-attachments/assets/6370d036-2b81-4b97-af92-4aa187b62f07)


#### ✏️*·.༄࿔ Pokémon details*

When a user clicks on any Pokémon image, they are directed to the detalle-pokemon (Pokémon detail) component. This component presents a well-organized interface inspired by the Pokémon games, displaying detailed information about the selected Pokémon, such as its name, type(s), stats, moves, and more. The design uses the iconic Pokémon font, enhancing the theme. Additionally, the Pokémon's image, stats, and moves are animated, providing a dynamic and engaging experience.

Within this component, there is also a button that redirects the user back to the Pokémon list. The page number from which the Pokémon was selected is preserved, so the user returns to the same page they were on.

![image](https://github.com/user-attachments/assets/a39ad4a9-a1f3-49eb-8ec8-c06653700170)

### ⚠️₊˚✩ NOTES

This project was built with Angular, so don't forget to run: 
```npm install```
before launching the application!
