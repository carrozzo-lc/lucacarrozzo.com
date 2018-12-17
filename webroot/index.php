<?php include 'php/variables.php';?>

<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />

        <!-- SEO meta tags -->
        <meta name="description" content="<?php echo $metaDescription; ?>"/>
        <link rel="canonical" href="<?php echo $siteUrl; ?>" />
        <link rel="publisher" href="https://plus.google.com/u/0/+lucacarrozzo87"/>
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="<?php echo $metaTitle; ?>" />
        <meta property="og:description" content="<?php echo $metaDescription; ?>" />
        <meta property="og:url" content="<?php echo $siteUrl; ?>" />
        <meta property="og:site_name" content="<?php echo $siteName; ?>" />
        <meta property="og:image" content="<?php echo $metaImg; ?>" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="<?php echo $metaDescription; ?>" />
        <meta name="twitter:title" content="<?php echo $metaTitle; ?>" />
        <meta name="twitter:site" content="<?php echo $twitterUser; ?>" />
        <meta name="twitter:image" content="<?php echo $metaImg; ?>" />

        <!-- Styles -->
        <link rel="stylesheet" href="css/main.css">

        <title><?php echo $metaTitle; ?></title>
    </head>

    <body>

        <header class="site-header fixed-top">
            <nav class="navigation">

                <div class="button-left">
                    <a class="btn btn--tel" href="tel:<?php echo $stripped = str_replace(' ', '', $tel) ?>" title="telephon">
                        <i class="icon icon-phone"></i> <span><?php echo $tel ?></span>
                    </a>
                </div><!-- .button-left -->

                <div class="brand">
                    <a href="<?php echo $siteUrl; ?>" title="<?php echo $metaTitle; ?>"></a>
                    <img class="logo" src="<?php echo $logo; ?>" alt="<?php echo $metatitle; ?>">
                </div><!-- .brand -->

                <div class="button-right">
                    <a href="<?php echo $twitter; ?>" class="btn btn--twitter d-none d-sm-block" title="twitter">
                        <i class="icon icon-twitter"></i>
                    </a>
                    <a href="<?php echo $linkedin; ?>" class="btn btn--linkedin d-none d-sm-block" title="twitter">
                        <i class="icon icon-linkedin"></i>
                    </a>
                    <a href="<?php echo $mail; ?>" class="btn btn--mail d-none d-sm-block" title="twitter">
                        <i class="icon icon-mail-alt"></i>
                    </a>
                    <div class="btn btn--share d-block d-sm-none">
                        <i class="icon icon-share"></i>
                    </div>
                </div><!-- .button-right -->

            </nav><!-- .navigation -->
        </header><!-- .site-header -->

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

        <section class="about">

        </section><!-- .about -->

        <section class="services">

        </section><!-- .services -->

        <section class="portfolio">

        </section><!-- .portfolio -->

        <footer class="site-footer">

        </footer><!-- .site-footer -->

        <!-- Scripts -->
        <script src="js/vendor.js"></script>
        <script src="js/app.min.js"></script>

    </body>
</html>
