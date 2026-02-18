document.addEventListener( "DOMContentLoaded", function () {

	// ——— Color scheme (critical path first) ——————————————————————————————————

	var s = [ ["dark","#4f52b4"], ["vibrant","#f72585"], ["orange","#f77f00"], ["cyan","#2d00f7"], ["aqua","#00a896"] ];
	var r = s[ [0,0,0,1,1,3,3,4][ Math.random() * 8 | 0 ] ];
	document.body.dataset.colorscheme = r[0];
	var metaTheme = document.querySelector( 'meta[name="theme-color"]' );
	var metaTile = document.querySelector( 'meta[name="msapplication-TileColor"]' );
	if ( metaTheme ) metaTheme.setAttribute( "content", r[1] );
	if ( metaTile ) metaTile.setAttribute( "content", r[1] );
	var selectedRadio = document.querySelector( 'input[name="colorscheme"][value="' + r[0] + '"]' );
	if ( selectedRadio ) {
		selectedRadio.checked = true;
		selectedRadio.focus();
	}

	var liveRegion = document.createElement( "div" );
	liveRegion.id = "live-region";
	liveRegion.setAttribute( "aria-live", "polite" );
	liveRegion.setAttribute( "aria-atomic", "true" );
	liveRegion.className = "visually-hidden";
	document.body.appendChild( liveRegion );

	function announceToScreenReader( message ) {
		liveRegion.textContent = message;
		setTimeout( function () { liveRegion.textContent = ""; }, 1000 );
	}

	document.querySelectorAll( 'input[name="colorscheme"]' ).forEach( function ( radio ) {
		radio.addEventListener( "change", function () {
			document.body.dataset.colorscheme = radio.value;
			if ( metaTheme ) metaTheme.setAttribute( "content", radio.dataset.color );
			if ( metaTile ) metaTile.setAttribute( "content", radio.dataset.color );
			announceToScreenReader( "Color scheme changed to " + radio.value );
		} );
		radio.addEventListener( "keydown", function ( e ) {
			if ( e.key === "Enter" || e.key === " " ) {
				e.preventDefault();
				radio.checked = true;
				radio.dispatchEvent( new Event( "change" ) );
			}
		} );
	} );

	// ——— Card: tilt animation (rAF-throttled) ——————————————————————————————————
	// @link https://codepen.io/akella/pen/XWYrRmb

	var el = document.querySelector( ".card" );
	var w = el.clientWidth;
	var h = el.clientHeight;
	var b = el.getBoundingClientRect();
	var pending = { x: 0.5, y: 0.5 };
	var rafId = 0;

	function animateCardTick() {
		rafId = 0;
		var X = pending.x;
		var Y = pending.y;
		var rX = -( X - 0.5 ) * 10;
		var rY = ( Y - 0.5 ) * 10;
		var bgX = 40 + 20 * X;
		var bgY = 40 + 20 * Y;
		el.style.setProperty( "--x", 100 * X + "%" );
		el.style.setProperty( "--y", 100 * Y + "%" );
		el.style.setProperty( "--r-x", rX + "deg" );
		el.style.setProperty( "--r-y", rY + "deg" );
		el.style.setProperty( "--bg-x", bgX + "%" );
		el.style.setProperty( "--bg-y", bgY + "%" );
	}

	function onTiltMove( e ) {
		var cx = e.clientX != null ? e.clientX : e.touches[0].clientX;
		var cy = e.clientY != null ? e.clientY : e.touches[0].clientY;
		pending.x = ( cx - b.left ) / w;
		pending.y = ( cy - b.top ) / h;
		if ( !rafId ) rafId = requestAnimationFrame( animateCardTick );
	}

	window.addEventListener( "mousemove", onTiltMove );
	window.addEventListener( "touchmove", onTiltMove, { passive: true } );

	// ——— Card: ripple effect —————————————————————————————————————————————————
	// @link https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/

	function addRipple( e ) {
		var X = ( e.clientX - b.left ) / w;
		var Y = ( e.clientY - b.top ) / h;
		var circle = document.createElement( "span" );
		circle.classList.add( "ripple" );
		circle.style.left = 100 * X + "%";
		circle.style.top = 100 * Y + "%";
		var ripple = el.getElementsByClassName( "ripple" )[ 0 ];
		if ( ripple ) ripple.remove();
		el.appendChild( circle );
	}
	el.addEventListener( "click", addRipple );

	// ——— Card: keyboard and accessibility ————————————————————————————————————

	el.setAttribute( "tabindex", "0" );
	el.setAttribute( "role", "button" );
	el.setAttribute( "aria-label", "Interactive card - Click for a ripple effect" );
	el.addEventListener( "keydown", function ( e ) {
		if ( e.key === "Enter" || e.key === " " ) {
			e.preventDefault();
			this.click();
		}
	} );
} );
