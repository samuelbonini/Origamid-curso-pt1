// fetch('./dados.json')
// .then (r => r.json())
// .then (json => {
//   json.forEach(materia => {
//     console.log(materia.aula)
//   })
// })

fetch('./dados.json')
.then (r => r.text())
.then (jsonText => {
 const jsonFinal = JSON.parse(jsonText);
 console.log(jsonFinal)
  });


  const config = {
    player: "google",
    tempo: 25.5,
    aula: "2.1 javascript",
  }

localStorage.config = JSON.stringify(config)
