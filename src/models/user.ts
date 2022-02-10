
export class User {
    userId: number;
    userFirstName: string;
    userLastName: string;
    userPassword: string;
    userEmail: string;
    lastMark: number;
    highestMark: number;
    token:string
    constructor(id: number, userFirstName: string, userLastName: string, userPassword: string,userEmail:string,lastMark:number,highestMark:number,token:string) {
        this.userId = id;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userPassword = userPassword;
        this.userEmail=userEmail;
        this.lastMark=lastMark;
        this.highestMark=highestMark;
        this.token=token
    }
}