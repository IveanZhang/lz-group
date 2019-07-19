const id = window.location.search.split("=")[1];
const url = 'http://edudemo3.happyneg.net/articles/' + id;

// Make a request
axios.get(url)
  .then(function (response) {

    const data = response.data;
    const title = document.getElementById("article-title");
    const img = document.getElementById("article-img");
    const content = document.getElementById("article-content");

    title.innerHTML = data.title;
    img.src = "http://edudemo3.happyneg.net" + data.img.url;

    console.log(data.img.url);

    data.content.split("\n").map((p) => {
      content.innerHTML += `<p>${p}</p>`;
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
