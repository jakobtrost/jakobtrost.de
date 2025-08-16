<?php

$colorschemes = array(
	'dark' => array(
		'slug'  => 'dark',
		'title' => 'Dark Color Scheme',
		'color' => '#4f52b4'
	),
	'vibrant' => array(
		'slug'  => 'vibrant',
		'title' => 'Vibrant Color Scheme',
		'color' => '#f72585'
	),
	'orange' => array(
		'slug'  => 'orange',
		'title' => 'Orange Color Scheme',
		'color' => '#f77f00'
	),
	'cyan' => array(
		'slug'  => 'cyan',
		'title' => 'Cyan Color Scheme',
		'color' => '#2d00f7'
	),
	'aqua' => array(
		'slug'  => 'aqua',
		'title' => 'Aqua Color Scheme',
		'color' => '#00a896'
	),
	// 'gray' => array(
	// 	'slug'  => 'gray',
	// 	'title' => 'Gray Color Scheme'
	// )
);
$numeric_keys = array( 0, 0, 0, 1, 1, 3, 3, 4 );
$random_number = rand( 0, count($numeric_keys) - 1 );
$selected_colorscheme = array_values( $colorschemes )[ $numeric_keys[ $random_number ] ];
?>
<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="UTF-8">	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Jakob Trost | Developer</title>
	<meta name="theme-color" content="<?php echo $selected_colorscheme['color']; ?>">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta property="og:title" content="Jakob Trost | Developer">
	<meta property="og:type" content="website">
	<meta property="og:description" content="Jakob Trost | Web Developer & UI-Designer @ GREYD">
	<meta property="og:url" content="https://www.jakobtrost.de">
	<meta property="og:image" content="https://www.jakobtrost.de/img/icon/apple-touch-icon.png">
	<meta property="og:locale" content="de_DE">
	<meta name="description" content="Jakob Trost | Web Developer & UI-Designer @ GREYD">
	<meta name="keywords" content="Developer, Entwickler, Javascript, Full-Stack Web, Webdesign, UX, UI">
	<meta name="google-site-verification" content="5nxSxw0ciCHH565_tJ1WX2D7fykdyyheX7klyX-CvpE">
	<link rel="icon" type="image/png" href="img/favicon-32.png" sizes="32x32">
	<link rel="apple-touch-icon" sizes="180x180" href="img/favicon-180png">
	<meta name="msapplication-TileColor" content="<?php echo $selected_colorscheme['color']; ?>">
	<meta name="msapplication-TileImage" content="img/favicon-144.png">
	<link rel="stylesheet" href="style.css?v=1.4">
	<link rel="stylesheet" href="fonts/clash-display/css/clash-display.css">
</head>
<!--yyyyyyyyyyNmo.                      
      N/            hy/hh/`             
      N/            hs  .ods-           
      N/            hs     :yh+`        
      N/            hs       `+hy:`     
      N/            hs          -sho.   
      N+````````````hy            `/yy/`
      shhdmmNNNNNNNNMNhs/-.`         .sm
        `.-:+shdmMMMMMMMMMNdy+        /M
                `hd:/+osyyhdNN    :/-./M
                 yy         +N    dNmdhm
                 yy         +N    dy....
                 yy         +N    ds    
                 yy         +N    ds    
                 yy         +N    ds    
       :-        hy         +N    ds    
     /hyds-    `+m:         +m   `N/    
  `/hs- `/syssyyo.          hy   sd`    
`+do.      `````           +N. .yd.     
hN-                       om::sh+`      
`/dy:                   /dMdyo-`        
   -ohy+:`          ./ydy+-`            
      `:+syyyyyyyyy-->                  
