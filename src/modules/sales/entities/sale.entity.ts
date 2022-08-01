/* eslint-disable prettier/prettier */
import { Order } from 'src/modules/orders/entities/order.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { CurrencyType } from '../../currency-types/entities/currency-type.entity';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date' })
    sale_date: string;

    @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
    value: string;

    @ManyToOne(() => CurrencyType, (currencyType) => currencyType.sale)
    @JoinColumn()
    currencyType: CurrencyType;

    @OneToMany(() => Order, (order) => order.sales)
    order: Order[];

    // @ManyToMany(() => Product, (product) => product.sale)
    // @JoinTable({
    //     name: 'sales_has_product',
    //     joinColumn: {
    //         name: 'sales_id',
    //         referencedColumnName: 'id',
    //     },
    //     inverseJoinColumn: {
    //         name: 'product_id',
    //         referencedColumnName: 'id',
    //     },
    // })
    // product: Product[];
}

// @Entity('sales_has_product')
// export class SalesHasProduct {
//     // @PrimaryGeneratedColumn('uuid')
//     // id: string;

//     // @Column({length: 36, unique: false, charset: 'latin1', collation: 'latin1_swedish_ci'})
//     @PrimaryGeneratedColumn('identity')
//     sales_id: string;

//     // @Column({length: 36, unique: false, charset: 'latin1', collation: 'latin1_swedish_ci'})
//     @PrimaryGeneratedColumn('identity')
//     product_id: string;

//     @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
//     UnitPrice: string;

//     @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
//     total: string;
// }
