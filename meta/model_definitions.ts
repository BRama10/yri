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
    private supername: string;
    

    constructor(name: string, instructions: string,  version: string, supername: string, inputs?: IOFormat[],  outputs?: IOFormat[]){
        this.name= name;
        this.instructions = instructions;
        if (inputs) {
            this.inputs = inputs;
        }
        if (outputs) {
            this.outputs = outputs;
        }
        this.version = version;
        this.supername=supername
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

    public getSuperName() {
        return this.supername;
    }
}

export const entitle_v0_definition = new Model(
    'enTitle',
    'Our original title optimizer, draws upon all existing projects since 2016 to craft a title that fits your purpose precisely, while giving it that appeal you need!',
    'v0',
    'Title Optimizer'
)

export const entitle_v1_definition = new Model(
    'enTitle',
    'Upgraded version of Title Optimizer, optimized for nearly 10x speed, built on only the best of the best of titles.',
    'v1',
    'Title Optimizer'
)

export const catalyze_v0_definition = new Model(
    'Catalyze',
    'Our category chooser, based on your abstract and/or description, gives you the top 3 categories that your project should fit in.',
    'v0',
    'Category Chooser'
)

export const catalyze_v1_definition = new Model(
    'Catalyze',
    '',
    'v1',
    ''
)

export const abstractify_v0_definition = new Model(
    'Abstractify',
    'Our original abstract optimizer, only available on our Discord bot due to its tendency to crash and it\'s extremely long processing time.',
    'v0',
    'Abstractify'
)

export const abstractify_v1_definition = new Model(
    'Abstractify',
    'An optimized version of our initial model, with response times being of equal quality but with speeds 40x faster.',
    'v1',
    'Abstractify'
)

export const abstractify_v2_definition = new Model(
    'Abstractify',
    'A further optimized version of our initial model, with more precise results, tuned for catching the tiny mistakes. Nearly 2x faster than v1.',
    'v2',
    'Abstractify'
)

export function assign(name: string) {
    console.log('assigning ', name)
    if (name.trim() == 'entitle-v0') {
        return entitle_v0_definition
    } else if (name.trim() == 'entitle-v1') {
        return entitle_v1_definition
    } else if (name.trim() == 'catalyze-v0') {
        return catalyze_v0_definition
    } else if (name.trim() == 'catalyze-v1') {
        return catalyze_v1_definition
    } else if (name.trim() == 'abstractify-v1') {
        return abstractify_v1_definition
    } else if (name.trim() == 'abstractify-v2') {
        return abstractify_v2_definition
    }
    console.log('failed')
    return entitle_v0_definition
}