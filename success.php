<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Спасибо!</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet">
    <!-- styles -->
    <link rel="stylesheet" href="successCss/style.min.css">
</head>

<body>

    <div class="page__body">
        <div class="page__inner">
            <div class="page__content">
                <div class="logo">
                    <img class="logo__link" src="succesImages/logo.png" alt="logo">
                </div>

                <h6 class="page__title">
                    Спасибо за обращение!
                </h6>

                <p class="page__description">
                    В ближайшее время наш менеджер свяжется с Вами.
                </p>
            </div>
        </div>
    </div>


    <script src="js/main.min.js"></script>

    <?php if (strlen($_GET['p']) > 0) { ?>
		<!-- Meta Pixel Code -->
		<script>
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '<?php echo $_GET['p'] ?>');
		fbq('track', 'Lead');
		</script>
		<noscript><img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=<?php echo $_GET['p'] ?>&ev=Lead&noscript=1"
		/></noscript>
		<!-- End Meta Pixel Code --> 
 	    <?php }?>
 	    <?php if (strlen($_GET['g']) > 0) { ?>
		<?php
			$pixel_id = $_GET['g'];
			$counter_info = explode('/', $pixel_id);
			$counterId = $counter_info[0];
			if (count($counter_info) == 2) {
				$convLabel = $counter_info[1];
			}
		?>
		<script async src="https://www.googletagmanager.com/gtag/js?id=AW-<?= $counterId ?>"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'AW-<?= $counterId ?>');
		</script>
		<script>
			gtag('event', 'conversion', {
				'send_to': 'AW-<?= $counterId ?>/<?= $convLabel ?>',
				'transaction_id': ''
			});
		</script> 
    	<?php }?>
	</body>

</html>