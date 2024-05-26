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
    'Our original title optimizer, draws upon all existing projects since 2016 to craft a title that fits your purpose precisely, while giving it that appeal you need!',
    'v0'
)

export const entitle_v1_definition = new Model(
    'enTitle',
    'Upgraded version of enTitle, optimized for nearly 10x speed, built on only the best of the best of titles.',
    'v1'
)

export const catalyze_v0_definition = new Model(
    'Catalyze',
    'Our category chooser, based on your abstract and/or description, gives you the top 3 categories that your project should fit in.',
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