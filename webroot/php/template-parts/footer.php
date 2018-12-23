<?php
/*
* Template file: Footer
*/
?>

<footer class="site-footer">

    <div class="footer-block">
        <p class="footer-block__intro"><?php echo $footer_intro; ?></p>

        <div class="footer-block__contact">
            <a href="tel:<?php echo $stripped = str_replace(' ', '', $tel) ?>" class="btn-fancy btn-fancy--footer" title="telephon">
                <i class="icon icon-phone"></i><span><?php echo $tel ?></span>
            </a>
            <a href="mailto:<?php echo $mail; ?>" class="btn-fancy btn-fancy--footer" target="_blank">
                <i class="icon icon-mail-alt"></i><?php echo $mail; ?>
            </a>
        </div><!-- .footer-block__contact -->

        <div class="footer-block__social">
            <a href="<?php echo $twitter; ?>" class="btn-social" title="twitter">
                <i class="icon icon-twitter"></i>
            </a>
            <a href="<?php echo $linkedin; ?>" class="btn-social" title="linkedin">
                <i class="icon icon-linkedin"></i>
            </a>
        </div><!-- .social-box -->
    </div><!-- .footer-block -->

    <div class="sub-footer">
        Copyright &copy; <?php echo date("Y"); ?> | Luca Carrozzo
    </div><!-- .sub-footer -->

</footer><!-- .site-footer -->
