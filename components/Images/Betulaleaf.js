import React from 'react'
import Svg, {Path, Use, Defs, Pattern, Image,} from "react-native-svg"
 
const Betulaleaf = () => {
    return (
      <Svg
      width={130}
      height={260}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#a)" d="M.896.956h137.375v270H.896z" />
      <Defs>
        <Pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#b" transform="matrix(.00117 0 0 .0006 -.835 0)" />
        </Pattern>
        <Image
          id="b"
          width={1550}
          height={2200}
        />
      </Defs>
    </Svg>
    )
}
export default Betulaleaf; 