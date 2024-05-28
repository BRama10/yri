import React from 'react';

interface ColorStop {
    score: number;
    color: string;
}

// Define the color stops
const colorStops: ColorStop[] = [
    { score: 0, color: '#ff0000' },     // red
    { score: 55, color: '#ffa500' },    // orange
    { score: 80, color: '#90ee90' },    // light green
    { score: 90, color: '#008000' }     // proper green
];

function interpolateColor(color1: string, color2: string, factor: number): string {
    const hex = (color: string) => parseInt(color, 16);
    const r1 = hex(color1.slice(1, 3));
    const g1 = hex(color1.slice(3, 5));
    const b1 = hex(color1.slice(5, 7));
    const r2 = hex(color2.slice(1, 3));
    const g2 = hex(color2.slice(3, 5));
    const b2 = hex(color2.slice(5, 7));
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export function getColorForScore(score: number): string {
    for (let i = 0; i < colorStops.length - 1; i++) {
        const start = colorStops[i];
        const end = colorStops[i + 1];
        if (score >= start.score && score <= end.score) {
            const factor = (score - start.score) / (end.score - start.score);
            return interpolateColor(start.color, end.color, factor);
        }
    }
    return colorStops[colorStops.length - 1].color; // Return the last color if score is above the last stop
}
