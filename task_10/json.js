let button = document.getElementById("btn");
let image = document.getElementsByClassName("imgloc");

button.addEventListener("click", ()=>{
    for( let i=0;i<image.length;i++){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => {
            image[i].src = data.url;
        })
    }
})














// let button = document.getElementById("btn");
// let image = document.getElementsByClassName("imgloc");
// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(res => res.json())
//   .then(result => {

//     let tableHTML = `
//       <table border="1">
//         <tr>
//           <th>Album ID</th>
//           <th>ID</th>
//           <th>Title</th>
//           <th>URL</th>
//           <th>ThumbnilUrl</th>
//         </tr>
//     `;

//     result.forEach(item => {
//       tableHTML += `
//         <tr>
//           <td>${item.albumId}</td>
//           <td>${item.id}</td>
//           <td>${item.title}</td>
//           <td>${item.url}</td>
//           <td>${item.thumbnailUrl}</td>
//         </tr>
//       `;
//     });

//     tableHTML += `</table>`;

//     document.getElementById("table").innerHTML = tableHTML;
//   });