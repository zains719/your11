const ShirtStripes = ({ shirtColor, stripeColor, sleeveColor, styleProps }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={styleProps} viewBox="0 0 375 374.999991" version="1.2">
      <defs>
      <clipPath id="clip1">
        <path d="M 4 7.324219 L 371 7.324219 L 371 367.324219 L 4 367.324219 Z M 4 7.324219 "/>
      </clipPath>
      </defs>
      <g id="surface1">
      <g clip-path="url(#clip1)" clip-rule="nonzero">
      </g>
      {/* sleeve color */}
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${sleeveColor}`, fillOpacity: 1 }} d="M 67.027344 41.957031 L 10.265625 119.195312 C 10.265625 119.195312 29.644531 137.433594 57.34375 173.289062 L 89.152344 126.515625 L 89.152344 72.105469 L 67.027344 41.957031 "/>
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${sleeveColor}`, fillOpacity: 1 }} d="M 308.347656 41.957031 L 365.105469 119.195312 C 365.105469 119.195312 345.726562 137.433594 318.03125 173.289062 L 286.222656 126.515625 L 286.222656 72.105469 L 308.347656 41.957031 "/>

      {/* shirt color */}
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${shirtColor}`, fillOpacity: 1 }} d="M 67.027344 42.695312 C 67.027344 42.695312 138.957031 12.542969 138.957031 12.796875 C 141.839844 31.382812 159.367188 61.609375 188.113281 61.605469 C 216.863281 61.605469 229.59375 32.484375 237.273438 12.796875 C 237.273438 12.542969 309.203125 42.695312 309.203125 42.695312 C 287.890625 96.382812 289.40625 361.746094 289.40625 361.746094 L 86.824219 361.746094 C 86.824219 361.746094 88.339844 96.382812 67.027344 42.695312 "/>

      {/* stripe */}
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${stripeColor}`, fillOpacity: 1 }} d="M 100.660156 360.695312 L 100.660156 39.058594 L 120.160156 39.058594 L 120.160156 360.695312 Z M 100.660156 360.695312 "/>
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${stripeColor}`, fillOpacity: 1 }} d="M 139.363281 360.699219 L 139.363281 70.558594 L 158.863281 70.558594 L 158.863281 360.699219 Z M 139.363281 360.699219 "/>
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${stripeColor}`, fillOpacity: 1 }} d="M 177.746094 360.699219 L 177.746094 70.558594 L 197.246094 70.558594 L 197.246094 360.699219 Z M 177.746094 360.699219 "/>
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${stripeColor}`, fillOpacity: 1 }} d="M 216.515625 360.699219 L 216.515625 70.558594 L 236.015625 70.558594 L 236.015625 360.699219 Z M 216.515625 360.699219 "/>
      <path style={{stroke: "none", fillRule: "nonzero", fill: `${stripeColor}`, fillOpacity: 1 }} d="M 256.011719 360.691406 L 256.011719 37.558594 L 275.511719 37.558594 L 275.511719 360.691406 Z M 256.011719 360.691406 "/>
      </g>
      </svg>
    )
  }
  
  export default ShirtStripes