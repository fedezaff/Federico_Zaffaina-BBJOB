$.ajax({
    type : "POST",
    data : {},
    dataType : "json",
    "url" :"homepage.json",
    "success" : ris => {
        console.log(ris);
        console.log(ris.pageStructure.layout.lg[9].elements[0].value.urlMp4);

        //header

        //slide-show (carosello di bootstrap)
        document.getElementsByClassName('img-slider-homepage')[0].src = (ris.pageStructure.layout.lg[1].elements[0].imagesgroup.images[0].url)

        document.getElementsByClassName('img-slider-homepage')[1].src = (ris.pageStructure.layout.lg[1].elements[0].imagesgroup.images[1].url)

        //prodotto-evidenza
        document.getElementsByClassName('img-prodotto-evidenza')[0].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[2].elements[0].imagesgroup.images[0].url)+')'

        document.getElementsByClassName('prodotto-evidenza')[0].innerHTML += (ris.pageStructure.layout.lg[2].elements[1].value.content)

        //nostra-forza
        document.getElementsByClassName('nostra-forza')[0].innerHTML += (ris.pageStructure.layout.lg[3].elements[0].value.content)

        //punti-cardine-text

        //punti-cardine-images
        document.getElementsByClassName('punti-cardine-images')[0].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[5].elements[0].imagesgroup.images[0].url)+')'

        document.getElementsByClassName('punti-cardine-images')[1].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[5].elements[0].imagesgroup.images[1].url)+')'

        document.getElementsByClassName('punti-cardine-images')[2].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[5].elements[0].imagesgroup.images[2].url)+')'

        document.getElementsByClassName('punti-cardine-images')[3].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[5].elements[0].imagesgroup.images[3].url)+')'

        //prodotti-text

        //prodotti-img

        document.getElementsByClassName('prodotti-img')[0].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[7].elements[0].bbswayProducts[0].productImageUrl)+')'

        document.getElementsByClassName('prodotti-img')[1].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[7].elements[0].bbswayProducts[1].url)+')'

        document.getElementsByClassName('prodotti-img')[2].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[7].elements[0].bbswayProducts[2].url)+')'

        document.getElementsByClassName('prodotti-img')[3].style.backgroundImage = 'url('+(ris.pageStructure.layout.lg[7].elements[0].bbswayProducts[3].url)+')'

        //la-nostra-mission

        //prodotti

        document.getElementsByClassName('prodotti-video')[0].src = (ris.pageStructure.layout.lg[9].elements[0].value.urlMp4)

        document.getElementsByClassName('prodotti-video-text')[0].innerHTML += (ris.pageStructure.layout.lg[9].elements[1].value.content)

        //blog-subtitle

        document.getElementsByClassName('blog-subtitle')[0].innerHTML += (ris.pageStructure.layout.lg[10].elements[0].value.content)

        document.getElementsByClassName('blog-subtitle')[0].style.cssText += (ris.pageStructure.layout.lg[10].elements[0].value.settings.inlineStyle)

        document.getElementsByClassName('blog-subtitle')[0].style.textAlign+= (ris.pageStructure.layout.lg[10].elements[0].value.settings.textAlignment)

        document.getElementsByClassName('blog-subtitle')[0].style.color += (ris.pageStructure.layout.lg[10].elements[0].value.settings.textColor)

        document.getElementsByClassName('blog-subtitle')[0].style.fontSize += (ris.pageStructure.layout.lg[10].elements[0].value.settings.textSize)

        //blog-title

        document.getElementsByClassName('blog-title')[0].innerHTML += (ris.pageStructure.layout.lg[11].elements[0].value.content)

        document.getElementsByClassName('blog-title')[0].style.cssText += (ris.pageStructure.layout.lg[11].elements[0].value.settings.inlineStyle)

        document.getElementsByClassName('blog-title')[0].style.textAlign+= (ris.pageStructure.layout.lg[11].elements[0].value.settings.textAlignment)

        document.getElementsByClassName('blog-title')[0].style.color += (ris.pageStructure.layout.lg[11].elements[0].value.settings.textColor)

        document.getElementsByClassName('blog-title')[0].style.fontSize += (ris.pageStructure.layout.lg[11].elements[0].value.settings.textSize)

        //blog

        document.getElementsByClassName('blog-1-intro')[0].innerHTML += (ris.pageStructure.layout.lg[12].elements[0].posts[0].intro)

        document.getElementsByClassName('blog-2-intro')[0].innerHTML += (ris.pageStructure.layout.lg[12].elements[0].posts[1].intro)

        document.getElementsByClassName('blog-3-intro')[0].innerHTML += (ris.pageStructure.layout.lg[12].elements[0].posts[2].intro)


        document.getElementsByClassName('blog-1-title')[0].innerHTML += (ris.pageStructure.layout.lg[12].elements[0].posts[0].title)

        document.getElementsByClassName('blog-2-title')[0].innerHTML += (ris.pageStructure.layout.lg[12].elements[0].posts[1].title)

        document.getElementsByClassName('blog-3-title')[0].innerHTML += (ris.pageStructure.layout.lg[12].elements[0].posts[2].title)


        document.getElementsByClassName('blog-1-img')[0].style.backgroundImage += 'url('+(ris.pageStructure.layout.lg[12].elements[0].posts[0].urlImage)+')'

        document.getElementsByClassName('blog-2-img')[0].style.backgroundImage += 'url('+(ris.pageStructure.layout.lg[12].elements[0].posts[1].urlImage)+')'

        document.getElementsByClassName('blog-3-img')[0].style.backgroundImage += 'url('+(ris.pageStructure.layout.lg[12].elements[0].posts[2].urlImage)+')'

        //footer

        document.getElementsByClassName('footer')[0].innerHTML += (ris.pageStructure.layout.lg[13].elements[0].value.content)

        document.getElementsByClassName('footer')[0].style.cssText += (ris.pageStructure.layout.lg[13].elements[0].value.settings.inlineStyle)

        document.getElementsByClassName('footer')[0].style.textAlign+= (ris.pageStructure.layout.lg[13].elements[0].value.settings.textAlignment)

        document.getElementsByClassName('footer')[0].style.color += (ris.pageStructure.layout.lg[13].elements[0].value.settings.textColor)

        document.getElementsByClassName('footer')[0].style.fontSize += (ris.pageStructure.layout.lg[13].elements[0].value.settings.textSize)
    }
})
