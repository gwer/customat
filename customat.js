;(function() {
    var config = {
            50: {
                alpha: 0.12,
                blend: 255
            },
            100: {
                alpha: 0.301,
                blend: 255
            },
            200: {
                alpha: 0.5,
                blend: 255
            },
            300: {
                alpha: 0.7,
                blend: 255
            },
            400: {
                alpha: 0.85,
                blend: 255
            },
            500: {
                alpha: 1,
                blend: 255
            },
            600: {
                alpha: 0.91,
                blend: 0
            },
            700: {
                alpha: 0.8,
                blend: 0
            },
            800: {
                alpha: 0.7,
                blend: 0
            },
            900: {
                alpha: 0.51,
                blend: 0
            }
        },
        palette = {},
        i = 0

    function getColor(base, config) {
        var color = hex2rgb(base)

        for (var i in color) {
            color[i] = (color[i]*config.alpha + config.blend*(1 - config.alpha))
        }
        return color
    }

    function hex2rgb(hex) {
        return {
            r: hex2dec(hex.slice(0, 2)),
            g: hex2dec(hex.slice(2, 4)),
            b: hex2dec(hex.slice(4, 6))
        }
    } 

    function rgb2hex(rgb) {
        return dec2hex(rgb.r) + dec2hex(rgb.g) + dec2hex(rgb.b)
    }

    function hex2dec(hex) {
        return parseInt(hex, 16)
    }

    function dec2hex(dec) {
        var hex 
        
        dec = Math.round(dec)
        hex = dec.toString(16)
        return dec > 0xF ? hex : '0' + hex
    }

    window.customat = function (base) {
        for (i in config) {
            palette[i] = rgb2hex(getColor(base, config[i]))
        }

        return palette
    }
})()
