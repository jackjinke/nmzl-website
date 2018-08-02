module.exports = {resolveHeroImagePath};

const HERO_IMG_HOST = 'https://steamcdn-a.akamaihd.net';

function resolveHeroImagePath(imgPathWithNoHostname) {
    return HERO_IMG_HOST + imgPathWithNoHostname;
}