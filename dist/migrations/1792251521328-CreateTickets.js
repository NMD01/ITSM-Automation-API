"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTickets1792251521328 = void 0;
class CreateTickets1792251521328 {
    name = 'CreateTickets1792251521328';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."tickets_priority_enum" AS ENUM('low', 'medium', 'high', 'critical')`);
        await queryRunner.query(`CREATE TYPE "public"."tickets_status_enum" AS ENUM('open', 'in_progress', 'resolved', 'closed')`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(150) NOT NULL, "description" text NOT NULL, "category" character varying(80) NOT NULL, "priority" "public"."tickets_priority_enum" NOT NULL DEFAULT 'medium', "status" "public"."tickets_status_enum" NOT NULL DEFAULT 'open', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TYPE "public"."tickets_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."tickets_priority_enum"`);
    }
}
exports.CreateTickets1792251521328 = CreateTickets1792251521328;
//# sourceMappingURL=1792251521328-CreateTickets.js.map