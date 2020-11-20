import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1605824000258 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'product',
      columns:[
        {
          name: 'code',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'price',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'registrationDate',
          type: 'text',
        },
        {
          name: 'categoryId',
          type: 'integer',
        },
        {
          name: 'description',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'color',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'measurementUnit',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'fabricationDate',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'perishable',
          type: 'boolean',
          isNullable: true,
        },
        {
          name: 'validUntil',
          type: 'text',
          isNullable: true,
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }

}
