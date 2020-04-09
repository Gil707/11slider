const helper = require('./helper');

class Slider {
	constructor(params = {}) {
		const {
			autoplay = true,
			sliderId = 'slider',
			dotsId = 'dots',
			transitionFade = 1000,
			activeSlide = 0
		} = params;

		const slider = document.getElementById(sliderId);
		this.current = activeSlide;
		this.autoplay = autoplay;
		this.transitionFade = transitionFade;
		this.dots = document.getElementById(dotsId);

		this.slides = slider.children;
		this.dotsElements = this.dots.children;
		this.dots.classList.add('slider-dots');

		this.isAnimating = false;
		this.xDown = null;

		slider.addEventListener('touchstart', (e) => { this.handleTouchStart(e) });
		slider.addEventListener('touchmove', (e) => { this.handleTouchMove(e) });
	}

	nextSlideIndex() {
		return (this.current !== this.slides.length - 1) ? this.current + 1 : 0
	}

	prevSlideIndex() {
		return this.current === 0 ? this.slides.length - 1 : this.current - 1
	}

	hideAll() {
		for (let i = 0; i < this.slides.length; i++) {
			helper.fadeOut(this.slides[i], this.transitionFade);
			helper.setDotInactive(this.dotsElements[i]);
		}
	}

	selectSlide(n) {
		this.hideAll();
		helper.fadeIn(this.slides[n]);
		helper.setDotActive(this.dotsElements[n]);
		this.current = n;
	}

	handleTouchStart(e) {
		this.xDown = e.touches[0].clientX;
	};

	handleTouchMove(e) {
		if (!this.xDown) {
			return;
		}

		const xDiff = this.xDown - e.touches[0].clientX;
		this.selectSlide(xDiff > 0 ? this.nextSlideIndex() : this.prevSlideIndex());
		this.xDown = null;

		return;
	};

	init() {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].classList.add('slide');

			const dot = document.createElement('span');
			dot.addEventListener('click', () => {
				this.selectSlide(i);
			});
			dot.className = 'slider-dot ' + (i ? '' : 'active');
			this.dots.appendChild(dot)
		}

		this.selectSlide(this.current);

		if (this.slides.length > 0 && this.autoplay) {
			setInterval(() => {
				if (!this.isAnimating) {
					this.selectSlide(this.nextSlideIndex(), 200);
				}
			}, 7000);
		}
	}
}

module.exports = Slider;
