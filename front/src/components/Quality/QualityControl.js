import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';


const QualityIcon = (quality, color) => {
    if(quality < 50) return <HighlightOffIcon style={{ color: color || red[500] }} />
    if(quality < 65) return <ErrorOutlineIcon style={{ color: color || amber[500] }} />
    return <CheckCircleOutlineIcon style={{ color: color || green[500] }} />
}


const QualityColor = (quality) => {
    if(quality < 50) return red[500]
    if(quality < 65) return amber[500]
    return green[500]
}

const QualityControl = (props) => {

    
    return (
        <Tooltip title={ props.quality + '%' }>
            { QualityIcon(props.quality, props.color) }
        </Tooltip>
    )

};

export default QualityControl;
export { QualityIcon };
export { QualityColor };