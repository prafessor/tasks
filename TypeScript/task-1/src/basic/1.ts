type Callback = (a: number) => number;

const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => { return 100 + a };
const callback2:Callback = (a) => { return 100 + a };