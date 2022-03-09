export interface AppContextState {
    grid: number;
    theme: boolean;
    userName: string;
    playersNumber: number;
    matrix: [number,number][][];
}

export type AppContextType = {
    state: AppContextState ;
    setState: (state: AppContextState) => void;
};