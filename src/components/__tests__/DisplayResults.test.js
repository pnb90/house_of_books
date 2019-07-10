import React from 'react';
import { render } from '@testing-library/react'
import DisplayResults from '../DisplayResults'
import mockAxios from 'axios'

describe('DisplayResults component', () => {
  it('renders as expected', () => {
     const { asFragment } = render(<DisplayResults />)
     expect(asFragment()).toMatchSnapshot()
   })

   it('displays appropriate message for totalItems = 0', () => {
      const { queryByText } = render(<DisplayResults 
         totalItems = {0}
      />)
      
      expect(queryByText("Oh no - 0 search results. Try another search")).toBeTruthy()
      expect(queryByText("Oh no - 0 search results. Try another search")).not.toBeFalsy()
   })

   it('displays 0 cards when totalItems is 0', () => {
      const { queryByTestId } = render(<DisplayResults 
         totalItems = {0}
      />)
      
      expect(queryByTestId("card testID")).toBeFalsy()
   })

   it('does not show the 0 search results message when there are totalItems> 0', () => {
      const { queryByText } = render(<DisplayResults 
         totalItems = {3}
      />)
         
      expect(queryByText("Oh no - 0 search results. Try another search")).toBeNull()
   })

   describe('Cards within the DisplayResults', () => {
      let book1 = {
         id: 1,
         volumeInfo: {
            imageLinks: {
               thumbnail: "https://firstbookcover.com/"
            },
            infoLink: "https://firstbook.com/",
            title: "First Book",
            publisher: "First Publisher",
            authors: "First Author"
         }
      }

      let book2 = {
         id: 2,
         volumeInfo: {
            imageLinks: {
               thumbnail: "https://secondbookcover.com/"
            },
            infoLink: "https://secondbook.com/",
            title: "Second Book",
            publisher: "Second Publisher",
            authors: "Second Author"
         }
      }

      let book3 = {
         id: 3,
         volumeInfo: {
            imageLinks: {
               thumbnail: "https://thirdbookcover.com/"
            },
            infoLink: "https://thirdbook.com/",
            title: "Third Book",
            publisher: "Third Publisher",
            authors: "Third Author"
         }
      }
      let library = [book1, book2, book3]


      it('populates 3 cards', () => {
         const { queryAllByTestId } = render(<DisplayResults
            books = {library} 
         />)
         
         expect(queryAllByTestId('card testID').length).not.toEqual(0)
         expect(queryAllByTestId('card testID').length).toEqual(3)
      })

      describe('renders book1 properly', () => {
         it('renders book1 title properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)
            expect(getByText('First Book')).toBeTruthy()
         })

         it('renders book1 publisher properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)
            expect(getByText('Publisher: First Publisher')).toBeTruthy()
         })

         it('renders book1 author properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)

            expect(getByText('By: First Author')).toBeTruthy()
         })

         it('renders book1 img src properly', () => {
            const { getAllByRole } = render(<DisplayResults
            books = {library}  
            />)
            expect(getAllByRole('img')[0].src).toBe("https://firstbookcover.com/")
         })
      })

      describe('renders book2 properly', () => {
         it('renders book2 title properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)
            expect(getByText('Second Book')).toBeTruthy()
         })

         it('renders book2 publisher properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)
            expect(getByText('Publisher: Second Publisher')).toBeTruthy()
         })

         it('renders book2 author properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)

            expect(getByText('By: Second Author')).toBeTruthy()
         })

         it('renders book2 img src properly', () => {
            const { getAllByRole } = render(<DisplayResults
            books = {library}  
            />)
            expect(getAllByRole('img')[1].src).toBe("https://secondbookcover.com/")
         })
      })

      describe('renders book3 properly', () => {
         it('renders book3 title properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)
            expect(getByText('Third Book')).toBeTruthy()
         })

         it('renders book3 publisher properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)
            expect(getByText('Publisher: Third Publisher')).toBeTruthy()
         })

         it('renders book3 author properly', () => {
            const { getByText } = render(<DisplayResults
            books = {library}  
            />)

            expect(getByText('By: Third Author')).toBeTruthy()
         })

         it('renders book3 img src properly', () => {
            const { getAllByRole } = render(<DisplayResults
            books = {library}  
            />)
            expect(getAllByRole('img')[2].src).toBe("https://thirdbookcover.com/")
         })
      })

      describe('card defaults in case of missing data', () => {
         let badBook = {
            id: 4,
            volumeInfo: {
               infoLink: "https://fourthbook.com/",
               title: "Fourth Book"
            }
         }

         let library = [badBook]
         
         it('it renders N/A for publisher', () => {
            const { getByText } = render(<DisplayResults 
               books = {library}
            />)
            expect(getByText("Publisher: N/A")).toBeTruthy()
         })

         it('it renders N/A for author', () => {
            const { getByText } = render(<DisplayResults 
               books = {library}
            />)
            expect(getByText("By: N/A")).toBeTruthy()
         })

         it('it renders N/A for publisher', () => {
            const { getByRole } = render(<DisplayResults 
               books = {library}
            />)
            expect(getByRole('img').src).toBe("https://images-na.ssl-images-amazon.com/images/I/91GQ%2BOWqgHL._SX425_.jpg")
         })
      })
   })
   describe("displayResults only shows active cards", () => {
      it("prior search results are no longer visible after a new search is conducted", () => {
         let books = (mockAxios.get("The Sympathizer")).items
         const { getByText, queryByText, getAllByTestId, rerender } = render(<DisplayResults books = {books}/>)
         expect(getAllByTestId("displayContainer testID").length).toBe(1)
         expect(queryByText("Gone Girl")).not.toBeTruthy()
         expect(queryByText("Gone Girl")).toBeFalsy()
         expect(getByText("The Sympathizer")).not.toBeFalsy()
         expect(getByText("The Sympathizer")).toBeTruthy()
         expect(getAllByTestId("card testID").length).toBe(3)
 
         books = (mockAxios.get("Gone Girl")).items
         rerender(<DisplayResults books = {books}/>)
         
         expect(getAllByTestId("displayContainer testID").length).toBe(1)
         expect(getByText("Gone Girl")).not.toBeFalsy()
         expect(getByText("Gone Girl")).toBeTruthy()
         expect(queryByText("The Sympathizer")).not.toBeTruthy()
         expect(queryByText("The Sympathizer")).toBeFalsy()
         expect(getAllByTestId("card testID").length).toBe(3)
    })})   
   })

