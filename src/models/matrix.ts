const shuffle = (continueArray:[number,number][]):[number,number][] =>{
    return continueArray.sort((a,b)=>{
        return Math.random()-0.5;
    });
}

export default class Matrix{
    size:number;
    matrix:[number,number][][];
    constructor(size:number){
        this.size=size;
        this.matrix=[];
    }
    getRandomGrid():[number,number][][]{
        let continueArray:[number,number][] = [];
        for(let i=1; i<=Math.pow(this.size,2)/2;i++){
            continueArray.push([i,0]);
            continueArray.push([i,0]);
        }
        for(let i=0;i<10;i++){
            continueArray=shuffle(continueArray);
        }

        for(let i=0 ; i<this.size ; i++){
            const subMatrix:[number,number][]=[];
            for(let j=0 ; j<this.size ; j++){
                const num:[number,number]|undefined=continueArray.pop()
                subMatrix.push( num ? num : [-1,1])
            }
            this.matrix.push(subMatrix)
        }
        console.log('tirage ! ',this.matrix)
        return this.matrix
    }
}