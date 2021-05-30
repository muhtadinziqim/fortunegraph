
var html_music_production = `
<div class=" grid-item filter-guide">
    <!--Portfolio item-->
    <article class="vlt-work vlt-work--style-3">
        <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                href="portofolio-single.html"></a><img
                src="https://placeimg.com/500/500/nature/any" alt="" loading="lazy">
        </div>
        <div class="vlt-work__meta">
            <h5 class="vlt-work__title">Composition
            </h5><span class="vlt-work__category">Brand Guide</span>
        </div>
    </article>
</div>
<div class=" grid-item filter-guide">
    <!--Portfolio item-->
    <article class="vlt-work vlt-work--style-3">
        <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                href="portofolio-single.html"></a><img
                src="https://placeimg.com/500/500/nature/any" alt="" loading="lazy">
        </div>
        <div class="vlt-work__meta">
            <h5 class="vlt-work__title">Composition
            </h5><span class="vlt-work__category">Brand Guide</span>
        </div>
    </article>
</div>
<div class=" grid-item filter-guide">
    <!--Portfolio item-->
    <article class="vlt-work vlt-work--style-3">
        <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                href="portofolio-single.html"></a><img
                src="https://placeimg.com/500/500/nature/any" alt="" loading="lazy">
        </div>
        <div class="vlt-work__meta">
            <h5 class="vlt-work__title">Composition
            </h5><span class="vlt-work__category">Brand Guide</span>
        </div>
    </article>
</div>
<div class=" grid-item filter-guide">
    <!--Portfolio item-->
    <article class="vlt-work vlt-work--style-3">
        <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                href="portofolio-single.html"></a><img
                src="https://placeimg.com/500/500/nature/any" alt="" loading="lazy">
        </div>
        <div class="vlt-work__meta">
            <h5 class="vlt-work__title">Composition
            </h5><span class="vlt-work__category">Brand Guide</span>
        </div>
    </article>
</div>
<div class=" grid-item filter-guide">
    <!--Portfolio item-->
    <article class="vlt-work vlt-work--style-3">
        <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                href="portofolio-single.html"></a><img
                src="https://placeimg.com/500/500/nature/any" alt="" loading="lazy">
        </div>
        <div class="vlt-work__meta">
            <h5 class="vlt-work__title">Composition
            </h5><span class="vlt-work__category">Brand Guide</span>
        </div>
    </article>
</div>
<div class=" grid-item filter-guide">
    <!--Portfolio item-->
    <article class="vlt-work vlt-work--style-3">
        <div class="vlt-work__media"><a class="vlt-work__link has-cursor"
                href="portofolio-single.html"></a><img
                src="https://placeimg.com/500/500/nature/any" alt="" loading="lazy">
        </div>
        <div class="vlt-work__meta">
            <h5 class="vlt-work__title">Composition
            </h5><span class="vlt-work__category">Brand Guide</span>
        </div>
    </article>
</div>

<div class="vlt-gap-60"></div>
<div class="text-center">
    <div id="vlt-load-more-portfolio-10">
        <button onclick="view_more_porto()" style="margin-left: -10px; margin-top: 50px;" class="btn-s btn-4 btn-view-all" style="">View All</button>
    </div>
</div>

`;


function view_more_porto() {
    $(".isi-showcase").children(".hidden").removeClass("hidden")
    $(".btn-view-all").addClass('hidden')
    tampil_porto();
}

$(".vlt-isotope-filters").children(".music-production").on("click", function () {
$(".isi-showcase").html(html_music_production)
$('.vlt-isotope-grid').attr("data-columns", "3")
$('.vlt-isotope-grid').attr("data-x-gap", "0|0")
$('.vlt-isotope-grid').attr("data-y-gap", "0|0")
})