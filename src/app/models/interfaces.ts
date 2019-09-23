export interface Event {
    Id: number;
    type: string;
    location: string;
    time?: string
    description: string;
    //images?: Images[]
}

export interface Images {
    Id: number;
    image?: string;
}