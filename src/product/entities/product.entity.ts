import {
  Column,
  Table,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'product',
})
export class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  nome!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  descricao?: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidadeEstoque!: number;

  @CreatedAt
  @Column({ type: DataType.DATE })
  criadoEm!: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  atualizadoEm?: Date;
}
