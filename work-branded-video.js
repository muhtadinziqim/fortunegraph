
var html_branded_video = `
        <div class=" grid-item filter-guide">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Composition
                    </h5><span class="vlt-work__category">Brand Guide</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-identity">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Inspiration
                    </h5><span class="vlt-work__category">Media Branding</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-guide">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Packaging
                    </h5><span class="vlt-work__category">Brand Guide</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-motion">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3 vlt-work-2">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Minimal Branding
                    </h5><span class="vlt-work__category">Motion Graphic</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-packaging">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Concept Art
                    </h5><span class="vlt-work__category">Packaging Design</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-motion">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Creative Portrait
                    </h5><span class="vlt-work__category">Motion Graphic</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-motion hidden" >
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Creative Portrait
                    </h5><span class="vlt-work__category">Motion Graphic</span>
                </div>
            </article>
        </div>
        <div class=" grid-item filter-guide hidden">
            <!--Portfolio item-->
            <article class="vlt-work vlt-work--style-3">
                <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                        href="portofolio-single.html"></a><img
                        src="https://placeimg.com/1360/720/nature/any" alt="" loading="lazy">
                </div>
                <div class="vlt-work__meta">
                    <h5 class="vlt-work__title">Creative Portrait
                    </h5><span class="vlt-work__category">Brand Guide</span>
                </div>
            </article>
        </div>

        <div class="vlt-gap-60"></div>
        <div class="text-center">
            <div id="vlt-load-more-portfolio-10">
                    <button onclick="view_more_branded_video()" style="margin-left: -10px; margin-top: 50px;" class="btn-s btn-4 btn-view-all" style="">View All</button>
            </div>
        </div>

`;


function view_more_branded_video() {
    $(".isi-showcase").children(".hidden").removeClass("hidden")
    $(".btn-view-all").addClass('hidden')
    console.log("Yes");
}

$(".vlt-isotope-filters").children(".branded-video").on("click", function () {
    $(".isi-showcase").html(html_branded_video)
    $('.vlt-isotope-grid').attr("data-columns", "2")
    // $('.vlt-isotope-grid').attr("data-x-gap", "15|15")
    // $('.vlt-isotope-grid').attr("data-y-gap", "15|15")
})