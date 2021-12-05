export interface Conversation {
    messages:       Message[];
    participants:   Participant[];
    participantsId: string[];
    id:             string;
}

export interface Message {
    id:      number;
    date:    DateClass;
    content: string;
    sender:  Participant;
}

export interface DateClass {
    seconds:     number;
    nanoseconds: number;
}

export interface Participant {
    avatar: number;
    name:   string;
    id:     string;
}
