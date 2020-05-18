import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import QualityControl from '../Quality/QualityControl';
import Title from './Title/Title'
import styles from './Feature.module.css';

const Feature = (props) => {

    let total = props.feature.controls.length
    let columns = [props.feature.controls]

    if(props.big){
        columns = [
            props.feature.controls.slice(0, total / 2),
            props.feature.controls.slice(total / 2, total)
        ]
    }

    return (
        <Paper className={styles.Feature}>
            
            <Title title={props.feature.name} quality={props.feature.quality} />
            
            <div className={styles.Tables}>
                {columns.map((column, i) => (
                    <TableContainer key={i + '-' + props.feature.id} className={styles.Table + ' ' + (props.big ? styles.Half : '')} >
                        <Table>
                            <colgroup>
                                <col style={{width:'30%'}} />
                                <col style={{width:'30%'}} />
                                <col style={{width:'30%'}} />
                                <col style={{width:'10%'}} />
                            </colgroup>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Control</TableCell>
                                    <TableCell align="center">Dev</TableCell>
                                    <TableCell align="center">Out</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                {column.map((control) => (
                                    <TableRow key={control.id}>
                                        <TableCell align="left">{ control.name }</TableCell>
                                        <TableCell align="center">{ control.dev }</TableCell>
                                        <TableCell align="center">{ control.devOut }</TableCell>
                                        <TableCell align="center"><QualityControl quality={control.quality} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ))}
            </div>
            
            
        </Paper>
    )

};

export default Feature;