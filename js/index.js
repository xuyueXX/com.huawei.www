$('input').mouseenter(function(){
    $(this).css('padding-left','20px')
})
$('input').mouseleave(function(){
    $(this).css('tranform-X','0px')
})
// 中国站下拉
$('.hread-chinese-s span').mouseenter(function(){
    $('.hread-chinese-t').show()
    $('.hread-chinese-s span').css('color','red')
})
$('.hread-chinese-s').mouseleave(function(){
    $('.hread-chinese-t').hide()
    $('.hread-chinese-s span').css('color','#333333')
})


// 地址替换
$('.tab-seletor').click(function(){
    $('.tab-section-two').hide()
    let index = $(this).index()
    $('.tab-section-show').eq(index).show()
    $('.tab-seletor').css('color','#fff')
})
$('.tab-seletor-active').click(function(){
    $('.tab-section-two').show()
    $('.tab-section-show').hide()
    let index = $(this).index()
    $('.tab-section-two').eq(index).hide()
})