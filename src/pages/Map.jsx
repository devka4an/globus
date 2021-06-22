import React from 'react'
import SvgWrapper from 'react-interactive-svg'
import { ReactComponent as Svg } from './../map.svg'

export default function Map() {
    return (
        <div className="map">
            MAP

            <div className="map-wrapper">
                <SvgWrapper
                    hoverBorderColor='#FFFF'
                    activeColor='green'
                    defaultHoverBorder='#000'
                    allowedShapes={["polygon"]}
                >
                    <Svg ref={React.createRef()} />
                </SvgWrapper>
            </div>
        </div>
    )
}
