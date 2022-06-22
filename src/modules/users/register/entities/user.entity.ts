import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'boolean' })
  isAdmin: boolean;

  @Column({ type: 'varchar', length: 200 })
  password: string;
}
