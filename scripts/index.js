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
                $(i).css("transition", "1s");

            })
            .mouseout(function() {
                let p = this.children[1];
                $(p).css("opacity", 0);
                $(p).removeClass("icons-mouseover");
                let i = this.children[0];
                $(i).css("color", "#212529");
            });


        //generate elements in section Portfolio
        $.getJSON("./scripts/portfolio.json", function(json) {
            generatePortfolioTab(Object.values(json));
            generatePortfolioModal(json);
        });


    })
})

const generatePortfolioTab = (data) => {
    data.map((portfolioObjects) => {
        let cardsContainer = $('#cardsContainer');

        cardsContainer.append(` 
        <div class="col-md-12 col-lg-4">
            <a class='card hoverable mb-4' data-toggle='modal' data-target='#basicExampleModal' id='${portfolioObjects.id}'> 
                <img class = 'card-img-top' src = '${portfolioObjects.previewImgSrc}' alt = '${portfolioObjects.name} page image' >
                <div class = 'card-body'>
                    <h5 class = 'my-3'> ${portfolioObjects.name} </h5> 
                    <p class = 'card-text text-uppercase mb-3' > ${portfolioObjects.shortDescription} </p>
                </div>
            </a>
        </div>`)
    })
};

const generatePortfolioModal = (data) => { console.log(data) };