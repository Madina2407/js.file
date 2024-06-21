const movies = [
    {   
        image_url: "https://m.media-amazon.com/images/I/61GHTGONEOL._SL1200_.jpg",
        id: 1,
        title: "The Power of Broke",
        genre: "success",
        releaseYear: 2019,
},
{
    image_url: "https://images-na.ssl-images-amazon.com/images/I/41waon75LwL.jpg",
    id: 2,
    title: "The 7 Keys to Success",
    genre: "success",
    releaseYear: 2019,
    cost: "$15"
},
{
    image_url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781637350379/habits-of-success-9781637350379_hr.jpg",
    id: 3,
    title: "Habits of Success",
    genre: "success",
    releaseYear: 2017,
},
{
    image_url: "https://m.media-amazon.com/images/I/41LCrqCPPNL.jpg",
    id: 4,
    title: "The Power of the Will or Success",
    genre: "success",
    releaseYear: 2011,
},
{
    image_url: "https://www.adazing.com/wp-content/uploads/2019/03/51iAx7x3HLL.jpg",
    id: 5,
    title: "Before We Were Yours",
    genre: "drama",
    releaseYear: 1996,
},
{
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGl2ivtRuvlWXrMhFz6kH8c3B-7SaGF29ag&usqp=CAU",
    id: 6,
    title: "Titanic",
    genre: "drama",
    releaseYear: 1924,
},
{
    image_url: "https://upload.wikimedia.org/wikipedia/en/8/87/TLF.cover.jpg",
    id: 7,
    title: "The Light Fantastic Terry Pratchet",
    author: " Terry Pratchett",
    genre: "fantastic",
    releaseYear: 2019,
},
{
    image_url: "https://cherwellenglish.typepad.com/.a/6a010536cc9cb4970c017d3fffd88d970c-600wi",
    id: 8,
    title: "Roald Dahi",
    author: "Quentin Blake",
    genre: "fantastic",
    releaseYear: 2009,
},
{
    image_url: "https://miro.medium.com/v2/resize:fit:350/1*QQfHNm7dk61EovkGaa45nQ.jpeg",
    id: 9,
    title: "The light Fantastic",
    author: "Terry Pratchet",
    genre: "fantastic",
    releaseYear: 2013,
},
{
    image_url: "https://www.rd.com/wp-content/uploads/2020/12/21salems-lot-via-amazon.jpg?w=700",
    id: 10,
    title: "Stephen King Salem's LOT",
    author: "digger",
    genre: "horror",
    releaseYear: 2009,
},
{
    image_url: "https://mysticbooks.org/thumbs/image/book/the-legend-of-sleepy-hollow.webp",
    id: 11,
    title: "Sleepy Hollow",
    author: "Padraic Maroney",
    genre: "horror",
    releaseYear: 2013,
},
{
    image_url: "https://m.media-amazon.com/images/I/51hCcTeVBdL._SL1360_.jpg",
    id: 12,
    title: "It all began with a SCREAM",
    author: "Padraic Maroney",
    genre: "horror",
    releaseYear: 2014,
},
{
    image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588._UX160_.jpg",
    id: 13,
    title: "The Shining",
    author: "Stephen King",
    genre: "horror",
    releaseYear: 1998,
},
{
    image_url: "",
    id: 14,
    title: "",
    genre: "",
    releaseYear: 2019,
},
{
    image_url: "",
    id: 15,
    title: "",
    genre: "",
    releaseYear: 2019,
},
{
    image_url: "",
    id: 16,
    title: "",
    genre: "",
    releaseYear: 2019,
},
{
    image_url: "",
    id: 17,
    title: "",
    genre: "",
    releaseYear: 2019,
},
{
    image_url: "",
    id: 18,
    title: "",
    genre: "",
    releaseYear: 2019,
},
{
    image_url: "",
    id: 19,
    title: "",
    genre: "",
    releaseYear: 2019,
},
{
    image_url: "",
    id: 20,
    title: "",
    genre: "",
    releaseYear: 2019,
}
]

function renderProducts(productList) {
    const userListElement = document.getElementById('product-list');
    userListElement.innerHTML = "";

    productList.forEach(({ id, image_url, title, author, genre, releaseYear }) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
           


               <div class=" rightSide">
               <div class="books">
                    
                      <div class="imagesContainer">
                            <img class="imgBooks" src="${image_url}">
                            <p>${id}</p>
                            <h2>${title}</h2>
                            <h4>Author: ${author}</h4>
                            <h4>Genre: ${genre}</h4>
                            <h4> ${releaseYear}</h4>
                      </div>
                </div>
               </div>
        </div>


   </div>


        `;

        userListElement.appendChild(productCard);
    });
}

renderProducts(movies);