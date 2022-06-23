import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  street: string;

  @Column({ type: 'varchar', length: 25 })
  cep: string;

  @Column({ type: 'varchar', length: 25 })
  district: string;

  @Column({ type: 'integer' })
  number: number;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
