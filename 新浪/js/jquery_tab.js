//导航切换
function Tab(tab, comTiTaLi, Items) {
    var obj = $(tab);
    obj.find(comTiTaLi).on("mouseover", function () {
        $(this).addClass("active").siblings().removeClass("active");
        obj.find(Items).removeClass("show");
        obj.find(Items).eq($(this).index()).addClass("show");
    })
}

Tab('.tab_4', ".tab_title>li", ".smList>.item");
Tab('.comWidth', '.comTitle>.comTitle_tabs>li');


//调用导航封装函数
var oLeftBox = $('.leftBox');
oLeftBox.each(function (index, element) {
    Tab(element, '.comTitle>.comTitle_tabs>li', $('.comTitle').next('.tabs').find('.tabs_item'));
    Tab(element, '.contNav>.contNav_item', $('.titBg').next('.tabs').find('.tabs_item'));
});


//轮播切换
var oChangeUl = $('.photo_list');
oChangeUl.html(oChangeUl.html() + oChangeUl.html());
var oChangeLe = $('.photo_prev');
var oChangeRi = $('.photo_next');
oChangeUl.css({'margin-left': '0px'});
oChangeRi.click(function () {
    oChangeUl.animate({'margin-left': '-1000px'}, {duration: 2000})
});
oChangeLe.click(function () {
    oChangeUl.animate({'margin-left': '0px'}, {duration: 2000})
})
