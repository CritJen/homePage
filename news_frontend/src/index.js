document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("article-container")
  const articlesList = document.getElementById("articles-list")
  // const topicButtons = document.getElementsByClassName('topic-btn')
  const navBar = document.getElementById("navbar")


  const endPoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3254c2603cad4a0aae7cf5b75a9c2e33&pageSize=10';
   fetch(endPoint).then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
     let li = createArticle(article)
     articlesList.appendChild(li)
   }));

   function createArticle(article){
     let li = document.createElement('li');
     let h4 = document.createElement('h4')
     let btn = document.createElement('button');
     let p = document.createElement('p');
     let btn2 = document.createElement('a');
     btn2.href = article.url

     h4.innerText = article.title;
     btn.innerText = "Read more";
     btn2.innerText = "Read full article";
     p.innerText = article.description
     p.hidden = true;

     li.append(h4, btn, p);
     p.appendChild(btn2);

     btn.addEventListener('click', ev => {
       p.hidden = !p.hidden;
      btn.innerText === "Read more" ? btn.innerText = "Read less" : btn.innerText = "Read more" });

      return li
   };

   navBar.addEventListener('click', ev => {
    while(container.hasChildNodes()){
      container.removeChild(container.firstChild)
    }
     categorySearch(ev.target.innerText)
   });

    // fetch(endPoint + "&catefory=business").then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
    //   let li = createArticle(article)
    //   businessList.appendChild(li)
    // }));


    function categorySearch(category){
      let h2 = document.createElement('h2')
      h2.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} News`
      let ul = document.createElement('ul');
      container.appendChild(h2)
      h2.appendChild(ul)
      debugger
      fetch(endPoint + `&category=${category}`).then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
        let li = createArticle(article)
        ul.appendChild(li)
      }));
    }


});
