import { TicketPriority, TicketStatus } from '../entities/ticket.entity';
export declare class CreateTicketDto {
    title: string;
    description: string;
    category: string;
    priority?: TicketPriority;
    status?: TicketStatus;
}
