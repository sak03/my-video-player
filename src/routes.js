import React from "react";

const Home = React.lazy(() => import('./views/home/Home'));
const Favourite = React.lazy(() => import('./views/favourite/Favourite'));
const Recomended = React.lazy(() => import('./views/recomended/Recomended'));
const VideoWatching = React.lazy(() => import('./views/video-watching/VideoWatching'));

const routesList = [
    { path: '/', exact: true, name: 'Home', element: Home },
    { path: '/favourite', exact: true, name: 'Home', element: Favourite },
    { path: '/recomended', exact: true, name: 'Home', element: Recomended },
    { path: '/video-watching', exact: true, name: 'Home', element: VideoWatching },
]

export default routesList;