#Viewer

Rotate 360 degree images on web browsers. It currently supports Google Chrome ,Firefox and Safari.

##Usage
You can embed viewer objects to HTML files.
1. Prepare images with sequential numbers
2. Import [rotate.js](https://github.com/maripo/img_rotation/blob/master/viewer/rotate.js) to a HTML document
3. Add DIV elements in which images are shown
4. Initialize ImageRotate objects

>new ImageRotation(
>				document.getElementById('image_container'),
>				'img/my_image[01-20].jpg'
>				).init();

[Demo Site](http://maripo.org/img_rotation/viewer/)

#Camera Control

![Implementation example](https://github.com/maripo/img_rotation/raw/master/doc/photo_booth.jpg)
