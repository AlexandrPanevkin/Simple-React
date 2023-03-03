import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                paddingRight: 1,
                paddingLeft: 1,
                marginLeft: 2,
                marginRight: 2,
                height: 8,
                width: 300,
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    height: 10,
                    width: 10,
                    backgroundColor: '#00CC22',
                    border: '2px solid currentColor',
                    boxShadow: '0 0 0 5px #fff, 0 0 0 10px #00CC22',
                },
                '& .MuiSlider-valueLabel': {
                    lineHeight: 1.2,
                    fontSize: 12,
                    background: 'unset',
                    padding: 10,
                    width: 32,
                    height: 32,
                    borderRadius: '50% 50% 50% 0',
                    backgroundColor: '#52af77',
                    // transformOrigin: 'bottom left',
                    // transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                    // '&:before': {display: 'none'},
                    // '&.MuiSlider-valueLabelOpen': {
                    //     transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                    // },
                    // '& > *': {
                    //     transform: 'rotate(45deg)',
                    // },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
