export interface Message {
    id: string,
    timestamp: Date,
    content: string | Record<string, string>
}
