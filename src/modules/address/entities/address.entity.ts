import { Person } from 'src/modules/persons/entities/person.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  BeforeInsert,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

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

  @OneToOne(() => Person, (person) => person.address, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  person: Person;
}
