#jQuery-Cake-Map-iFrame
======================

Embed google maps iFrame.  Easy as cake.

## About

I really like the way the google maps vanilla embed functions when needing something quick and simple.  This is an attempt at making it a little bit easier to use that same embed method by simply passing in an address.

## Setup
Include the jQuery library and the cake-map-iframe files in your page:
```html
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
	<script src="jquery.cake-map-iframe.min.js"></script>
	<script>
		// Select an empty element to apply the map to
		$("#myMap").cakeMapIframe({ location: "1600 Pennsylvania Avenue Northwest  Washington, DC 20500" });

		// To apply custom dimensions
		$("#myBiggerMap").cakeMapIframe({ 
			location: "1600 Pennsylvania Avenue Northwest  Washington, DC 20500",
			width: 800,
			height: 800
		});
	</script>
```

## Options

The options are pretty slim right now.

### location
This is not a magic bullet and does not have a failsafe of any sort.  Structure you locations simialr to this - 612 Wharf Avenue, Newark, New Jersey - and you should typically get a good result. (type: String, default: Miami, FL)

### width
Embed width (type: Integer, default: 425)

### height
Embed height (type: Integer, default: 350)