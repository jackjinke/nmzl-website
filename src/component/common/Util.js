module.exports = {resolveHeroImagePath};

const HERO_IMG_HOST = 'https://cdn.dota2.com';

function resolveHeroImagePath(imgPathWithNoHostname) {
    return HERO_IMG_HOST + imgPathWithNoHostname;
}