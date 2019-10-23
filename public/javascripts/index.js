const form = document.querySelector("form");
form.addEventListener("submit", event => submitForm(event));

const submitForm = event => {
  event.preventDefault();
  const initials = document.querySelector("#initials").value;
  const score = document.querySelector("#score").value;
  postForm(initials, score);
}

const postForm = (initials, score) => {
  const body = {
    initials: initials,
    score: score
  }
  const config = createConfigWithBody("POST", body);
  return fetch("http://localhost:3000/hiscores", config)
    .then(objectify)
    .then(console.log)
    .catch(console.error);
}

const createConfigWithBody = (method, body) => {
  const config = createBaseConfig(method);
  config.body = JSON.stringify(body);
  return config;
}

const createBaseConfig = method => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
}
const objectify = res => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("HTTP status code " + res.status);
  }
}