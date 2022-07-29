import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Person } from 'src/modules/persons/entities/person.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  cel: string;

  @Column({ type: 'varchar', length: 125, nullable: true })
  alternativeContact: string;

  @OneToOne(() => Person, (person) => person.contact, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  person: Person;
}
