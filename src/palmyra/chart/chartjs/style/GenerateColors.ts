import { interpolateRainbow } from 'd3-scale-chromatic'

function calculatePoint(i, intervalSize, colorRangeInfo) {
    var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return (useEndAsStart
        ? (colorEnd - (i * intervalSize))
        : (colorStart + (i * intervalSize)));
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function generateColors(dataLength) {

    var start = getRandomNumber(0, 0.9);
    var end = getRandomNumber(start, 1);

    var colorRangeInfo = {
        colorStart: start,
        colorEnd: end,
        useEndAsStart: false,
    }

    var colorScale = interpolateRainbow;
    var { colorStart, colorEnd } = colorRangeInfo;
    var colorRange = colorEnd - colorStart;
    var intervalSize = colorRange / dataLength;
    var i, colorPoint;
    var colorArray = [];

    for (i = 0; i < dataLength; i++) {
        colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
        colorArray.push(colorScale(colorPoint));
    }

    return colorArray;
}

export { getRandomNumber };
export default generateColors;