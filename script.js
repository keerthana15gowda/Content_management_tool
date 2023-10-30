<script>
    function createBlog() {
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;
        var image = document.getElementById('image').value;
        var video = document.getElementById('video').value;

        var blogContainer = document.getElementById('blogContainer');
        var blogElement = document.createElement('div');
        blogElement.innerHTML = `
            <div class="card">
                ${image ? `<img class="card-img-top" src="${image}" alt="Card image cap">` : ''}
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                    ${video ? `<iframe width="100%" height="315" src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ''}
                </div>
            </div>
            <hr>
        `;
        blogContainer.appendChild(blogElement);
    }
</script>
