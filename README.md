# Customat
Library for generation color palette based on the base color for material design. 

## Using
```
<script src="customat.js"></script>
<script>
    var baseColor = '009688',
        palette = customat(baseColor)

    console.log(customat)
</script>
```
##### Output:
```
{
    50: "e0f2f1",
    100: "b2dfdb",
    200: "80cbc4",
    300: "4db6ac",
    400: "26a69a",
    500: "009688",
    600: "00897c",
    700: "00786d",
    800: "00695f",
    900: "004d45"
}
```

## Version
0.1.0
