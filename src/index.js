const init = () => {
  
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = event.target.children[1].value

      console.log(input)
  

  fetch(`http://localhost:3000/movies/${input}`)
  .then(res => res.json())
  .then(data => {
      const title = (document.querySelector('#movieTitle'));
      const summary = (document.querySelector('#movieSummary'));

      title.innerText = data.title;
      summary.innerText = data.summary;

  })
})


}

document.addEventListener('DOMContentLoaded', init);