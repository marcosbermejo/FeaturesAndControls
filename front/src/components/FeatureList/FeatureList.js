import React from 'react';
import Feature from '../Feature/Feature';
import styles from './FeatureList.module.css';

const FeatureList = (props) => {

    const isBig = (f) => f.controls.length > 10
    const isSmall = (f) => f.controls.length <= 5

    let skipNext = false
    const features = props.features.map((feature, i) => {
        
        if(skipNext){
            skipNext = false
            return null;
        }

        let content = (
            <div className={styles.Item + " " + (isBig(feature) ? styles.Big : '')} key={feature.id} >
                <Feature feature={feature} big={isBig(feature)} />
            </div>
        )

        // check if there should be 2 small modules
        let nextFeatureIsSmall = i < props.features.length - 1 && isSmall(props.features[i + 1])
        if(isSmall(feature) && nextFeatureIsSmall){
            content = (
                <div className={styles.Item + " " + styles.Small} key={feature.id} >
                    <div>
                        <Feature feature={feature} />
                    </div>
                    <div>
                        <Feature feature={props.features[i + 1]} />
                    </div>
                </div>
            )
            skipNext = true
        }

        return content
    })

    return (
        <div className={styles.List}>
            {features}
        </div>
    );
    
}

export default FeatureList;