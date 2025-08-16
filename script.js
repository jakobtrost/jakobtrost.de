
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
	 * Colorscheme change with accessibility improvements
	 */
	document.querySelectorAll( 'input[name="colorscheme"]' ).forEach( radio => {
		radio.addEventListener( 'change', function () {
			document.body.dataset.colorscheme = radio.value;
			document.querySelector( 'meta[name="theme-color"]' ).setAttribute( "content", radio.dataset.color );
			
			// Announce color scheme change to screen readers
			announceToScreenReader(`Color scheme changed to ${radio.value}`);
		} );
		
		// Add keyboard navigation support
		radio.addEventListener( 'keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				radio.checked = true;
				radio.dispatchEvent(new Event('change'));
			}
		});
	} );

	/**
	 * Accessibility: Announce changes to screen readers
	 */
	function announceToScreenReader(message) {
		// Create or get existing live region
		let liveRegion = document.getElementById('live-region');
		if (!liveRegion) {
			liveRegion = document.createElement('div');
			liveRegion.id = 'live-region';
			liveRegion.setAttribute('aria-live', 'polite');
			liveRegion.setAttribute('aria-atomic', 'true');
			liveRegion.className = 'visually-hidden';
			document.body.appendChild(liveRegion);
		}
		
		// Announce the message
		liveRegion.textContent = message;
		
		// Clear after a short delay
		setTimeout(() => {
			liveRegion.textContent = '';
		}, 1000);
	}

	/**
	 * Enhanced keyboard navigation for the card
	 */
	el.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			// Trigger click event for keyboard users
			this.click();
		}
	});

	// Make card focusable for keyboard users
	el.setAttribute('tabindex', '0');
	el.setAttribute('role', 'button');
	el.setAttribute('aria-label', 'Interactive card - Click for a ripple effect');
} );