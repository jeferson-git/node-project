import { Product } from 'src/modules/products/entities/product.entity';
import { Sale } from 'src/modules/sales/entities/sale.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Sale, (sale) => sale.order)
  sales: Sale;

  @OneToMany(() => OrderHasProduct, (orderHasProduct) => orderHasProduct.order)
  orderHasProduct: OrderHasProduct[];
}

@Entity('order_has_product')
class OrderHasProduct {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  productId: string;

  @PrimaryColumn({ type: 'varchar', length: 36 })
  orderId: string;

  @ManyToOne(() => Order, (order) => order.orderHasProduct)
  order!: Order;

  @ManyToOne(() => Product, (product) => product.orderHasProduct)
  product!: Product;

  @Column({ type: 'varchar' })
  unitPrice: string;
}

export { Order, OrderHasProduct };
