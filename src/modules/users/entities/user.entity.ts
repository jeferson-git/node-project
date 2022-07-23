import { Person } from 'src/modules/persons/entities/person.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  Unique,
  JoinColumn,
} from 'typeorm';
import { Schedule } from '../../schedule/entities/schedule.entity';

@Entity()
@Unique(['login', 'email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  login: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'boolean' })
  isAdmin: boolean;

  @Column({ type: 'varchar', length: 200, select: false })
  password: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];

  @OneToOne(() => Person)
  @JoinColumn()
  person: Person;
}
