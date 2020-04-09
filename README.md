## 11Slider
tiny ES6 slider with minimal size (2.8kb and 1.1 in gzip)

![Example](https://i.imgur.com/sR1y4Li.png)

#### Install
Build with `npm run build`
Put in HTML `<script src="./dist/main.js" type="text/javascript"></script>`

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
##### Example
index.html with included css
