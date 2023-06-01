-- CreateTable
CREATE TABLE "historic" (
    "id" INTEGER NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "hall" INTEGER NOT NULL,
    "shelf" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "product_identification_id" INTEGER NOT NULL,

    CONSTRAINT "historic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" MONEY NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_identification" (
    "id" INTEGER NOT NULL,
    "cody_RFID" VARCHAR(10) NOT NULL,
    "registration_date" TIMESTAMPTZ(6) NOT NULL,
    "valide_date" TIMESTAMPTZ(6) NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "product_identification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "historic" ADD CONSTRAINT "product_identification_id" FOREIGN KEY ("product_identification_id") REFERENCES "product_identification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_identification" ADD CONSTRAINT "product_id" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
