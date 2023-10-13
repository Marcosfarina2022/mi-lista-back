import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { Lista } from './entities/lista.entity';

@Injectable()
export class ListaService {
  constructor(@InjectRepository(Lista)
              private readonly listaRepository:Repository<Lista>
  ){}
  
  async findAll():Promise<Lista[]> {
    return await this.listaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lista`;
  }

  update(id: number, updateListaDto: UpdateListaDto) {
    return `This action updates a #${id} lista`;
  }

  remove(id: number) {
    return `This action removes a #${id} lista`;
  }
}
