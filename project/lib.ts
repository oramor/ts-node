interface IMessage {
    title: string;
}

export class Hello {
    getMessage(): IMessage {
        return {
            title: 'Hello, World',
        };
    }
}
