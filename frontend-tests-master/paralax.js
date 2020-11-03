$(document).ready(function(){
    var position = $(window).scrollTop();
    var scrollContainer = $('.scrollContainer');
    var scrollElement = $('.scrollElement');
    var windowWidth = $(window).width();
    var info = []

    scrollElement.each(function(){
        var top = $(this).data("positionFromTop");
        $(this).css('top',top);
        var bottom = $(this).data("positionFromBottom");
        $(this).css('bottom',bottom);
    })

    for (y = 0; y < scrollContainer.length; y++) {

        var arrayVariable = [];
        var variableElement;

        var newH = 0;
        var elemH
        scrollContainer.eq(y).find('.variableHeight').each(function(){

            if($(this).height() > newH){
                newH = $(this).height()
                elemH = $(this)
            }

        })

        info.push({
            altezzaContenitore: scrollContainer.eq(y).height(),
            elementoMaggiore: elemH,
            altezzaInizialeElemento: newH,
        })
    }

    $(window).resize(function() {
        for (y = 0; y < scrollContainer.length; y++) {
            var altezzaInizialeElemento = info[y].altezzaInizialeElemento;
            var elementoMaggiore = info[y].elementoMaggiore;
            var altezzaContenitore = info[y].altezzaContenitore;
            var nuovaAltezzaElemento = ($(elementoMaggiore).height());
            if (altezzaInizialeElemento < nuovaAltezzaElemento){
                $(scrollContainer).eq(y).css('height',( altezzaContenitore + (nuovaAltezzaElemento - altezzaInizialeElemento) )+'px');
            }
        }
    })

    $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();
        position=scroll;

        var i = 0
        scrollContainer.each(function(){
            containerHeightEndVar = $(this).offset().top+($(this).height());

            if ((($(this).offset().top)-(window.outerHeight)) > 0) {
                containerPositionVar = ($(this).offset().top)-(window.outerHeight)
            }     
            else {
                containerPositionVar = 0
            }

            var preStart = 0;
            if (($(this).data("start")) != undefined){
                if (isNaN($(this).data("start")) == false) {
                    preStart = $(this).data("start")
                }
                else {
                    var startSiPercent = $(this).data("start")
                    var startNoPercent = parseInt(startSiPercent.replace("%",''))
                    preStart = (info[i].altezzaContenitore) * (startNoPercent/100)
                }  
            }

            if ((position >= ((containerPositionVar)+(preStart))) & (position <= containerHeightEndVar)){
                $(this).find('.scrollElement').each(function(){
                    var speed = $(this).data("speed");
                    var translateWay = $(this).data("inverse") ? '+' : '-'
                    $(this).css('transform',"translateY("+translateWay+ ((scroll)-(containerPositionVar)-(preStart))*(speed) +"px)"); 
                })
            }
            i++
        })
    });
})