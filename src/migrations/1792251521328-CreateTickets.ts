import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTickets1792251521328 implements MigrationInterface {
    name = 'CreateTickets1792251521328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."tickets_priority_enum" AS ENUM('low', 'medium', 'high', 'critical')`);
        await queryRunner.query(`CREATE TYPE "public"."tickets_status_enum" AS ENUM('open', 'in_progress', 'resolved', 'closed')`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(150) NOT NULL, "description" text NOT NULL, "category" character varying(80) NOT NULL, "priority" "public"."tickets_priority_enum" NOT NULL DEFAULT 'medium', "status" "public"."tickets_status_enum" NOT NULL DEFAULT 'open', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TYPE "public"."tickets_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."tickets_priority_enum"`);
    }

}
