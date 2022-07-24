-- CreateTable
CREATE TABLE "USERS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "access_type" TEXT NOT NULL,
    "team" TEXT NOT NULL DEFAULT 'Colaborador',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "USERS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "USERS_access_type_key" ON "USERS"("access_type");
