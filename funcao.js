async function post_Dados(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", 
      mode: "no-cors", 
      cache: "no-cache", 
      credentials: "omit", 
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json(); 
}
