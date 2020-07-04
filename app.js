const dataURL = "http://localhost:3000/content";
const htmlBody = document.querySelector("body");
const fetchInitGet = {
    method: "GET",
    mode: "cors",
    headers: new Headers(),
    cache: "no-cache"
};

fetch(dataURL, fetchInitGet).then(
    res => res.json(),
    rej => console.error("error: " + rej)
).then(
    comment => comment.forEach(comm => {
        let newH1 = document.createElement()
        htmlBody.appendChild(`<h1>${comm.comment}</h1>`)
    })
)
