$(function(){
    var alturaDaTela = window.innerHeight - 10;
    if($('#interface > header').height() > alturaDaTela){
        $('#interface > header').height(alturaDaTela);
    }
});