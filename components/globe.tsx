'use client';

import Globe from 'react-globe.gl';
import { useEffect, useRef, useState } from 'react';


interface CableGeoFeature {
    geometry: any;
    properties: any;
}

interface CableGeo {
    features: CableGeoFeature[];
}

export const World = () => {
    const [cablePaths, setCablePaths] = useState<any>([]);

    useEffect(() => {
        const fetchCableData = async () => {
            const response = await fetch('/earth_paths.json');
            const cablesGeo: CableGeo = await response.json();
            const newCablePaths: any[] = [];

            cablesGeo.features.forEach(({ geometry, properties }) => {
                geometry.coordinates.forEach((coords: any) => {
                    newCablePaths.push({ coords, properties });
                });
            });

            setCablePaths(newCablePaths);
        };

        fetchCableData();
    }, []);

    const globeEl = useRef<any>()
    const viewportWidth = window.innerWidth;
    const elem: HTMLCanvasElement = document.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
    
    if (elem) {
        elem.style.borderRadius = '9999px';
    }

    useEffect(() => {
        // Auto-rotate
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 1;
            globeEl.current.controls().enableZoom = false;
            globeEl.current.pointOfView({
                lat: 23.5,
                lng: 0,
                altitude: 2.5,
        })
        }
    }, [globeEl])

    return <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pathsData={cablePaths}
        pathPoints="coords"
        pathPointLat={p => p[1]}
        pathPointLng={p => p[0]}
        pathColor={(path: any) => path.properties.color}
        pathLabel={(path: any) => path.properties.name}
        pathDashLength={0.1}
        pathDashGap={0.008}
        pathDashAnimateTime={12000}
        width={viewportWidth/2.5}
        height={600}
        enablePointerInteraction={false}
        backgroundColor='rgba(0,0,0,0)'
    />;
};