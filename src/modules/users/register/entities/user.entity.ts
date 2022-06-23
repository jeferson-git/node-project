import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Schedule } from '../../schedule/entities/schedule.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  surname: string;

  @Column({ type: 'date' })
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

  @OneToMany(() => Schedule, (schedule) => schedule.users)
  schedule: Schedule[];

  // @OneToOne(() => Address, (address) => address.user)
  // address: Address;
}
