import { Category } from '../../category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  price: string;

  @Column({ type: 'integer', default: 0 })
  stock: number;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn()
  category: Category;
}