<body data-colorscheme="<?php echo $selected_colorscheme['slug']; ?>">
	<main>
		<div class="card">
			<div class="card--border"></div>
			<div class="card--gradient"></div>
			<div class="card--inner">
				<div class="card--inner-bottom">
					<h1 id="title">Jakob Trost</h1>
					<h2 id="description">CTO @ <a href="https://greyd.de" target="_blank" rel="noopener noreferrer">Greyd</a></h2>
				</div>
				<div id="actions" class="card--inner-top">
					<a href="mailto:hello@jakobtrost.de">hello@jakobtrost.de</a><br>
					<a href="tel:+4915751061976">01575 1061976</a><br>
					<a href="https://www.linkedin.com/in/jakobtrost/" target="_blank">LinkedIn</a><br>
				</div>
				<div id="logo" class="card--inner-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="62"
						height="74"
						viewBox="0 0 62 74"
						fill="none"
						role="img"
						aria-labelledby="logoTitle"
					>
						<title id="logoTitle">Logo von Jakob Trost</title>
						<path d="M9.63195 0H31.2811V21.5306H9.63195V0ZM0 64.214L10.4296 54.0908C12.64 57.1807 16.233 59.2431 19.5981 59.2431H19.6931C24.5167 59.1977 28.1704 55.9228 28.5806 51.2692C28.611 50.9557 28.6224 50.6611 28.6224 50.3664V29.2438L45.2276 31.5102V52.2853C45.2276 58.4725 42.9146 64.0364 38.7215 67.9573C37.3529 69.2257 35.8201 70.3067 34.1638 71.2718C30.443 73.0889 26.3026 74.0596 22.1125 73.9972C13.8326 74.0047 4.71723 69.929 0 64.214ZM46.2987 65.4152L42.5006 67.232L42.607 67.0961L42.8386 66.7901C42.983 66.5975 43.1273 66.4124 43.264 66.2046C43.3425 66.0938 43.4185 65.9843 43.4919 65.876C43.6286 65.6758 43.7616 65.468 43.8945 65.2641L44.092 64.9506C44.2439 64.6937 44.3959 64.4368 44.5402 64.1762L44.6389 64.0025C44.8137 63.6814 44.9808 63.3565 45.1403 63.0241C45.1821 62.9373 45.22 62.8466 45.2618 62.7559C45.3758 62.5104 45.4859 62.2687 45.5923 62.0005L45.7404 61.6228C45.8315 61.3961 45.9189 61.2695 46.0025 60.9428C46.0518 60.8144 46.0974 60.6898 46.143 60.5651C46.2227 60.3271 46.3025 60.0892 46.3785 59.8474C46.4127 59.7303 46.4506 59.617 46.4886 59.4999C46.5798 59.1826 46.6671 58.8616 46.7507 58.5405C46.7507 58.4989 46.7735 58.4574 46.7811 58.4196C46.8722 58.0419 46.952 57.6868 47.0279 57.3166L47.0849 56.9842C47.133 56.7324 47.1786 56.468 47.2216 56.191L47.2786 55.7793C47.3128 55.53 47.3432 55.2845 47.3698 55.0238C47.3698 54.8803 47.3964 54.7405 47.4115 54.6008C47.4343 54.3364 47.4533 54.0719 47.4685 53.8038C47.4685 53.6791 47.4685 53.5582 47.4875 53.426C47.4875 53.0483 47.5179 52.6441 47.5179 52.2513V27.1625L33.5599 21.8743V1.2974L62 23.4192V32.6585L54.5747 29.8406V50.797C54.5633 57.1278 51.5477 62.45 46.2987 65.4076V65.4152Z" fill="white"/>
					</svg>
				</div>
			</div>
		</div>
	</main>
	<fieldset>
		<?php
		foreach ( $colorschemes as $colorscheme ) {
			echo sprintf(
				'<input type="radio" name="colorscheme" value="%1$s" id="%1$s" %3$s data-color="%4$s">'.
				'<label for="%1$s"><span class="visually-hidden">%2$s</span></label>',
				$colorscheme[ 'slug' ],
				$colorscheme[ 'title' ],
				$colorscheme[ 'slug' ] === $selected_colorscheme['slug'] ? 'checked autofocus' : '',
				$colorscheme[ 'color' ]
			);
		}
		?>
	</fieldset>
	<script src="script.js?v=1.4"></script>
</body>
</html>