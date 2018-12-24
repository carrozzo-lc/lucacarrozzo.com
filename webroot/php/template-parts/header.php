<?php
/*
* Template file: Header
*/
?>

<header class="site-header fixed-top">
    <nav class="navigation">

        <div class="button-left">
            <a class="btn btn--tel" href="tel:<?php echo $stripped = str_replace(' ', '', $tel) ?>" title="Phone <?php echo $name; ?>">
                <i class="icon icon-phone"></i> <span><?php echo $tel ?></span>
            </a>
        </div><!-- .button-left -->

        <div class="brand">
            <a href="<?php echo $siteUrl; ?>" title="<?php echo $metaTitle; ?>">
                <img class="logo" src="<?php echo $logo; ?>" alt="<?php echo $metatitle; ?>">
            </a>
        </div><!-- .brand -->

        <div class="button-right">
            <a href="<?php echo $twitter; ?>" class="btn btn--twitter d-none d-sm-block" title="twitter <?php echo $name; ?>">
                <i class="icon icon-twitter"></i>
            </a>
            <a href="<?php echo $linkedin; ?>" class="btn btn--linkedin d-none d-sm-block" title="linkedin <?php echo $name; ?>">
                <i class="icon icon-linkedin"></i>
            </a>
            <a href="mailto:<?php echo $mail; ?>" class="btn btn--mail d-none d-sm-block" title="Email <?php echo $name; ?>">
                <i class="icon icon-mail-alt"></i>
            </a>

            <div class="d-block d-sm-none">
                <div id="socialShare">
                    <div class="socialBox pointer">
                        <div class="btn btn--share">
                            <i class="icon icon-share"></i>
                        </div>
                        <div id="socialGallery">
                            <div class="socialToolBox">
                                <a href="<?php echo $twitter; ?>" class="btn btn--twitter" title="twitter <?php echo $name; ?>">
                                    <i class="icon icon-twitter"></i>
                                </a>
                                <a href="<?php echo $linkedin; ?>" class="btn btn--linkedin " title="linkedin <?php echo $name; ?>">
                                    <i class="icon icon-linkedin"></i>
                                </a>
                                <a href="<?php echo $mail; ?>" class="btn btn--mail" title="Email <?php echo $name; ?>">
                                    <i class="icon icon-mail-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div><!-- #socialShare -->
            </div>

        </div><!-- .button-right -->

    </nav><!-- .navigation -->
</header><!-- .site-header -->
