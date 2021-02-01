const smoothScrolAnchor = document.querySelectorAll("a[href^='#']")

for (let index = 0; index < smoothScrolAnchor.length; index++) {
    const element = smoothScrolAnchor[index];
    
    element.addEventListener("click", function(e) {
        e.preventDefault()

        if(document.getElementById(this.getAttribute("href").replace("#", "")))
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
}