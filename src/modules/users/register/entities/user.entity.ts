import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  Unique,
} from 'typeorm';
import { Address } from '../../address/entities/address.entity';
import { Contact } from '../../contact/entities/contact.entity';
import { Contract } from '../../contract/entities/contract.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';

@Entity()
@Unique(['surname', 'email', 'cpf', 'rg'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  surname: string;

  @Column({ type: 'date', nullable: true })
  birthDate: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  rg: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  cpf: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'boolean' })
  isAdmin: boolean;

  @Column({ type: 'varchar', length: 200, select: false })
  password: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];

  @OneToOne(() => Address, (address) => address.user)
  address: Address;

  @OneToOne(() => Contact, (contact) => contact.user)
  contact: Contact;

  @OneToOne(() => Contract, (contract) => contract.user)
  contract: Contract;
}
