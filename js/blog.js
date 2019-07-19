const renderArticles = (article) => {
    const item = document.querySelector(".section .container .row");
    const img = article.img ? `<img src='http://edudemo3.happyneg.net${article.img.url}' alt='blog thumb'>` : '';
    const newItem = 
    `
    <div class="col-lg-4 mb-5">
    	<div class="media d-block media-custom text-center">
            <a href="blog-detail.html?id=${article.id}">
            	${img}
            <div class="media-body">
                <div class="blog-title">
                    <h3>${article.title}</h3>
                </div>
            </div>
            </a>
        </div>
    </div>    
    `;
    item.innerHTML += newItem;
}

const url = 'http://edudemo3.happyneg.net/articles/';
// Make a request
axios.get(url).then(function(response) {
    response.data.map((item) => {
        renderArticles(item);
    });
}).catch(function(error) {
    // handle error
    console.log(error);
}).finally(function() {
    // always executed
});