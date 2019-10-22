export class User {
    public isActive: string;
    public userName: string;
    public userType: string;

    constructor(isActive: string, userName: string, userType: string) {
        this.isActive = isActive;
        this.userName = userName;
        this.userType = userType;
    }
}