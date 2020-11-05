$.ajax({
    type : "POST",
    data : {},
    dataType : "json",
    "url" :"homepage.json",
    "success" : ris => {
        console.log(ris);
        console.log(ris.pageStructure.layout.lg[9].elements[0].value.urlMp4);

        var base = (ris.pageStructure.layout)

        //header
        $('.header-logo')[0].src = (base.lg[0].elements[0].imagesgroup.images[0].url)

        $('.social-menu')[0].innerHTML = (base.lg[0].elements[1].value.menu.items[0].name)

            $('.social-menu-link-1')[0].href = (base.lg[0].elements[1].value.menu.items[0].subMenu[0].link)
            $('.social-menu-link-2')[0].href = (base.lg[0].elements[1].value.menu.items[0].subMenu[1].link)
            $('.social-menu-link-3')[0].href = (base.lg[0].elements[1].value.menu.items[0].subMenu[2].link)

        //slide-show (carosello di bootstrap)
        
        $('.img-slider-homepage')[0].src = (base.lg[1].elements[0].imagesgroup.images[0].url)

        $('.img-slider-homepage')[1].src = (base.lg[1].elements[0].imagesgroup.images[1].url)

        //prodotto-evidenza
        $('.img-prodotto-evidenza')[0].style.backgroundImage = 'url('+(base.lg[2].elements[0].imagesgroup.images[0].url)+')'

        $('.prodotto-evidenza')[0].innerHTML += (base.lg[2].elements[1].value.content)

        //nostra-forza
/*         $('.nostra-forza')[0].innerHTML += (base.lg[3].elements[0].value.content) */

        //punti-cardine-text

        $('.punti-cardine-text')[0].innerHTML += (base.lg[4].elements[0].value.content)

        $('.punti-cardine-text')[0].style.cssText += (base.lg[4].elements[0].value.settings.inlineStyle)

        $('.punti-cardine-text')[0].style.textAlign+= (base.lg[4].elements[0].value.settings.textAlignment)

        $('.punti-cardine-text')[0].style.color += (base.lg[4].elements[0].value.settings.textColor)

        $('.punti-cardine-text')[0].style.fontSize += (base.lg[4].elements[0].value.settings.textSize)

        //punti-cardine-images
        $('.punti-cardine-images')[0].style.backgroundImage = 'url('+(base.lg[5].elements[0].imagesgroup.images[0].url)+')'

        $('.punti-cardine-images')[1].style.backgroundImage = 'url('+(base.lg[5].elements[0].imagesgroup.images[1].url)+')'

        $('.punti-cardine-images')[2].style.backgroundImage = 'url('+(base.lg[5].elements[0].imagesgroup.images[2].url)+')'

        $('.punti-cardine-images')[3].style.backgroundImage = 'url('+(base.lg[5].elements[0].imagesgroup.images[3].url)+')'

        //prodotti-text
        $('.prodotti-text')[0].innerHTML += (base.lg[6].elements[0].value.content)

        $('.prodotti-text')[0].style.cssText += (base.lg[6].elements[0].value.settings.inlineStyle)

        $('.prodotti-text')[0].style.textAlign+= (base.lg[6].elements[0].value.settings.textAlignment)

        $('.prodotti-text')[0].style.color += (base.lg[6].elements[0].value.settings.textColor)

        $('.prodotti-text')[0].style.fontSize += (base.lg[6].elements[0].value.settings.textSize)

        //prodotti-img

        $('.prodotti-img')[0].style.backgroundImage = 'url('+(base.lg[7].elements[0].bbswayProducts[0].productImageUrl)+')'

        $('.prodotti-img')[1].style.backgroundImage = 'url('+(base.lg[7].elements[0].bbswayProducts[1].url)+')'

        $('.prodotti-img')[2].style.backgroundImage = 'url('+(base.lg[7].elements[0].bbswayProducts[2].url)+')'

        $('.prodotti-img')[3].style.backgroundImage = 'url('+(base.lg[7].elements[0].bbswayProducts[3].url)+')'

        //mission-text

        $('.mission-text')[0].innerHTML += (base.lg[8].elements[0].value.content)

        $('.mission-text')[0].style.cssText += (base.lg[8].elements[0].value.settings.inlineStyle)

        $('.mission-text')[0].style.textAlign+= (base.lg[8].elements[0].value.settings.textAlignment)

        $('.mission-text')[0].style.color += (base.lg[8].elements[0].value.settings.textColor)

        $('.mission-text')[0].style.fontSize += (base.lg[8].elements[0].value.settings.textSize)

        //prodotti

        $('.prodotti-video')[0].src = (base.lg[9].elements[0].value.urlMp4)

        $('.prodotti-video-text')[0].innerHTML += (base.lg[9].elements[1].value.content)

        //blog-subtitle

        $('.blog-subtitle')[0].innerHTML += (base.lg[10].elements[0].value.content)

        $('.blog-subtitle')[0].style.cssText += (base.lg[10].elements[0].value.settings.inlineStyle)

        $('.blog-subtitle')[0].style.textAlign+= (base.lg[10].elements[0].value.settings.textAlignment)

        $('.blog-subtitle')[0].style.color += (base.lg[10].elements[0].value.settings.textColor)

        $('.blog-subtitle')[0].style.fontSize += (base.lg[10].elements[0].value.settings.textSize)

        //blog-title

        $('.blog-title')[0].innerHTML += (base.lg[11].elements[0].value.content)

        $('.blog-title')[0].style.cssText += (base.lg[11].elements[0].value.settings.inlineStyle)

        $('.blog-title')[0].style.textAlign+= (base.lg[11].elements[0].value.settings.textAlignment)

        $('.blog-title')[0].style.color += (base.lg[11].elements[0].value.settings.textColor)

        $('.blog-title')[0].style.fontSize += (base.lg[11].elements[0].value.settings.textSize)

        //blog

        $('.blog-1-intro')[0].innerHTML += (base.lg[12].elements[0].posts[0].intro)

        $('.blog-2-intro')[0].innerHTML += (base.lg[12].elements[0].posts[1].intro)

        $('.blog-3-intro')[0].innerHTML += (base.lg[12].elements[0].posts[2].intro)


        $('.blog-1-title')[0].innerHTML += (base.lg[12].elements[0].posts[0].title)

        $('.blog-2-title')[0].innerHTML += (base.lg[12].elements[0].posts[1].title)

        $('.blog-3-title')[0].innerHTML += (base.lg[12].elements[0].posts[2].title)


        $('.blog-1-img')[0].style.backgroundImage += 'url('+(base.lg[12].elements[0].posts[0].urlImage)+')'

        $('.blog-2-img')[0].style.backgroundImage += 'url('+(base.lg[12].elements[0].posts[1].urlImage)+')'

        $('.blog-3-img')[0].style.backgroundImage += 'url('+(base.lg[12].elements[0].posts[2].urlImage)+')'

        //footer

/*         $('.footer')[0].innerHTML += (base.lg[13].elements[0].value.content)

        $('.footer')[0].style.cssText += (base.lg[13].elements[0].value.settings.inlineStyle)

        $('.footer')[0].style.textAlign+= (base.lg[13].elements[0].value.settings.textAlignment)

        $('.footer')[0].style.color += (base.lg[13].elements[0].value.settings.textColor)

        $('.footer')[0].style.fontSize += (base.lg[13].elements[0].value.settings.textSize) */
    }
})

//smooth scroll for link

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
});
