import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'first_name', length: '50', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', length: '50', type: 'varchar' })
  lastName: string;
}
