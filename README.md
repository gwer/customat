# Customat
Library for generation color palette based on the base color for material design. 

## Usage
Customat using some ES6 features therefore in production you can use ES5-compiled version customat.cmpld.js. 

This is only one function that takes a single argument — the base color. The base color can be specified in one of the following formats:
* Hex: 009688;
* Hex with hash: #009688;
* RGB: rgb(0, 150, 136);
* RGB in percents: rgb(0%, 59%, 53%).
 
Result — an object that contains the generated palette in the same format (see example), or null on error.

## In browser
##### Example:
```
<script src="customat.js"></script>
<script>
    var baseColor = '#009688',
        palette = customat(baseColor)

    console.log(palette)
</script>
```
##### Output:
```
{
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",
    600: "#00897c",
    700: "#00786d",
    800: "#00695f",
    900: "#004d45"
}
```

## In Node.js

##### Install:
``` npm install customat ```

##### Example:
```
var customat = require('./customat')
console.log(customat('rgb(0, 150, 136)'))
```

##### Output:
```
{
    '50': 'rgb(224,242,241)',
    '100': 'rgb(178,223,219)',
    '200': 'rgb(128,203,196)',
    '300': 'rgb(77,182,172)',
    '400': 'rgb(38,166,154)',
    '500': 'rgb(0,150,136)',
    '600': 'rgb(0,137,124)',
    '700': 'rgb(0,120,109)',
    '800': 'rgb(0,105,95)',
    '900': 'rgb(0,77,69)'
}
```

## Version
0.3.0
