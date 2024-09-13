-- CreateTable
CREATE TABLE `Operator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `value` DOUBLE NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `operatorId` INTEGER NULL,

    UNIQUE INDEX `Client_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `Operator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
