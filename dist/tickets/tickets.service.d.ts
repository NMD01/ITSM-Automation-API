import { Repository } from 'typeorm';
import { Ticket, TicketStatus } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
export declare class TicketsService {
    private readonly ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: string): Promise<Ticket>;
    updateStatus(id: string, status: TicketStatus): Promise<Ticket>;
    private classifyPriority;
    createWithTriage(createTicketDto: CreateTicketDto): Promise<Ticket>;
}
