var ImageRotation = function (container, images)
{
	this.container = container;
	var imgEx = '(.*)\\[(\\d+)\\-(\\d+)\\](.*)';
	var imgRegEx = new RegExp(imgEx);
	if (!imgRegEx.test(images))
	{
		throw 'Illegal parameter. Parameter should match /' + imgEx + '/.';
	}
	this.imgPrefix = RegExp.$1;
	this.imgSuffix = RegExp.$4;
	this.imgNumFrom = parseInt(RegExp.$2);
	this.imgNumTo = parseInt(RegExp.$3);
	this.imgNumFormat =RegExp.$2.length;
};

ImageRotation.prototype.init = function()
{
	// Prepare img tags & read ahead
	this.index = 0;
	this.imgs = [];
	for (var imgNum = this.imgNumFrom; imgNum <= this.imgNumTo; imgNum ++)
	{
		var img = document.createElement('IMG');
		var numStr = new String(imgNum);
		while (numStr.length < this.imgNumFormat)
			numStr = '0' + numStr;
		var url = this.imgPrefix + numStr + this.imgSuffix;
		img.src = url;
		img.style.display = 'none';
		this.container.appendChild(img);
		this.imgs.push(img);
	}
	var firstImage = this.imgs[0];
	firstImage.style.display = '';
	firstImage.addEventListener('load', this.getFirstImageLoadedFunc(firstImage),false);
	
};
ImageRotation.prototype.mousemove = function (event)
{
	var currentIndex = this.index;
	var step = this.width / this.imgs.length / 2;
	this.prevCursorX = this.prevCursorX || 0;
	if (event.pageX < this.prevCursorX - step)
	{
		currentIndex = (currentIndex + this.imgs.length- 1) % this.imgs.length;
		this.show(currentIndex);
		this.prevCursorX = event.pageX;
	}
	else if (event.pageX > this.prevCursorX + step)
	{
		currentIndex = (currentIndex + 1) % this.imgs.length;
		this.show(currentIndex);
		this.prevCursorX = event.pageX;
	}
};
ImageRotation.prototype.mousedown = function (event)
{
	console.log("mousedown");
};
ImageRotation.prototype.mouseup = function (event)
{
	console.log("mouseup");
};
ImageRotation.prototype.mouseout = function (event)
{
	console.log("mouseout");
};

ImageRotation.prototype.firstImageLoaded = function (firstImage)
{
	this.cover = document.createElement('DIV');
	this.container.style.position = 'relative';
	this.width = firstImage.width;
	with (this.cover.style)
	{
		position = 'absolute';
		width = firstImage.clientWidth + 'px';
		height = firstImage.clientHeight + 'px';
		left = 0;
		top = 0;
		zIndex = 2;
		cursor = 'move';
	}
	this.container.appendChild(this.cover);
	this.cover.addEventListener('mousemove',this.getMousemoveFunc(),false);
	this.cover.addEventListener('mousedown',this.getMousedownFunc(),false);
	this.cover.addEventListener('mouseup',this.getMouseupFunc(),false);
	this.cover.addEventListener('mouseout',this.getMouseoutFunc(),false);
};

ImageRotation.prototype.show = function (index)
{
	this.imgs[this.index].style.display = 'none';
	this.imgs[index].style.display = '';
	this.index = index;
};


ImageRotation.prototype.getMousemoveFunc = function(event)
{
	var self = this;
	return function(event){self.mousemove(event);}
};
ImageRotation.prototype.getMousedownFunc = function(event)
{
	var self = this;
	return function(event){self.mousedown(event);}
};
ImageRotation.prototype.getMouseupFunc = function(event)
{
	var self = this;
	return function(event){self.mouseup(event);}
};
ImageRotation.prototype.getMouseoutFunc = function(event)
{
	var self = this;
	return function(event){self.mouseout(event);}
};
ImageRotation.prototype.getFirstImageLoadedFunc = function(firstImage)
{
	var self = this;
	return function(event){self.firstImageLoaded(firstImage);}
};