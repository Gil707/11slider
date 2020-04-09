module.exports = {
	fadeIn: (el, ms) => {
		if (ms) {
			let opacity = 0;
			const timer = setInterval(() => {
				opacity += 50 / ms;
				if (opacity >= 1) {
					clearInterval(timer);
					opacity = 1;
				}
				el.style.opacity = opacity;
			}, 50);
		} else {
			el.style.opacity = '1';
		}
		el.style.zIndex = '3';
	},

	fadeOut: (el, ms) => {
		el.style.opacity = '0';
		el.style.zIndex = '0';
	},

	setDotActive: (dot) => {
		dot.classList.add('active');
	},

	setDotInactive: (dot) => {
		dot.classList.remove('active');
	}
};
