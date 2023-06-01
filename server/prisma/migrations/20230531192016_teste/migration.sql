/*
  Warnings:

  - The primary key for the `historic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product_identification` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "historic" DROP CONSTRAINT "product_identification_id";

-- DropForeignKey
ALTER TABLE "product_identification" DROP CONSTRAINT "product_id";

-- AlterTable
ALTER TABLE "historic" DROP CONSTRAINT "historic_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "product_identification_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "historic_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "historic_id_seq";

-- AlterTable
ALTER TABLE "product" DROP CONSTRAINT "product_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "product_id_seq";

-- AlterTable
ALTER TABLE "product_identification" DROP CONSTRAINT "product_identification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "product_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "product_identification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "product_identification_id_seq";

-- AddForeignKey
ALTER TABLE "historic" ADD CONSTRAINT "product_identification_id" FOREIGN KEY ("product_identification_id") REFERENCES "product_identification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_identification" ADD CONSTRAINT "product_id" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
