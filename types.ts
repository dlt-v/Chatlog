export interface LastMessages {
    participants: string[];
    messages:     Message[];
    id:           string;
}

export interface Message {
    content: string;
    sender:  Sender;
    id:      number;
    date:    DateClass;
}

export interface DateClass {
    seconds:     number;
    nanoseconds: number;
}

export interface Sender {
    id:     string;
    avatar: number;
    name:   string;
}
