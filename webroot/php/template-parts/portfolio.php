<?php
/*
* Template file: Portfolio
*/
?>

<section class="portfolio">

    <div class="section-title">
        <h2><?php echo $prt_title; ?></h2>
    </div><!-- .section-title -->

    <?php
    for($i = 1; $i <= 6; $i += 1) { ?>
    <div class="portfolio__panel">
        <div class="container">
            <div class="portfolio__block clearfix">

                <div class="portfolio__content <?php if ($i % 2 == 0) { ?>portfolio__content--left<?php } ?>" style="background-color:<?php echo ${'prt_color' . $i} ?>;">
                    <h3 class="portfolio__title"><?php echo ${'prt_title' . $i} ?></h3>
                    <div class="portfolio__desc">
                        <div class="clampjs">
                            <?php echo ${'prt_description' . $i} ?>
                        </div>
                    </div>
                    <a href="<?php echo ${'prt_link' . $i} ?>" class="btn-sitelink portfolio__btn d-lg-none" target="_blank">
                        <i class="icon icon-link"></i><span>Website</span>
                    </a>
                </div><!-- .portfolio__desc -->

                <div class="portfolio__imgbox <?php if ($i % 2 == 0) { ?>portfolio__imgbox--right<?php } ?>">
                    <img src="<?php echo ${'prt_image' . $i} ?>" class="portfolio__img" alt="">
                    <a href="<?php echo ${'prt_link' . $i} ?>" class="btn-sitelink portfolio__btn d-none d-lg-block" target="_blank">
                        <i class="icon icon-link"></i><span>Website</span>
                    </a>
                </div><!-- .portfolio__imgbox -->

            </div><!-- .portfolio__block -->
        </div><!-- .container -->
        <div class="portfolio__backside"></div>
    </div><!-- .portfolio__panel -->
    <?php } ?>

</section><!-- .portfolio -->
