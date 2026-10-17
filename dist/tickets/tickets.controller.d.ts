import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(createTicketDto: CreateTicketDto): Promise<import("./entities/ticket.entity").Ticket>;
    createWithTriage(dto: CreateTicketDto): Promise<import("./entities/ticket.entity").Ticket>;
    findAll(): Promise<import("./entities/ticket.entity").Ticket[]>;
    findOne(id: string): Promise<import("./entities/ticket.entity").Ticket>;
    updateStatus(id: string, dto: UpdateTicketStatusDto): Promise<import("./entities/ticket.entity").Ticket>;
}
