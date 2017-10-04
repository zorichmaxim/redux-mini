export interface UserInterface {
    id: UserDataInterface;
}

export  interface UserDataInterface {
    key: number;
    token: string;
    value? : Array<any>;
}

