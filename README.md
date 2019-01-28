# Nasa Asset Search

- I couldn't find any pagination options on the NASA Image API documentation (I tried the usuals such as size, limit, offset etc). If these options were available, I would have limited the results to around 25 to improve performance, and allow the user to paginate through the results. I debated writing a small API to allow me to do this, which would sit in the middle of my client and NASA's API, but then I wouldn't be able to deploy so easily on services such as Netlify or GH Pages, so I decided against it.
- Given more time, I would have made the design a bit more vibrant, and used more colours.
- I also wanted to add some skeleton screen-like loaders to appear while each of the items in the grid system were loading. This would give a better impression of performance on the app.

