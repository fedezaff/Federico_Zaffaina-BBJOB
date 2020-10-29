$.ajax({
    type : "POST",
    data : {},
    dataType : "json",
    "url" :"homepage.json",
    "success" : ris => {
        console.log(ris.pageStructure.layout.lg[3].elements[0].value.content);
        document.getElementsByClassName('prova')[0].innerHTML += (ris.pageStructure.layout.lg[3].elements[0].value.content)
    }
})