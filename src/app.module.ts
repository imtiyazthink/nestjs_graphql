import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    //imported GraphqlModule 
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),

    //imported TypeOrmModule for database connection
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'invoiceapp',
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),

    //imported CustomerModule
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
