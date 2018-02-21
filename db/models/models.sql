-- -- ---
-- -- Globals
-- -- ---

-- -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- -- SET FOREIGN_KEY_CHECKS=0;

-- -- ---
-- -- Table 'Users'
-- --
-- -- --
-- CREATE DATABASE Crawlr;
-- USE Crawlr;

-- DROP TABLE IF EXISTS `Users`;

-- CREATE TABLE `Users` (
--  `id` INTEGER NOT NULL AUTO_INCREMENT,
--  `username` VARCHAR(15) NOT NULL,
--  PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Crawls'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `Crawls`;

-- CREATE TABLE `Crawls` (
--  `id` INTEGER NOT NULL AUTO_INCREMENT,
--  `id_Creator` INTEGER NOT NULL,
--  PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Bars'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `Bars`;

-- CREATE TABLE `Bars` (
--  `id` INTEGER NOT NULL AUTO_INCREMENT,
--  `bar_name` VARCHAR(30) NOT NULL,
--  PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'Crawls_Bars'
-- --
-- -- ---

-- DROP TABLE IF EXISTS `Crawls_Bars`;

-- CREATE TABLE `Crawls_Bars` (
--  `id` INTEGER NOT NULL AUTO_INCREMENT,
--  `id_Bars` INTEGER NOT NULL,
--  `id_Crawls` INTEGER NOT NULL,
--  PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys
-- -- ---

-- ALTER TABLE `Crawls` ADD FOREIGN KEY (id_Creator) REFERENCES `Users` (`id`);
-- ALTER TABLE `Crawls_Bars` ADD FOREIGN KEY (id_Bars) REFERENCES `Bars` (`id`);
-- ALTER TABLE `Crawls_Bars` ADD FOREIGN KEY (id_Crawls) REFERENCES `Crawls` (`id`);

-- -- ---
-- -- Table Properties
-- -- ---

-- -- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `Crawls` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `Bars` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `Crawls_Bars` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- -- INSERT INTO `Users` (`id`,`username`) VALUES
-- -- ('','');
-- -- INSERT INTO `Crawls` (`id`,`id_Creator`) VALUES
-- -- ('','');
-- -- INSERT INTO `Bars` (`id`,`bar_name`) VALUES
-- -- ('','');
-- -- INSERT INTO `Crawls_Bars` (`id`,`id_Bars`,`id_Crawls`) VALUES
-- -- ('','','');