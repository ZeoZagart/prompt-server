-- CreateTable
CREATE TABLE "Prompt" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "params" JSONB,

    CONSTRAINT "Prompt_pkey" PRIMARY KEY ("id")
);
