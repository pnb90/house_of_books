export default {
    get: jest.fn((searchTerm) => { return { items: 
        [
            {
            id: 1,
            volumeInfo: {
                infoLink: "https://firstbook.com/",
                imageLinks: {
                    thumbnail: "https://firstbookcover.com/"
                },
                title: searchTerm,
                publisher: "First Publisher",
                authors: "First Author"
                }
            },

            {
                id: 2,
                volumeInfo: {
                   imageLinks: {
                      thumbnail: "https://secondbookcover.com/"
                   },
                   infoLink: "https://secondbook.com/",
                   title: searchTerm + "er",
                   publisher: "Second Publisher",
                   authors: "Second Author"
                }
            },
       
            {
                id: 3,
                volumeInfo: {
                   imageLinks: {
                      thumbnail: "https://thirdbookcover.com/"
                   },
                   infoLink: "https://thirdbook.com/",
                   title: searchTerm + "est",
                   publisher: "Third Publisher",
                   authors: "Third Author"
                }
             }
        ]
    }}
    )
}