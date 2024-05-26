export interface IOFormat {
    name: string;
    description: string;
    type: string;
}

export default class Model {
    private name: string;
    private instructions: string;
    private version: string;
    private inputs?: IOFormat[];
    private outputs?: IOFormat[];
    

    constructor(name: string, instructions: string,  version: string, inputs?: IOFormat[],  outputs?: IOFormat[]){
        this.name= name;
        this.instructions = instructions;
        if (inputs) {
            this.inputs = inputs;
        }
        if (outputs) {
            this.outputs = outputs;
        }
        this.version = version;
        
    }

    public getName() {
        return this.name;
    }

    public getInstructions() {
        return this.instructions;
    }

    public getVersion() {
        return this.version;
    }
}

export const entitle_v0_definition = new Model(
    'enTitle',
    '',
    'v0'
)

export const entitle_v1_definition = new Model(
    'enTitle',
    '',
    'v1'
)

export const catalyze_v0_definition = new Model(
    'Catalyze',
    '',
    'v0'
)

export const catalyze_v1_definition = new Model(
    'Catalyze',
    '',
    'v1'
)

export function assign(name: string) {
    console.log('assigning ', name)
    if (name.trim() == 'entitle-v0') {
        console.log('a')
        return entitle_v0_definition
        
    } else if (name.trim() == 'entitle-v1') {
        console.log('b')
        return entitle_v1_definition
    } else if (name.trim() == 'catalyze-v0') {
        return catalyze_v0_definition
    } else if (name.trim() == 'catalyze-v1') {
        return catalyze_v1_definition
    }
    console.log('c')
    return entitle_v0_definition
}