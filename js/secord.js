$('.huaweiclound-item-clound').mouseenter(function(){
    $('.huaweiclound-hide').show()
})
$('.huaweiclound-hide').mouseleave(function(){
    $('.huaweiclound-hide').hide()

}) 
$('.huaweiclound-item-clound').mouseleave(function(){
    $('.huaweiclound-hide').hide()
})

$('')

$(function(){
    var isGrey = window.$isGrey = "true";
    var isBlue = window.$isBlue = "false";
    var isTitleWhite = window.$isTitleWhite = "false";
    if(isGrey == "true"){
        $(".hauweiclound-service").attr("data-bg","grey");
    }
    if(isBlue == "true"){
        $(".service-v6-section-table").attr("data-bg","blue");
    }
    if(isTitleWhite == "true"){
        $(".service-v6-section-table .v6-container").find(".v6-section-head").attr("data-theme","light");
    }
})