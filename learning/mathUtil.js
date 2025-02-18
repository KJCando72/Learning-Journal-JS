export const PI = 3.14159;

export function getCircum(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getSurfaceVolume(radius){
    return 4 * PI * radius * radius;
}