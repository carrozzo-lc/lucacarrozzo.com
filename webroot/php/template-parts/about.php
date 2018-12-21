<?php
/*
* Template file: About
*/
?>

<section class="about">
    <div class="container">

        <div class="section-title">
            <h2><?php echo $abt_title; ?></h2>
        </div><!-- .section-title -->

        <div class="about__desc">
            <?php echo $abt_description; ?>
            <div class="btn-read"><?php echo $abt_btnRead; ?></div>
        </div><!-- .about__desc -->

        <div class="skills">
            <?php
            for($i = 1; $i <= 5; $i += 1) { ?>
            <div class="skill">
                <div class="skill__box skill0<?php echo $i; ?>"></div>
                <div class="skill__text">
                    <?php echo ${'abt_skill0' . $i} ?>
                </div>
            </div>
            <?php } ?>
        </div><!-- .skills -->

        <div class="btn-box">
            <a href="<?php echo $abt_pdfCv; ?>" class="btn-cv" target="_blank"><?php echo $abt_btnCv; ?></a>
        </div>

    </div><!-- .container -->
</section><!-- .about -->
