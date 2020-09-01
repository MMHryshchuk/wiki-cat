import React from 'react'


type WikiRateProps = {
    rate:  0 | 1 | 2 | 3 | 4 | 5
}

export const WikiRate: React.FC<WikiRateProps> = ({rate}) => {

    const defaultArray = new Array(5).fill('');

    return (
        <div className="rate-wrapper">
            {defaultArray.map((item, index) => {
                return <div key={index} className={index <= rate ? 'rate-item active' : 'rate-item'}/>
            })}
        </div>
    )
}