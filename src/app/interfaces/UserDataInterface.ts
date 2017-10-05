export interface UserInterface {
    [id: string] : UserDataInterface;
}

export  interface UserDataInterface {
    key: number;
    token: string;
    value? : Array<any>;
}

