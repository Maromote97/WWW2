$(document).ready(function(){
   slider();
});

function slider(){
    poprz=$(".prev");
    nast=$(".next");
    slide=$(".slide");
    liczba=slide.length;
    aktualny=0;
    nast.click(function(){
        if(aktualny === liczba-1)
            aktualny=0;
        else
            aktualny++;
        wyswietlSlajd(aktualny);
    });
    poprz.click(function(){
        if(aktualny === 0)
            aktualny=liczba-1;
        else
            aktualny--;
        wyswietlSlajd(aktualny);
    });
}

function wyswietlSlajd (aktualny){
    sliderCo=$("#slajder #slides");
    sliderCo.fadeOut(200, function(){
        slide.removeClass("active");
        slide.eq(aktualny).addClass("active");
        sliderCo.fadeIn();
    });
}