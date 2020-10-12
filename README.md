Assignment 4 - Components
===

Due: October 9th, by 11:59 PM.

For this assignment you will re-implement the client side portion of A3 using either React or Svelte components.

This project can be implemented on any hosting service (Glitch, DigitalOcean, Heroku etc.), however, you must include all files in your GitHub repo so that the course staff can view them; these files are not available for viewing in many hosting systems.

Deliverables
---

Do the following to complete this assignment:

1. Implement your project with the above requirements.
3. Test your project to make sure that when someone goes to your main page on Glitch/Heroku/etc., it displays correctly.
4. Ensure that your project has the proper naming scheme `a4-firstname-lastname` so we can find it.
5. Fork this repository and modify the README to the specifications below. Be sure to add *all* project files.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a4-firstname-lastname`.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## Shopping List

Luke Bodwell

https://a4-luke-bodwell.herokuapp.com/

For this project I rewrote the frontend of A3 using React. This was my first time really using a frontend framework for a non-trivial project.
It was definitely a bit cumbersome at first and I didn't really see a ton of benefits on this project but I can see how useful it would be for very
large-scale projects. State management in React took me a while to get the hang of but is ultimately very useful. I ran into some issues with routing
and authentication especially when using the development server provided by create-react-app. I ended up making some pretty hacky fixes that would have
required re-writing a large portion of the backend to implement properly. The library I used for Bootstrap support in React also seemed to be a bit finnicky.
The styling of the page turned out different from A3 despite using the same CSS. Heroku also gave me some trouble with installing client dependencies and
building the React application when it's deployed. I ended up figuring it out and learned a lot working on this project. I will definitely be experimenting
more with React and other frontend frameworks on future projects.