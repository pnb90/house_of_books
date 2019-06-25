# House of Books

House of Books is a simple app that allows a user to query the Google Books API. Results are displayed as small cards with overlays, with more information available upon click.

## Getting Started

Once forked, cd into folder and run 

```
npm install
```

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Usage
Users are presented with a blank page ready to be filled with books.

Once ready, users can type in a book title, author, or any search term to look for books:
  <img src="http://www.giphy.com/gifs/jtEe0Hv2FvyjmObYrz" alt="a gif showing book search">

Results will display their bookcovers in the box below, which users can then scroll over to find out more information, including title, author, and publisher.

If no results exist, then users will be notified. Additionally, if there are no provided authors or publishers, "N/A" will replace the requisite text.


## Testing

Tests were created with Jest and Enzyme. 

That being said, testing is currently incomplete. As a newer user of React, my goal was to first and foremost complete the project. Any excess time leftover would then be dedicated to testing, which would be a large undertaking in itself, as I would have to learn how to develop tests using new React specific tools.  

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

Thank you to all the insane amount of internet resources I utilized!