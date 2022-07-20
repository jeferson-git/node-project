import { Product } from '../../products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DataTypeDefaults } from 'typeorm/driver/types/DataTypeDefaults';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'timestamp' })
  created_at: DataTypeDefaults;
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
