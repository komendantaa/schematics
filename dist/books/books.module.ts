import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksService } from './service/books.service';
import { BookSchema } from './interfaces/book.schema';
import { BooksRepository } from './service/repository/books.repository';
import { BooksPopulation } from './service/repository/books.population';
import { BookController, BooksController } from './controller/books.controller';
import { BooksMapper } from './service/books.mapper';
import { BooksValidationService } from './service/verification/books-validation.service';
import { BooksPermissionsService } from './service/verification/books-permissions.service';
import { CollectionName } from '@const';
import { QueryModule } from '@services/query';

@Module({
  imports: [MongooseModule.forFeature([{ name: CollectionName.BOOKS, schema: BookSchema }]), QueryModule],
  controllers: [BookController, BooksController],
  providers: [
    BooksService,
    BooksRepository,
    BooksPopulation,
    BooksMapper,
    BooksValidationService,
    BooksPermissionsService,
  ],
  exports: [BooksService, BooksMapper, BooksValidationService],
})
export class BooksModule {}
