import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  cel: string;

  @Column({ type: 'varchar', length: 25 })
  alternativeContact: string;

  @Column({ type: 'varchar', length: 25 })
  email: string;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
