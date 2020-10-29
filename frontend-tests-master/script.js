$.ajax({
    type : "POST",
    data : {},
    dataType : "json",
    "url" :"homepage.json",
    "success" : ris => {
        console.log(ris);
        console.log(ris.pageStructure.layout.lg[5].elements[0].imagesgroup.images[0].url);

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
    }
})
