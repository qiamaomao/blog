// menu
const navigator = document.querySelector(".navigator")
const menu = document.querySelector(".menu")
const main = document.querySelector(".main")

if (menu !== null) {
  menu.addEventListener("click", () => {
    navigator.classList.add("fixed")
    main.classList.add("fixed")
  }, true)
  main.addEventListener("click", () => {
    navigator.classList.remove("fixed")
    main.classList.remove("fixed")
  }, true)
}
// mediumZoom(".markdown-body img")
mediumZoom(".article.post .markdown-body img,.post .describe>.img img")