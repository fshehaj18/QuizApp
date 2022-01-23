export class Answer {

    alternativeId!: number;
    correct!: number;
    wrong1!: number;
    wrong2!: number;
    wrong3!: number;
    toggle!: boolean
    questionId!: number;

    constructor()
    {
            this.toggle = false;
    }
    
}
