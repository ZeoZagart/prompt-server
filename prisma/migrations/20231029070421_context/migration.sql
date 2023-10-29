-- CreateTable
CREATE TABLE "Context" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scriptId" TEXT NOT NULL,
    "scriptEnv" JSONB,
    "rawDataLoc" TEXT NOT NULL,
    "databaseLoc" TEXT NOT NULL,

    CONSTRAINT "Context_pkey" PRIMARY KEY ("id")
);
