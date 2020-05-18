import * as uuid from 'uuid';

export class Control {

    public id: string
    public name: string
    public dev: number
    public devOut: number
    public quality: number

    constructor(name: string){
        this.id = uuid.v4()
        this.name = name
        this.dev = 0
        this.devOut = 0
        this.quality = 0
        this.reload()
    }

    public reload (){
        this.dev = Math.floor((Math.random() * 100) + 1)
        this.devOut = Math.floor((Math.random() * 100) + 1)
        this.quality = Math.floor((Math.random() * 100) + 1)
    }
}