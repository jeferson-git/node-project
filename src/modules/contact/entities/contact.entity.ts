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

  @OneToOne(() => Person, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  person: Person;
}
