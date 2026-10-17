import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateTickets1792251521328 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
