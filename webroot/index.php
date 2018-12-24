<?php include 'php/includes/variables.php';?>

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
        <div id="preloader">
            <div class="logo-loader">
                <img class="logo" src="<?php echo $logo; ?>" alt="<?php echo $metatitle; ?>">
            </div>
            <div class="lds-container">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div><!-- #preloader -->

        <?php include 'php/template-parts/header.php';?>

        <?php include 'php/template-parts/masthead.php';?>

        <?php include 'php/template-parts/about.php';?>

        <?php include 'php/template-parts/services.php';?>

        <?php include 'php/template-parts/portfolio.php';?>

        <?php include 'php/template-parts/footer.php';?>

        <a href="javascript:" id="return-to-top">
            <i class="icon-up-open-1"></i>
        </a><!-- #return-to-top -->

        <!-- Scripts -->
        <script src="js/vendor.js"></script>
        <script src="js/app.min.js"></script>
    </body>
</html>
