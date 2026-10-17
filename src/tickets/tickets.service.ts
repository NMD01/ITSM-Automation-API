import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket, TicketStatus } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(createTicketDto);
    return this.ticketRepository.save(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Ticket> {
  const ticket = await this.ticketRepository.findOneBy({ id });

  if (!ticket) {
    throw new NotFoundException(`Ticket ${id} não encontrado`);
  }

  return ticket;
}

async updateStatus(
  id: string,
  status: TicketStatus,
): Promise<Ticket> {
  const ticket = await this.findOne(id);
  ticket.status = status;

  return this.ticketRepository.save(ticket);
}
}
