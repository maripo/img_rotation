#Viewer

Rotate 360 degree images on web browsers. It currently supports Google Chrome ,Firefox and Safari.

[Sample](https://github.com/maripo/img_rotation/raw/master/viewer/img/ab_animation.gif)

##Usage
You can embed viewer objects to HTML files.
* Prepare images with sequential numbers
* Import [rotate.js](https://github.com/maripo/img_rotation/blob/master/viewer/rotate.js) to a HTML document
* Add DIV elements in which images are shown
* Initialize ImageRotate objects

>new ImageRotation(
>				document.getElementById('image_container'),
>				'img/my_image[01-20].jpg'
>				).init();

[Demo Site](http://maripo.org/img_rotation/viewer/)

#Camera Control

![Implementation example](https://github.com/maripo/img_rotation/raw/master/doc/photo_booth.jpg)
