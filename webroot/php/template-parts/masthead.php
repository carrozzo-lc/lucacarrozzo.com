<?php
/*
* Template file: Masthead
*/
?>

<section class="masthead">
    <div class="container">
        <div class="grid">
            <div class="column masthead__image">
                <img src="<?php echo $mastheadImg; ?>" alt="">
            </div><!-- .column -->
            <div class="column masthead__intro">
                <div class="intro">
                    <h1 class="intro__title">
                        <?php echo $introTitle; ?>
                    </h1>
                    <h2 class="intro__subtitle">
                        <?php echo $introSubtitle; ?>
                    </h2>
                    <p class="intro__desc">
                        <?php echo $introDesc; ?>
                    </p>
                </div>
            </div><!-- .column -->
        </div><!-- .grid -->
    </div><!-- .container -->

    <div class="scroll-down">
        <div>
            <span class="icon icon-down-open"></span>
        </div>
    </div><!-- .scroll-down -->
</section><!-- .masthead -->
