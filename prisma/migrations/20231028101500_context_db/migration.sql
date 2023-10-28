-- CreateTable
CREATE TABLE "ContextDatabase" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scriptId" TEXT NOT NULL,
    "scriptEnv" JSONB,
    "rawDataLoc" TEXT NOT NULL,
    "contextDBId" TEXT NOT NULL,

    CONSTRAINT "ContextDatabase_pkey" PRIMARY KEY ("id")
);
