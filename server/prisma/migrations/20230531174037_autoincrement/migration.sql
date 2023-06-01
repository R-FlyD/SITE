/*
  Warnings:

  - The primary key for the `historic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `historic` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `product_identification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `product_identification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `product_identification_id` on the `historic` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `product_identification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "historic" DROP CONSTRAINT "product_identification_id";

-- DropForeignKey
ALTER TABLE "product_identification" DROP CONSTRAINT "product_id";

-- AlterTable
ALTER TABLE "historic" DROP CONSTRAINT "historic_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "product_identification_id",
ADD COLUMN     "product_identification_id" INTEGER NOT NULL,
ADD CONSTRAINT "historic_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "product" DROP CONSTRAINT "product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "product_identification" DROP CONSTRAINT "product_identification_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD CONSTRAINT "product_identification_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "historic" ADD CONSTRAINT "product_identification_id" FOREIGN KEY ("product_identification_id") REFERENCES "product_identification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_identification" ADD CONSTRAINT "product_id" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
