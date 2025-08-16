
document.addEventListener( "DOMContentLoaded", function () {

	/**
	 * Animate card on mouseover.
	 * @link https://codepen.io/akella/pen/XWYrRmb
	 */
	const el = document.querySelector( ".card" );
	let w = el.clientWidth;
	let h = el.clientHeight;
	let b = el.getBoundingClientRect();

	const animateCard = ( e ) => {

		let X = ( e.clientX - b.left ) / w;
		let Y = ( e.clientY - b.top ) / h;

		let rX = -( X - 0.5 ) * 10;
		let rY = ( Y - 0.5 ) * 10;

		let bgX = 40 + 20 * X;
		let bgY = 40 + 20 * Y;

		el.style.setProperty( "--x", 100 * X + "%" );
		el.style.setProperty( "--y", 100 * Y + "%" );

		el.style.setProperty( "--r-x", rX + "deg" );
		el.style.setProperty( "--r-y", rY + "deg" );

		el.style.setProperty( "--bg-x", bgX + "%" );
		el.style.setProperty( "--bg-y", bgY + "%" );
	};

	// const body = document.querySelector( "body" );
	window.addEventListener( "mousemove", animateCard );
	window.addEventListener( "touchmove", animateCard );

	/**
	 * Add a ripple effect to the card on click
	 * @link https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
	 */
	const addRipple = ( e ) => {

		let X = ( e.clientX - b.left ) / w;
		let Y = ( e.clientY - b.top ) / h;

		const circle = document.createElement( "span" );
		circle.classList.add( "ripple" );
		circle.style.left = 100 * X + "%";
		circle.style.top = 100 * Y + "%";

		// remove old one
		const ripple = el.getElementsByClassName( "ripple" )[ 0 ];
		if ( ripple ) {
			ripple.remove();
		}

		// append child
		el.appendChild( circle );
	};
	el.addEventListener( "click", addRipple );

	/**
	 * Colorscheme change
	 */
	document.querySelectorAll( 'input[name="colorscheme"]' ).forEach( radio => {
		radio.addEventListener( 'click', function () {
			document.body.dataset.colorscheme = radio.value;
			document.querySelector( 'meta[name="theme-color"]' ).setAttribute( "content", radio.dataset.color );
		} );
	} );
} );