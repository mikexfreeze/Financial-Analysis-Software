import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationName implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Implement the logic for applying the migration
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Implement the logic for reverting the migration
    }
}