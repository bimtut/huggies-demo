import { addClass, removeClass } from "./utils-class";

const sliders = document.getElementsByClassName("slider");

for (let index = 0; index < sliders.length; index++) {
  const slider = sliders[index];

  const items = slider.querySelectorAll(".slider .item");
  const preview = slider.querySelector("div > .preview");

  for (let item = 0; item < items.length; item++) {
    const itemTriggers = items[item];

    itemTriggers.addEventListener("click", function () {
      const dataImg = this.attributes?.["data-img"]?.value;
      for (let k = 0; k < items.length; k++) {
        const triggerNotToRemove = items[k];
        removeClass(triggerNotToRemove, "selected");
      }
      addClass(itemTriggers, "selected");

      preview.querySelector("img").setAttribute("src", dataImg);
    });
  }
}
