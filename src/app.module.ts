import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lista } from './lista/entities/lista.entity';
import { ListaModule } from './lista/lista.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"marcos_2326",
      "database":"lista-prueba",
      "entities":[__dirname + "/**/**/**.entity{.ts,.js}"],
      "synchronize":true,
    }),
    
    ListaModule,TypeOrmModule.forFeature([Lista])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
