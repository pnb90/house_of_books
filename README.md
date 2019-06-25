# House of Books

House of Books is a simple app that allows users to query the Google Books API. Results are delivered as small cards with overlays, with more information available upon clicking the "More Info" button.

### Installing
Once cloned by running

```
git clone https://github.com/pnb90/house_of_books.git
```

cd into "house_of_books" and run 

```
npm install
```

This will install the necessary elements to begin the app. After that process is completed, you can then enter

```
npm start
```

This command will start the app on localhost:3000/, where it is ready to use! Enjoy!

## Usage
Users are presented with a blank page ready to be filled with books.

Once ready, users can type in a book's title, author, or any search term to look for books.
  ![Gif House of Book's search feature]
  (https://media.giphy.com/media/YSeTvY26YBwBY53Xlp/giphy.gif)

Results will display their book covers in the box below. Users can then scroll over each book cover to find out more information, including title, author, and publisher.

Clicking on the "More Info" button on the overlay will allow a user to see a description of the book as well as an external link to Google Books.
  ![Gif House of Book's results, overlay, and modal]
  (https://media.giphy.com/media/dvyIpITSA6iIDG1B8v/giphy.gif)
  
If no results exist, then users will be notified. 
  ![Image of no results]
  (./assets/images/NoResults.png)
  
Additionally, if there are no provided authors or publishers, "N/A" will replace the missing information.
  ![Image of no results]
  (./assets/images/MissingPublisher.png)


## Testing
Tests were created with Jest and Enzyme and can be run using

```
npm test
```

That being said, testing is currently incomplete. See more information in the Challenges section.

##Goals
  - Accomplish all tasks given
  - Try to tackle CSS from scratch, if possible.
  - Include animations and design

I believe I was able to complete my understanding of the challenge, which was rewarding given I had limited experience in React previously. 

I was able to mostly accomplish CSS from scratch with the help of [Styled-Components](https://www.styled-components.com/) and a fair amount of tutorials, with exception of the Dialog component. My thought was it was better to move forward with something that did work, that I can improve later, than present something that did not function.

##Challenges
  - Integrating several new elements based on an elementary understanding of React.
  - Styling
  - Website Design/Animations
  - Testing
  - Known Unknowns and Unknown Unknowns

I pushed myself to not rely on Bootstrap or other premade components because I wanted to learn more about styling and frontend design. This proved to be both highly educational, but stressful, as I severely underestimated the amount of time necessary to learning.  

Design, styling, and animations are taken for granted. It is easy to recognize when a website is not aesthetically pleasing, or not intuitive to use, but it is difficult to create a website that meet those criteria without training. That being said, there are several helpful tools that guided me towards an acceptable goal.

Testing was near the forefront of my mind when planning the project as I knew that 8th Light employs TDD. However, as a newer user of React, my goal was to first and foremost complete the project. Any excess time leftover would then be dedicated to testing, which would be a large undertaking in itself.

While it would have been ideal to implement testing from the beginning to follow TDD standards, but given the project and level of experience, I did not want to submit an incomplete project. An attempt was made. 

##Icebox
  - Testing
  - Smoother and better animations
  - Vetted for accessibility

If given more time, I would like to learn much, much more about implementing testing into House of Books and TDD best practices in general.

Currently, the animation that displays the book's title, authors, and publisher, grows and then shrinks. Oftentimes, the wordwrap will also change during this grow and shrink process, which can be not aesthetically pleasing.

I was able to attend a talk about an 8th Light employee regarding accessibility, which piqued my interest about accessibility for all users. I have not had the opportunity to ensure that my app is accessible.

## Built With

* [React ](https://reactjs.org/) - Frontend Framework
* [Material UI](https://material-ui.com/) - React Framework based on Material Design
* [Enzyme](https://github.com/airbnb/enzyme) - Javascript testing utilities
* [Jest](https://jestjs.io/) - testing framework
* [Axios](https://github.com/axios/axios) - used to make the Google Books API call
* [Styled-Components](https://www.styled-components.com/) - CSS styling for the entire app.
* [Jest](https://jestjs.io/) - Javascript Testing Framework
* [Enzyme](https://airbnb.io/enzyme/) - JavaScript Testing utility for React

## Authors

* **Phuoc Bui** - [pnb90](https://github.com/pnb90)

## Acknowledgments

Thank you to all the insanely helpful online resources I was able to use! 