

export interface Location {
    county: string;
    state: string;
}

export interface StaticPath {
    overall_diff: number,
    overall_pred_diff: number,
    overall_finalists: number,
    overall_sectors: string[],
    overall_breakdown: number[],
}

export interface ChartProps {
    label_list?: string[] | undefined;
    breakdown?: number[] | undefined;
}

export interface FairNodeProps {
    title?: string | undefined;
    code?: string | undefined;
    website?: string | undefined;
    contact?: string | undefined;
    isStart?: boolean | undefined;
    email?: string | undefined;
    classifier: string;
}

export interface FairData {
    node: FairNodeProps;
    num_finalists: number;
    diff: number;
    pred_diff: number;
    sectors: string[];
    breakdown: number[];
    handleHover: (a: any, b: any, c: any, d: any, e: any) => void;
    handleStopHover?: () => void;
    handleClick: (a: any, b: any, c: any, d: any, e: any) => void;
}

export interface PathData {
    overall_diff: number;
    overall_pred_diff: number;
    overall_finalists: number;
    overall_sectors: string[];
    overall_breakdown: number[];
    nodes: FairData[];
    handleStopHover?: () => void;
    classifier: string;
}

export interface ContactNodeProps {
    names?: string[] | undefined;
    emails?: string[] | undefined;
}