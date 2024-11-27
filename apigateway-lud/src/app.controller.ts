import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  private readonly clienteAdminBackend: ClientProxy;

  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5672/atendimento'],
        queue: 'lud',
      },
    });
  }
}
