(function () {
    const sliders = [...document.querySelectorAll(".fotos__body")];
    const buttonNext = document.querySelector("#next");
    const buttonbefore = document.querySelector("#before");
    console.log(sliders);
    let value;

    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    buttonbefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentfotos = document.querySelector(".fotos__body--show").dataset.id;
        value = Number(currentfotos);
        value+= add;


        sliders[Number(currentfotos)-1].classList.remove("fotos__body--show");
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add("fotos__body--show");


    }



})();