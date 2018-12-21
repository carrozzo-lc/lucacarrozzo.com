<?php
/*
* Template file: Services
*/
?>

<section class="services">
    <div class="container">
        <div class="section-title">
            <h2><?php echo $srv_title; ?></h2>
        </div><!-- .section-title -->

        <div class="row">
            <?php
            for($i = 1; $i <= 3; $i += 1) { ?>
            <div class="column col-sm-12 col-md-4">

                <div class="service">
                    <?php echo ${'srv_icon0' . $i} ?>
                    <h3 class="service__title">
                        <?php echo ${'srv_title0' . $i} ?>
                    </h3>
                    <div class="service__desc">
                        <?php echo ${'srv_desc0' . $i} ?>
                    </div>
                </div><!-- .service-box -->

            </div><!-- .column -->
            <?php } ?>
        </div><!-- .row -->

        <div class="service-slider swiper-container">
            <div class="swiper-wrapper">
                <?php
                for($i = 1; $i <= 3; $i += 1) { ?>
                <div class="swiper-slide">
                    <div class="service">
                        <?php echo ${'srv_icon0' . $i} ?>
                        <h3 class="service__title">
                            <?php echo ${'srv_title0' . $i} ?>
                        </h3>
                        <div class="service__desc">
                            <?php echo ${'srv_desc0' . $i} ?>
                        </div>
                    </div><!-- .service-box -->
                </div><!-- .column -->
                <?php } ?>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div><!-- .service-slider -->

    </div><!-- .container -->
</section><!-- .services -->
