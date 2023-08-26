/*
  Warnings:

  - You are about to drop the column `status` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `isRunning` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "status",
ADD COLUMN     "isRunning" BOOLEAN NOT NULL;
