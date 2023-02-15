// * XHR, Fetch API


// * POST
// * user name: Alex

// * GET
// * user name: Alex, id: 12, lastName: Volkov

// * PUT, PATCH
// * user name: Alex, id: 12, lastName: Melnikov

// * DELETE(12)
// * remove user

// * readyState
// * 0 - запрос не инициализирован
// * 1 - запрос инициализирован
// * 2 - заголовки получены
// * 3 - загрузка данных
// * 4 - запрос выполнен

/* let xhr = new XMLHttpRequest();

 xhr.open('GET',  'https://jsonplaceholder.typicode.com/posts', true);
 
 xhr.onreadystatechange - function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(JSON.parse(xhr.responseText));
    }
 } 


 xhr.send();  */
/* 
  fetch('https://jsonplaceholder.typicode.com/hello')
  .then((response) =>{
   
    console.log('==> response', response);
   
    if(response.status === 404){
        
        throw new Error('Такой страницы нет!')
   
    }
   
    return response.json();
  })
  .then((data) => {
   
    return data;
   
    console.log('==>data', data);
  })
  
  .catch((error) => {
   
    console.log(error);
  }); 


  const somePost = {
    postName: 'post'
  }

  fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: somePost
  }) */

/* const posts = [];

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    console.log('response', response);
    return response.json();
})
.then((data) => {
    posts.push(...data)
})

console.log('==> posts', posts);


const somePosts = posts.map((post) => post.id++)
  
console.log('somePosts', somePosts); */


/* async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();    

    posts = data;
    return data;
}

function addId(posts) {
    return posts.map((post) =>{
        return{...post, id: post.id++}
    })
}

getPosts().then(data => {
    console.log(addId(data));
})

console.log('==> posts', posts);
 */


/* async function getPosts() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();    
        return data;
    } catch (error){
        console.error(error);
    }
    
}

getPosts();
 */


async function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(photo => {
            const newElement = document.createElement('div')
            newElement.setAttribute('id', photo.id)
            newElement.classList.add('photo');
            newElement.innerHTML = `
              <img src="${photo.url}"
              <p>${photo.title}</p>
            `;
            document.querySelector('body').appendChild(newElement);
        });
    })
    .catch(error => console.log(error));
}

getPhotos();