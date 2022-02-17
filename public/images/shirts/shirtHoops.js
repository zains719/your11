const ShirtHoops = ({ shirtColor, hoopsColor, sleeveColor, styleProps }) => {
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
    
    {/* hoops color */}
    <path style={{stroke: "none", fillRule: "nonzero", fill: `${hoopsColor}`, fillOpacity: 1 }} d="M 77.101562 75.664062 L 297.527344 75.664062 L 297.527344 95.164062 L 77.101562 95.164062 Z M 77.101562 75.664062 "/>
    <path style={{stroke: "none", fillRule: "nonzero", fill: `${hoopsColor}`, fillOpacity: 1 }} d="M 292.628906 150.847656 L 82.710938 150.847656 L 82.710938 131.347656 L 292.628906 131.347656 Z M 292.628906 150.847656 "/>
    <path style={{stroke: "none", fillRule: "nonzero", fill: `${hoopsColor}`, fillOpacity: 1 }} d="M 290.507812 212.152344 L 84.328125 212.152344 L 84.328125 192.652344 L 290.507812 192.652344 Z M 290.507812 212.152344 "/>
    <path style={{stroke: "none", fillRule: "nonzero", fill: `${hoopsColor}`, fillOpacity: 1 }} d="M 288.503906 272.933594 L 86.824219 272.933594 L 86.824219 253.433594 L 288.503906 253.433594 Z M 288.503906 272.933594 "/>
    <path style={{stroke: "none", fillRule: "nonzero", fill: `${hoopsColor}`, fillOpacity: 1 }} d="M 288.503906 334.058594 L 86.824219 334.058594 L 86.824219 314.558594 L 288.503906 314.558594 Z M 288.503906 334.058594 "/>
    </g>
    </svg>
  )
}

export default ShirtHoops