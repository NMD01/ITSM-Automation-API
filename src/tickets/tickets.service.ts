import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket, TicketStatus, TicketPriority } from './entities/ticket.entity';
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

  async updateStatus(id: string, status: TicketStatus): Promise<Ticket> {
    const ticket = await this.findOne(id);
    ticket.status = status;

    return this.ticketRepository.save(ticket);
  }

  //aqui vai fazer a triagem pela as palavras chaves, mais tarde colocar uma ia para deixar mais inteligente
  private classifyPriority(title: string, description: string): TicketPriority {
    const text = `${title} ${description}`.toLowerCase();

    const criticalKeywords = [
      'fora do ar',
      'indisponível',
      'indisponivel',
      'sistema parado',
      'sistema indisponível',
      'sistema indisponivel',
    ];

    const highKeywords = [
      'acesso',
      'acess',
      'login',
      'senha',
      'bloqueado',
      'bloqueada',
    ];

    if (criticalKeywords.some((keyword) => text.includes(keyword))) {
      return TicketPriority.CRITICAL;
    }

    if (highKeywords.some((keyword) => text.includes(keyword))) {
      return TicketPriority.HIGH;
    }

    return TicketPriority.MEDIUM;
  }

  async createWithTriage(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const priority = this.classifyPriority(
      createTicketDto.title,
      createTicketDto.description,
    );

    const ticket = this.ticketRepository.create({
      ...createTicketDto,
      priority,
    });

    return this.ticketRepository.save(ticket);
  }
}
