import React from 'react';
import QualityControl, { QualityColor } from '../../Quality/QualityControl'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import styles from './Title.module.css';


const Title = (props) => {

    return (
        <div className={styles.Title} style={{backgroundColor:QualityColor(props.quality) }}>
            <RadioButtonUncheckedIcon />
            <h2>{props.title}</h2>
            <QualityControl quality={props.quality} color="white" />
        </div>
    )

};

export default Title;