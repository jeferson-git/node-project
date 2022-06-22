import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Schedule } from '../../schedule/entities/schedule.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  email: string;

  @Column({ type: 'boolean' })
  isAdmin: boolean;

  @Column({ type: 'varchar', length: 200, select: false })
  password: string;

  @OneToMany(() => Schedule, (schedule) => schedule.users)
  schedule: Schedule[];
}
