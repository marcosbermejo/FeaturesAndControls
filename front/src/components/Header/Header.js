import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

import red from '@material-ui/core/colors/red';
import styles from './Header.module.css';


const Header = (props) => {
    
    return (
        <div className={styles.Header}>
            <h1>{props.name}</h1>

            <Button variant="contained" color="primary" style={{marginRight: '20px'}} onClick={props.click}>
                Shuffle
            </Button>

            <FormGroup row className="Switch">
                <FormControlLabel
                    control={
                    <Switch
                        checked={props.connection.connected}
                        onChange={props.connection.connected ? props.disconnect : props.connect}
                        name="connect"
                        color="primary"
                    />
                    }
                    label={props.connection.connected ? 'Disconnect' : 'Connect'}
                />
            </FormGroup>

                <span style={{color: red[500]}}>{props.connection.error}</span> 
        </div>
    );
    
}


export default Header;