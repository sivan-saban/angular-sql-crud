export const AccountOperations = "CREATE TABLE IF NOT EXISTS `bankaccounts`.`accountoperations` (`objectId` INT NOT NULL AUTO_INCREMENT,`accountNumber` INT NULL,`types` INT NULL,`sum` INT NULL,`date` DATE NULL,`interest` INT NULL, `sum_payments` INT NULL, PRIMARY KEY (`objectId`))";
  
export const types = "CREATE TABLE IF NOT EXISTS `bankaccounts`.`types` (`id` INT NOT NULL AUTO_INCREMENT,`types` VARCHAR(45) NULL, PRIMARY KEY (`id`));";
