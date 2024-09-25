$(document).ready(function() {
    const closeBtn = $(".close")
    const menuBtn = $(".menu")
    const gnb = $("#gnb")
    const shopBtn = $(".shop");
    const shopSlider = $(".shop_slider");
    const shopImg = $(".shop > img")
    /* console.log(shopImg) */

    /* gnb on/off */
    menuBtn.on('click', function() {
        gnb.fadeIn()
    })

    closeBtn.on('click', function() {
        gnb.fadeOut()
    })
    /* gnb on/off */

    /* 아코디언 메뉴 */
    shopBtn.on('click', function() {
        shopSlider.slideToggle();
        shopImg.toggleClass('rotateArrow')
    })
    /* 아코디언 메뉴 */
})
