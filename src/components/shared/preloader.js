import React from 'react';


export function Preloader() {
    return (
        <svg
            width='120px'
            height='120px'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="none"
            />
            <g>
                <animate attributeName="opacity" 
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0s"
                        keyTimes="0;0.33;1"
                        values="1;1;0" 
                />
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3498db"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round">
                    <animate
                        attributeName="r"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0s"
                        keyTimes="0;0.33;1"
                        values="0;22;44" 
                    />
                </circle>
            </g>
            
            <g>
                <animate
                    attributeName="opacity"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="-1s"
                    keyTimes="0;0.33;1"
                    values="1;1;0"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#1d5173"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round">
                    <animate 
                        attributeName="r"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1s" 
                        keyTimes="0;0.33;1"
                        values="0;22;44"/>
                </circle>
            </g>
        </svg>
    );
}