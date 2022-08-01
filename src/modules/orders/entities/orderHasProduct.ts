// import { Product } from 'src/modules/products/entities/product.entity';
// import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
// import { Order } from './order.entity';

// @Entity()
// export class OrderHasProduct {
//   // @JoinColumn({ name: 'orderId' })
//   @ManyToOne(() => Order, (order) => order.orderHasProduct)
//   order: Order;

//   // @JoinColumn({ name: 'productId' })
//   @ManyToOne(() => Product, (product) => product.orderHasProduct)
//   product: Product;

//   @Column({ type: 'varchar' })
//   unitPrice: string;
// }
