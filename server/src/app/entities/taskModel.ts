/* eslint-disable indent */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class TaskModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectName: string;

  @Column()
  projectDescription: string;

  @Column()
  isRunning: boolean;

  @Column()
  startTime: string;

  @Column()
  endTime: string;
}
