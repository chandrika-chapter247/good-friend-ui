import React, { useState } from 'react'
import classNames from 'classnames'
import './styles.css'

import { Typography, Button } from 'antd'
import { PrimaryButton } from '../common'
import EventCard from './EventCard'

const { Title } = Typography

const CheckIcon = () => (
    <svg
        className="signup-active-icon"
        style={{ position: 'absolute', top: '0', right: '0' }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
        />
    </svg>
)

const StepBundle = ({ handleBack, handleNext }) => {
    const [selected, setSelected] = useState(null)
    const handleSelect = (index) => {
        if (index === selected) {
            setSelected(null)
        } else {
            setSelected(index)
        }
    }
    const options = [
        {
            title: 'MANY',
            imgUrl: require('../../images/expert-selection.png')
        },
        {
            title: 'CHRISTMAS',
            imgUrl: require('../../images/christmas-card.png')
        },
        {
            title: 'TRIAL',
            imgUrl: require('../../images/trial-gift.png')
        }
    ]

    const handleSubmit = (e) => {
        handleNext()
    }

    return (
        <div className="outer-div">
            <div className="step-bundle">
                <Title className="subtitle">Select a bundle</Title>
                <div className="bundle-cards">
                    {options.map((option, i) => (
                        <EventCard
                            imgUrl={option.imgUrl}
                            title={option.title}
                            selected={selected}
                            handleSelect={handleSelect}
                            className="bundle-card"
                        />
                    ))}
                </div>
            </div>
            <div className="signup-buttons">
                <Button
                    shape="round"
                    type="secondary"
                    size="large"
                    onClick={handleBack}
                    className="bundle-card-button"
                >
                    Previous
                </Button>
                <Button
                    shape="round"
                    type="primary"
                    size="large"
                    className="bundle-card-button"
                    onClick={handleSubmit}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default StepBundle

// {
//     i === 2 && (
//         <span
//             style={{
//                 position: 'absolute',
//                 top: '0',
//                 backgroundColor: '#FFE6FF',
//                 color: 'rgb(255, 51, 153)',
//                 borderRadius: '16px',
//                 fontWeight: 'bold',
//                 fontSize: '12px',
//                 padding: '0 8px',
//                 marginTop: '-12px'
//             }}
//         >
//             Free trial
//         </span>
//     )
// }
