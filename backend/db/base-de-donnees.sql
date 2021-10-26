-- CREATE DATABASE `ressources` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE original_dev_test;
DROP TABLE IF EXISTS ressources;
DROP TABLE IF EXISTS users;
CREATE TABLE `ressources` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('siteweb','youtube','livre','application') NOT NULL,
  `slug` varchar(100) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `long_description` text,
  `image_src` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `is_free` enum('yes','no') NOT NULL,
  `rating` int DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `status` enum('visible','hidden') NOT NULL DEFAULT 'hidden',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `ressources` (`id`,`type`,`slug`,`name`,`description`,`long_description`,`image_src`,`website`,`is_free`,`rating`,`creation_date`,`status`) VALUES (1,'siteweb','la-classe-en-ligne','La classe en ligne avec Marie-Ève Lévesque','La Classe en ligne animée par Marie-Ève Lévesque a offert des cours de révision quotidiens gratuits à tous les élèves du primaire durant le confinement dû à la pandémie de la COVID-19, du 31 mars au 18 juin 2020.','La Classe en ligne animée par Marie-Ève Lévesque a offert des cours de révision quotidiens gratuits à tous les élèves du primaire durant le confinement dû à la pandémie de la COVID-19, du 31 mars au 18 juin 2020.La Classe en ligne animée par Marie-Ève Lévesque a offert des cours de révision quotidiens gratuits à tous les élèves du primaire durant le confinement dû à la pandémie de la COVID-19, du 31 mars au 18 juin 2020.La Classe en ligne animée par Marie-Ève Lévesque a offert des cours de révision quotidiens gratuits à tous les élèves du primaire durant le confinement dû à la pandémie de la COVID-19, du 31 mars au 18 juin 2020.La Classe en ligne animée par Marie-Ève Lévesque a offert des cours de révision quotidiens gratuits à tous les élèves du primaire durant le confinement dû à la pandémie de la COVID-19, du 31 mars au 18 juin 2020.','https://www.successcolaire.ca/images/facebook_classe_marie_eve.jpg','https://www.successcolaire.ca/la-classe-en-ligne','yes',5,'2020-02-24 15:16:00','visible');
INSERT INTO `ressources` (`id`,`type`,`slug`,`name`,`description`,`long_description`,`image_src`,`website`,`is_free`,`rating`,`creation_date`,`status`) VALUES (2,'siteweb','alloprof','Le site de AlloProf','Depuis 1996, Alloprof développe des services professionnels et des ressources numériques de soutien scolaire et les rend accessibles gratuitement à tous les élèves du Québec et leurs parents.','Depuis 1996, Alloprof développe des services professionnels et des ressources numériques de soutien scolaire et les rend accessibles gratuitement à tous les élèves du Québec et leurs parents.Depuis 1996, Alloprof développe des services professionnels et des ressources numériques de soutien scolaire et les rend accessibles gratuitement à tous les élèves du Québec et leurs parents.Depuis 1996, Alloprof développe des services professionnels et des ressources numériques de soutien scolaire et les rend accessibles gratuitement à tous les élèves du Québec et leurs parents.Depuis 1996, Alloprof développe des services professionnels et des ressources numériques de soutien scolaire et les rend accessibles gratuitement à tous les élèves du Québec et leurs parents.Depuis 1996, Alloprof développe des services professionnels et des ressources numériques de soutien scolaire et les rend accessibles gratuitement à tous les élèves du Québec et leurs parents.','https://scontent.fymy1-1.fna.fbcdn.net/v/t1.6435-9/118192173_10157234485136822_2074193901470356001_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3DlZHP6jh4EAX_5lGbi&_nc_ht=scontent.fymy1-1.fna&oh=9ef31b1ec814d95d1240b4c45d18bace&oe=619BC763', 'https://www.alloprof.qc.ca/', 'yes',5,'2020-02-24 15:16:00','visible');
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` enum('admin') NOT NULL DEFAULT 'admin',
  `status` enum('enabled','disabled') NOT NULL DEFAULT 'enabled',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;	
INSERT INTO users (`id`, `username`, `password`, `name`) VALUES (1, 'claire', 'claire', 'Claire');
INSERT INTO users (`id`, `username`, `password`, `name`) VALUES (2, 'john', 'john', 'John');