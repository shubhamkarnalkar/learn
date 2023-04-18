import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderModule])],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
