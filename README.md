### 11Slider
tiny ES6 slider with minimal size (2.8kb and 1.1 in gzip)

#### Usage
```
	window.onload = function () {
		const slider = new Slider({
			delay: 5000
		});
		slider.init();
	};
```
#### Options
```
    autoplay = true, //infinity loop
	sliderId = 'slider', // node id to render slider
	dotsId = 'dots', // node id to render dots
	transitionFade = 1000, //fade delay
	activeSlide = 0 // start slide
```
