document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("article-container")
  const articlesList = document.getElementById("article-section")
  // const topicButtons = document.getElementsByClassName('topic-btn')
  const navBar = document.getElementById("#navbar-collapse-1");
  const section = document.getElementById("section")


  const endPoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3254c2603cad4a0aae7cf5b75a9c2e33&pageSize=10';
   fetch(endPoint).then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
     createArticle(article, "Top Stories")
   }));

   function createArticle(article, category){
     let markup = `
     <div class="category_article_wrapper">
       <div class="row">
           <div class="col-md-5">
               <div class="top_article_img">
                       <img class="img-responsive" src="${article.urlToImage}" alt="feature-top">
                   </a>
               </div>
               <!-- top_article_img -->

           </div>
           <div class="col-md-7">
               <span class="tag purple">${category}</span>

               <div class="category_article_title">
                   <h2><a href="${article.url}" target="_self">${article.title} </a></h2>
               </div>
               <div class="category_article_content">
                   ${article.description}
               </div>
               <div id="content" class="category_article_content" hidden=true>
                   ${article.content}
               </div>
               <!----category_article_content------>
               // <div class="media_social">
               //     <span><a href="#" onclick=readMore()><i class="fa fa-share-alt"></i>Read More </a> </span>
               //     <span><i class="fa fa-comments-o"></i><a href="${article.url}">Go to ${article.source.name}</a> </span>
               // </div>
              </div>
            </div>
          </div>`;
          articlesList.innerHTML += markup;


      }
    // let btn = docu
    //  btn.addEventListener('click', ev => {
    //    p.hidden = !p.hidden;
    //   btn.innerText === "Read more" ? btn.innerText = "Read less" : btn.innerText = "Read more" });

     //  return li
   // };

   navBar.addEventListener('click', ev => {
     articlesList.innerHTML = " "
     categorySearch(ev.target.innerText)
   });
    //
    // fetch(endPoint + "&catefory=business").then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
    //   let li = createArticle(article)
    //   businessList.appendChild(li)
    // }));


    function categorySearch(category){
      section.innerText = `${category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}`

      // let h2 = document.createElement('h2')
      // h2.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} News`
      // let ul = document.createElement('ul');
      // container.appendChild(h2)
      // h2.appendChild(ul)
      fetch(endPoint + `&category=${category}`).then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
        createArticle(article, category)
      }));
    }


});
