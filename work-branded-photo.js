
var html_branded_photo = `
<section id="portfolio" class="porftolio" style="margin-top: 50px;">
    <div class=" isotopev2 js-gallery">
        <div class="isotope-item livingroom tp visible">
            <a href="portofolio-single.html" title="BRAND GUIDE">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB01.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">KASSANDRA</div>
                            <div class="showcase-item-title">BRAND GUIDE</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item kitchen r2 visible">
            <a href="portofolio-single.html" title="DIGITAL ADS">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB02.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">BASMALAH</div>
                            <div class="showcase-item-title">DIGITAL ADS</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item terrace r3 visible">
            <a href="portofolio-single.html" title="MUSIC VIDEO">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB03.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">AWAKENING</div>
                            <div class="showcase-item-title">MUSIC VIDEO</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item w66 bedroom r4 visible">
            <a href="portofolio-single.html" title="BRAND IDENTITY">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB04.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">PASIFIC LINK</div>
                            <div class="showcase-item-title">BRAND IDENTITY</div>
                            <!-- <i class="ion-ios-plus-empty"></i> -->
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item kitchen r2 invisible">
            <a href="portofolio-single.html" title="DIGITAL ADS">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB02.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">BASMALAH</div>
                            <div class="showcase-item-title">DIGITAL ADS</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item terrace r3 invisible">
            <a href="portofolio-single.html" title="MUSIC VIDEO">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB03.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">AWAKENING</div>
                            <div class="showcase-item-title">MUSIC VIDEO</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item livingroom r1 invisible">
            <a href="portofolio-single.html" title="BRAND GUIDE">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB01.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">KASSANDRA</div>
                            <div class="showcase-item-title">BRAND GUIDE</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>
        <div class="isotope-item livingroom w66 r1 invisible">
            <a href="portofolio-single.html" title="BRAND GUIDE">
                <figure class="showcase-item">
                    <div class="showcase-item-thumbnail"><img alt="" src="images/Index/Blog/IB04.png"></div>
                    <figcaption class="showcase-item-hover hover-dark">
                        <div class="showcase-item-info">
                            <div class="showcase-item-category">KASSANDRA</div>
                            <div class="showcase-item-title">BRAND GUIDE</div>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </div>

    </div>
    <div
        style="display: flex; justify-content: center; background-color: #222327; margin-top: 40px; margin-bottom: 40px;">
        <button onclick="view_more_porto()" class="btn-s btn-4 btn-view-all" style="">View All</button>
    </div>
</section>
`;

function tampil_porto() {
    console.log("window", $(window).width());
    var n_child = $(".isotopev2").children(".visible").length;
    var t1 = $(".tp").height()
    var top = 0;
    var height = t1 + top;
    console.log("T1", t1);
    console.log("Child", n_child);
    if ($(window).width() > 992) {
        for (let i = 1; i <= n_child; i++) {
            if (i % 9 == 0) {
                top += (t1 * 2);
            }
            if (i % 5 == 0) {
                height += t1;
            }
            if (i / 1 == 1 || i / 9 == 1 || i / 17 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": top + "px",
                    "left": "0%"
                });
            } else if (i / 2 == 1 || i / 10 == 1 || i / 18 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": top + "px",
                    "left": "33.333%"
                });
            } else if (i / 3 == 1 || i / 11 == 1 || i / 19 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": top + "px",
                    "left": "66.666%"
                });
            } else if (i / 4 == 1 || i / 12 == 1 || i / 20 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + (t1 / 2)) + "px",
                    "left": "33.333%"
                });
            } else if (i / 5 == 1 || i / 13 == 1 || i / 21 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + t1) + "px",
                    "left": "0%"
                });
            } else if (i / 6 == 1 || i / 14 == 1 || i / 22 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + t1) + "px",
                    "left": "33.333%"
                });
            } else if (i / 7 == 1 || i / 15 == 1 || i / 23 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + t1) + "px",
                    "left": "66.666%"
                });
            } else if (i / 8 == 1 || i / 16 == 1 || i / 24 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + (t1 + (t1 / 2))) + "px",
                    "left": "0%"
                });
            }
        }
        $('.vlt-isotope-grid').css({ "height": height + "px" });
        $('.isotopev2').css({ "height": height + "px" });
        console.log("Heiht", height);
        console.log("top", top);

    } else if ($(window).width() > 762) {

        for (let i = 1; i <= n_child; i++) {
            if (i % 9 == 0) {
                top += ((t1 + (t1 / 2)) * 2);
            }
            if (i % 5 == 0) {
                height = t1 + top + t1 + t1;
            }
            if (i / 1 == 1 || i / 9 == 1 || i / 17 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": top + "px",
                    "left": "0%"
                });
            } else if (i / 2 == 1 || i / 10 == 1 || i / 18 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": top + "px",
                    "left": "50%"
                });
            } else if (i / 3 == 1 || i / 11 == 1 || i / 19 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": t1 / 2 + top + "px",
                    "left": "50%"
                });
            } else if (i / 4 == 1 || i / 12 == 1 || i / 20 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": ((t1)) + "px",
                    "left": "0%"
                });
            } else if (i / 5 == 1 || i / 13 == 1 || i / 21 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + t1 + (t1 / 2)) + "px",
                    "left": "0%"
                });
            } else if (i / 6 == 1 || i / 14 == 1 || i / 22 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + t1 + t1) + "px",
                    "left": "0%"
                });
            } else if (i / 7 == 1 || i / 15 == 1 || i / 23 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + t1 + (t1 / 2)) + "px",
                    "left": "50%"
                });
            } else if (i / 8 == 1 || i / 16 == 1 || i / 24 == 1) {
                $(".isotopev2 .isotope-item:nth-child(" + i + ")").css({
                    "position": "absolute",
                    "top": (top + ((t1 / 2) + (t1 * 2))) + "px",
                    "left": "0%"
                });
            }
        }
        $('.vlt-isotope-grid').css({ "height": height + "px" });
        $('.isotopev2').css({ "height": height + "px" });
        console.log("Heiht", height);

    }
    console.log($(".isotope").children(".satu").html());
}

function view_more_porto() {
    $(".isotopev2").children(".invisible").removeClass("invisible").addClass("visible")
    $(".btn-view-all").addClass('hidden')
    tampil_porto();
}

$(".vlt-isotope-filters").children(".branded-photo").on("click", function () {
    $(".isi-showcase").html(html_branded_photo)
    setTimeout(() => {
        tampil_porto();
    }, 100);
})