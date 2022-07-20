import { IProvidersInterface } from 'src/interfaces/IProvidersInterface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DataTypeDefaults } from 'typeorm/driver/types/DataTypeDefaults';

@Entity()
export class Provider implements IProvidersInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  cnpj: string;

  @Column({ type: 'varchar', length: 250 })
  description: string;

  @Column({ type: 'varchar', length: 250 })
  company: string;

  @Column({ type: 'timestamp' })
  created_at: DataTypeDefaults;

  @Column({ type: 'timestamp', default: null })
  updated_at: DataTypeDefaults;
}
