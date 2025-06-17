/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const result = [];
    for (let i = 0; i < asteroids.length; i++) {
        const leftAsteroid = result[result.length - 1];
        const currentAsteroid = asteroids[i];
        const willColide = leftAsteroid > 0 && currentAsteroid < 0;
        if (!willColide) {
            result.push(currentAsteroid);
        } else if (leftAsteroid + currentAsteroid <= 0) {
            result.pop();
            // will continue the loop until left asteroid is bigger then current
            if (leftAsteroid + currentAsteroid < 0) i--;
        }
    }
    return result;
};