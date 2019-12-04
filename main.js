$(document).ready(function() {
        // genero 15 numeri che corrispondono all'indice dei quadrati che prenderanno la classe nave
        var indiciNavi = [];
        do {
            var numero = generaRandom(0,63);
            if (!indiciNavi.includes(numero)) {
                indiciNavi.push(numero);
            }
        } while (indiciNavi.length < 15);
        console.log('Gli indici delle navi sono: ' + indiciNavi);
        //prendo il quadrato con l'indice[indiciBombe] e gli aggiungo la classe bomba (assegnazione classe)
        for (var i = 0; i < indiciNavi.length; i++) {
            $('.quadratino').eq(indiciNavi[i]).addClass('nave');
        }
        //se clicco su nave aggiungi classe active
        $('.quadratino').click(function(){
            $(this).addClass('active');
            }
        );
        function generaRandom(min, max) {
            var random = Math.floor(Math.random() * (max - min + 1) ) + min;
            return random;
        }
    })

 for (var i = 0; i < 64; i++) {
     $( ".container" ).append("<div class=quadratino></div>");
 }
;
