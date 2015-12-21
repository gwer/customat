;(function() {
    var paletteConfigs = {
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
        colorFormats = {
            hex: {
                regexp: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                convert: {
                    toInt: hex2dec,
                    fromInt: dec2hex
                },
                get: data => data.join('')
            },
            hexHash: {
                regexp: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                convert: {
                    toInt: hex2dec,
                    fromInt: dec2hex
                },
                get: data => '#' + data.join('')
            },
            rgb: {
                regexp: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                convert: {
                    toInt: dec2dec,
                    fromInt: dec2dec
                },
                get: data => 'rgb(' + data.join() + ')'
            },
            rgbPercent: {
                regexp: /^rgb\((\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
                convert: {
                    toInt: per2dec,
                    fromInt: dec2per
                },
                get: data => 'rgb(' + data.join('%,') + '%)'
            }
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
    
    function dec2dec(dec) {
        return Math.round(dec)
    }
    
    function per2dec(per) {
        return Math.round(per * 2.55)
    }
    
    function dec2per(per) {
        return Math.round(per / 2.55)
    }
    
    function getPalette(baseSplit, colorFormat) {
        var palette = {},
            baseNormalized = normalizeColor(baseSplit, colorFormat)
        
        if (baseNormalized.some(ch => ch < 0 || ch > 255)) return null;

        for (var i in paletteConfigs) {
            palette[i] =  getOriginalFormat(getColor(baseNormalized,
                                                     paletteConfigs[i]),
                                            colorFormat)
        }

        return palette        
    }
    
    function normalizeColor(baseSplit, colorFormat) {
        return baseSplit.map(colorFormat.convert.toInt)
    }

    function getColor(base, config) {
        var color = base.slice()
        
        for (var ch in color) {
            color[ch] = color[ch]*config.alpha
                        + config.blend*(1 - config.alpha)
        }
        return color
    }

    function getOriginalFormat(color, colorFormat) {
        return colorFormat.get(color.map(colorFormat.convert.fromInt))
    }
    
    function customat(base) {
        var result
        
        for (var format in colorFormats) {
            if (result = colorFormats[format].regexp.exec(base)) {
                return getPalette(result.slice(1), colorFormats[format])
            }
        }        
        return null
    }

    if (typeof module !== 'undefined'
        && typeof module.exports !== 'undefined') {
        module.exports = customat
    } else {
        window.customat = customat
    }
})()
