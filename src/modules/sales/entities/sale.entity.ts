/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { CurrencyType } from '../../currency-types/entities/currency-type.entity';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'date' })
    sale_date: string;

    @Column({type: 'decimal', precision:15, scale:2, default:0})
    value: string;

    @ManyToOne(() => CurrencyType, (currencyType) => currencyType.sale)
    @JoinColumn()
    currencyType: CurrencyType;
}
