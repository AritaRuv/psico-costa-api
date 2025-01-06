import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity implements BaseEntityType {
  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;
}
