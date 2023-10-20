const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosContent = [
    { id: "/assets/images/album1.png", width: 513, height: 227 },
    { id: "/assets/images/album2.png", width: 513, height: 296 },
    { id: "/assets/images/album3.png", width: 513, height: 443 },
    { id: "/assets/images/album4.png", width: 513, height: 296 },
    { id: "/assets/images/album5.png", width: 512, height: 297 },
    { id: "/assets/images/album6.png", width: 513, height: 394 },
    { id: "/assets/images/album7.png", width: 513, height: 297 },
    { id: "/assets/images/album8.png", width: 513, height: 446 },
    { id: "/assets/images/album9.png", width: 513, height: 230 },
];

export const photos = photosContent.map((photo) => ({
    src: photo.id,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photo.id,
            width: breakpoint,
            height,
        };
    }),
}));