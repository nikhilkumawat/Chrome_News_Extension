// http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7a553c96880846e7b40d336aae6d021e
const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=7a553c96880846e7b40d336aae6d021e"; 

fetch(url)
    .then(data => data.json())
    .then(fetchJSONData=>{
        const fetchStatus = fetchJSONData.status;

        if(fetchStatus == "ok"){
            let fetchTotalResult = fetchJSONData.totalResults;

            var mediaData; 
            mediaData = '';

            for(var i = 0; i < fetchJSONData.articles.length; i++){

                let articleImageUrl = fetchJSONData.articles[i].urlToImage;
                let articleTitle = fetchJSONData.articles[i].title;
                let articleDescription = fetchJSONData.articles[i].description;
                let articleUrl = fetchJSONData.articles[i].url;
                let articleSourceName = fetchJSONData.articles[i].source.name;

                mediaData += `<div class="card square scrollbar-dusty-grass square thin" style="width: 18rem;">`;
                
                mediaData += `<img class="card-img-top" src="${articleImageUrl}" alt="Card image cap">`;

                mediaData += `<div class="card-body">`;
                mediaData += `<h5 class="card-title">${articleTitle}</h5>`;
                mediaData += `<p class="card-text">${articleDescription}</p>`;
                mediaData += `<a href="${articleUrl}" target="_blank"><small class="badge badge-dark">${articleSourceName}</small></a>`;
                
                mediaData += `</div>`;
                
            
                mediaData += `</div>`;
            }

            

            let articleContentId = document.getElementById("articleContent");
            articleContentId.innerHTML = mediaData;

        }

        
    })

