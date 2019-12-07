import React from 'react';


function calculateBeta(i, slitSize, wavelength) {
    return (Math.PI * slitSize * Math.sin(i)) / wavelength;
}

function calculateIntensity(i, slitSize, wavelength) {
    var result = calculateBeta(i, slitSize, wavelength);
    var sinSquared = Math.pow((Math.sin(result) / result), 2);
    return sinSquared;
}

export function getValues(slitDistance, slitWidth) {
    var values = [];
    const slitSize = 5E-04;
    const wavelength = 700 * 0.000000001;
    const MAX_DIFFRACTION_ORDER = 3;
    const RESOLUTION_CONSTANT = 40;
    var borderX = MAX_DIFFRACTION_ORDER*wavelength*slitDistance/slitWidth;
    var increment = wavelength / (slitSize * RESOLUTION_CONSTANT);
    for (let i = -1 * borderX; i <= borderX; i+= increment) {
        values[i] = calculateIntensity(i, slitSize, wavelength);
    }
    console.log(`slitDistance: ${slitDistance}`);
    console.log(values);
    return values;
}