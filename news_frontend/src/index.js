document.addEventListener('DOMContentLoaded', () => {
  articlesList = document.getElementById("articles-list")
  const endPoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=52e60612489545a186416364f8191dea';
   fetch(endPoint).then(resp => resp.json()).then(stories => stories.articles.forEach(article => {
     createArticle(article)
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
     articlesList.appendChild(li);

     btn.addEventListener('click', ev => {
       p.hidden = !p.hidden;
      btn.innerText === "Read more" ? btn.innerText = "Read less" : btn.innerText = "Read more" })
   };




});
