import { concat } from 'rxjs';
import { IPersonInterface } from 'src/interfaces/IPersonInterface';
import { addressProviders } from 'src/modules/address/address.provider';
import { Address } from 'src/modules/address/entities/address.entity';
import { Contact } from 'src/modules/contact/entities/contact.entity';
import { Contract } from 'src/modules/contract/entities/contract.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person implements IPersonInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  surname: string;

  @Column({ type: 'date' })
  birthDate: string;

  @Column({ type: 'varchar', length: 9 })
  rg: string;

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @OneToOne(() => User)
  user: User;

  @OneToOne(() => Address, (address) => address.person, {
    cascade: true,
  })
  address: Address;

  @OneToOne(() => Contact, (contact) => contact.person, {
    cascade: true,
  })
  contact: Contact;

  @OneToOne(() => Contract, (contract) => contract.person, {
    cascade: true,
  })
  contract: Contract;
}
