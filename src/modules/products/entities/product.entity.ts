import { Category } from '../../category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sale } from 'src/modules/sales/entities/sale.entity';
import { Order } from 'src/modules/orders/entities/order.entity';
import { OrderHasProduct } from 'src/modules/orders/entities/order.entity';
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

  @OneToMany(
    () => OrderHasProduct,
    (orderHasProduct) => orderHasProduct.product,
  )
  orderHasProduct: OrderHasProduct[];
  // @ManyToMany(() => Order, (order) => order.products)
  // order: Order[];
}
