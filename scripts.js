const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)



fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = post.title

            const p = document.createElement('p')
            post.body = post.body.substring(0, 300)
            p.textContent = `${post.body}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        });
    })
    .catch(error => console.error(error));



// //create a request var and assign a new XMLHttpRequest object to it
// var request = new XMLHttpRequest();

// //open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


// request.onload = function () {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.response)

//     if (request.status >= 200 && request.status < 400) {
//         data.forEach((posts) => {
//           const card = document.createElement('div')
//           card.setAttribute('class', 'card')
    
//           const h1 = document.createElement('h1')
//           h1.textContent = posts.title
    
//           const p = document.createElement('p')
//           p.textContent = posts.body
    
//           container.appendChild(card)
//           card.appendChild(h1)
//           card.appendChild(p)
//         })
//       } else {
//         const errorMessage = document.createElement('marquee')
//         errorMessage.textContent = `Gah, it's not working!`
//         app.appendChild(errorMessage)
//       }
// }

//send request
//request.send();


