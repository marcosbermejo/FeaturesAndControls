import { Control } from './Control';
import * as uuid from 'uuid';

export class Feature {

    public id: string
    public name: string
    public controls: Control[]
    public quality: number

    constructor(name: string, controls: number){
        this.id = uuid.v4()
        this.name = name
        this.controls = []
        this.quality = Math.floor((Math.random() * 100) + 1)
        for (let i = 0; i < controls; i++) {
            this.controls.push(new Control(`ctrl${i}`))
        }
    }

    public reload () {
        for (const control of this.controls) {
            control.reload()
        }
        this.quality = Math.floor((Math.random() * 100) + 1)
    }
}