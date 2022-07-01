import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../register/entities/user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250, default: null })
  street: string;

  @Column({ type: 'varchar', length: 25, default: null })
  cep: string;

  @Column({ type: 'varchar', length: 25, default: null })
  district: string;

  @Column({ type: 'varchar', length: 25, default: null })
  number: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
