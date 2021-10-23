var item = document.getElementsByClassName("svg-img")[0];

item.addEventListener("click",function() {
    var j = $(".container").hasClass("active");
    if(j == 0) {
        $(".foot-share-option").addClass("active");
        $(".container").addClass("active");
        $(".display-icon").addClass("active");
        $(".one-down").addClass("active");
        $(".foot").addClass("active");
    }
    else {
        $(".foot-share-option").removeClass("active");
        $(".container").removeClass("active");
        $(".display-icon").removeClass("active");
        $(".one-down").removeClass("active");
        $(".foot").removeClass("active");
    }
});