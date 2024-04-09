async function post_Dados(url = "", data = {}) {

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
    body: JSON.stringify(data)
  };
  
  return await fetch('http://localhost:3000/produto', options)
    .then(response => response.json())
  // Default options are marked with *
  // return await fetch(url, {
  //   method: "POST",
  //   mode: "no-cors",
  //   cache: "no-cache",
  //   credentials: "omit",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": true,
  //   },
  //   redirect: "follow",
  //   referrerPolicy: "no-referrer",
  //   body: JSON.stringify(data),
  // }).then((response) => response.json());
}
