import { Feature } from './Feature';

export class Part {

    public name: string
    public features: Feature[]

    constructor (name: string) {
        this.name = name
        this.features = [
            new Feature('Feature A', 20),
            new Feature('Feature B', 5),
            new Feature('Feature C', 5),
            new Feature('Feature D', 5),
            new Feature('Feature E', 5),
            new Feature('Feature F', 10)
        ]
    }

    public reset(){
        this.features = [
            new Feature('Feature A', Math.floor((Math.random() * 20) + 1)),
            new Feature('Feature B', Math.floor((Math.random() * 20) + 1)),
            new Feature('Feature C', Math.floor((Math.random() * 20) + 1)),
            new Feature('Feature D', Math.floor((Math.random() * 20) + 1)),
            new Feature('Feature E', Math.floor((Math.random() * 20) + 1)),
            new Feature('Feature F', Math.floor((Math.random() * 20) + 1))
        ]
    }

    public reload (){
        for (const feature of this.features) {
            feature.reload()
        }
    }
}

        
