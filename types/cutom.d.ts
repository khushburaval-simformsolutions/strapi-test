export interface Env {
    (key: string, defaultValue?: any): any;
    int: (key: string, defaultValue?: number) => number;
    bool: (key: string, defaultValue?: boolean) => boolean;
    array: (key: string) => string[];
}