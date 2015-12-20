# Customat
Library for generation color palette based on the base color for material design. 

## Using
Customat using some ES6 features therefore in production you can use ES5-compiled version customat.cmpld.js. 

This is only one function that takes a single argument — the base color. The base color can be specified in one of the following formats:
* Hex: 009688;
* Hex with hash: #009688;
* RGB: rgb(0, 150, 136);
* RGB in percents: rgb(0%, 59%, 53%).
 
Result — an object that contains the generated palette in the same format (see example), or null on error.

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

## Version
0.2.0
