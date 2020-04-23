document.addEventListener("DOMContentLoaded", function(event) {
    $(document).ready(function() {
        console.log("xx")
        new WOW().init();

        var selectedClass = "";
        $(".filter").click(function() {
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
            }, 300);
        });

        $(".tech-icons div")
            .mouseover(function() {
                //get p selector with description
                let p = this.children[1];
                $(p).css("opacity", 1);
                $(p).addClass("icons-mouseover");
                //get i selector 
                let i = this.children[0];
                $(i).css("color", "rgba(248, 0, 62, 0.4)");

            })
            .mouseout(function() {
                let p = this.children[1];
                $(p).css("opacity", 0);
                $(p).removeClass("icons-mouseover");
                let i = this.children[0];
                $(i).css("color", "#212529");
            });



    })
})