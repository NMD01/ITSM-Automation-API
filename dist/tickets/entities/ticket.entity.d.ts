export declare enum TicketPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export declare enum TicketStatus {
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    RESOLVED = "resolved",
    CLOSED = "closed"
}
export declare class Ticket {
    id: string;
    title: string;
    description: string;
    category: string;
    priority: TicketPriority;
    status: TicketStatus;
    createdAt: Date;
    updatedAt: Date;
}
