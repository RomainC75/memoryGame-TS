export default class Options{
    grid: number;
    theme: boolean;
    userName: string;
    multi: boolean;

    constructor(
        grid: number = 4,
        theme: boolean = true,
        userName: string = 'anonymous',
        multi: boolean=false
    ){
        this.grid=grid;
        this.theme = theme;
        this.userName = userName;
        this.multi = multi;
    }
}