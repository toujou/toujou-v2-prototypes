import { css } from 'lit';

export const ToujouMapStyles = css`
  :host {
    position: relative;
    display: block;
    height: 100%;
  }

  #map {
    width: 100%;
    height: 100%;
  }

  slot:not([name]) {
    display: none;
  }

  /* OVERWRITE SOME MAPBOX DEFAULT STYLES */
  #map .mapboxgl-popup {
    will-change: auto;
    max-width: 90vw !important;
    width: 320px;
  }

  #map .mapboxgl-popup-content {
    padding: 0;
  }

  #map .geocoder__custom-icon {
    height: var(--toujou-location-finder-geocoder-icon-height, 2rem);
    width: var(--toujou-location-finder-geocoder-icon-width, 2rem);
    background-color: var(--toujou-location-finder-geocoder-icon-color, var(--primary-color));
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-image: var(--toujou-location-finder-geocoder-icon-image);
    -webkit-mask-image: var(--toujou-location-finder-geocoder-icon-image);
  }

  #map .mapboxgl-control-container {
    display: var(--toujou-map-control-container-display, inherit);
  }

  #map .mapboxgl-ctrl-top-left {
    display: var(--toujou-map-ctrl-top-left-display, inherit);
  }

  #map .mapboxgl-ctrl-top-right {
    display: var(--toujou-map-ctrl-top-right-display, inherit);
  }

  #map .mapboxgl-ctrl-bottom-left {
    display: var(--toujou-map-ctrl-bottom-left-display, inherit);
  }

  #map .mapboxgl-ctrl-bottom-right {
    display: var(--toujou-map-ctrl-bottom-right-display, inherit);
  }
`;