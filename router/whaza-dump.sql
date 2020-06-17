-- MySQL dump 10.13  Distrib 5.7.27, for osx10.14 (x86_64)
--
-- Host: localhost    Database: whaza
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `weather` varchar(50) DEFAULT NULL,
  `drinks` varchar(100) DEFAULT NULL,
  `descriptionDrinks` text,
  `places` varchar(100) DEFAULT NULL,
  `descriptionPlaces` text,
  `link` text,
  `localisation` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (1,'Bordeaux','Clear','DARWIN','Lorsque les jours se rallongent, quel bonheur de pouvoir sortir dans un endroit atypique! Chaque mercredi, Darwin organise « les heures heureuses » : dj set, bières et snacks.',NULL,NULL,'https://darwin.camp/',NULL),(2,'Bordeaux','Rain','MAMA SHELTER','Un rooftop avec une vue imprenable sur Bordeaux, de la bonne musique, des bons concktails et une décoration made in Starck.',NULL,NULL,'https://www.mamashelter.com/fr/bordeaux',NULL),(3,'Bordeaux','Clear','LA GUINGUETTE CHEZ ALRIQ','Sympathique ginguette sur les bords de la Garenne, en plein air, où on vient autant pour danser que partager un verre entre amis, où satisfaire une petite faim estivale.',NULL,NULL,'https://www.laguinguettechezalriq.com/',NULL),(4,'Paris','Rain','BUDDHA BAR','En perpétuelle recherche de nouveautés à travers ses nombreux voyages notamment en Californie, ce restaurant-bar-lounge du très chic Faubourg St Honoré, devient rapidement un « incontournable » des nuits parisiennes.',NULL,NULL,'https://www.buddhabar.com/',NULL),(5,'Paris','Clear','LE BATOFAR','Célèbre péniche parisienne, le Batofar est un lieu de culture urbaine contemporain dans une ambiance de bar à cocktails. Profitez de votre apéro sous le soleil en écoutant de la bonne musique calé dans un transat, et pourquoi ne pas continuer à vous relaxer et dîner sur la péniche ?',NULL,NULL,'http://www.batofar.org/',NULL),(6,'Paris','Clear','LES TERRASSES','Les plus célèbres terrasses planquées dans le vert sont celles de Rosa Bonheur, la guinguette nichée au cœur des Buttes Chaumont ou de la fameuse Closerie des Lilas.',NULL,NULL,'https://www.rosabonheur.fr/',NULL);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placeActivity`
--

DROP TABLE IF EXISTS `placeActivity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `placeActivity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `weather` varchar(50) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  `localisation` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placeActivity`
--

LOCK TABLES `placeActivity` WRITE;
/*!40000 ALTER TABLE `placeActivity` DISABLE KEYS */;
INSERT INTO `placeActivity` VALUES (1,'Bordeaux','Clear','BORDEAUX-LAC','On part rapidement au lac où de nombreuses activités nautiques vous attendent : voile, canoë Kayak, paddle, …','https://www.google.com/maps/place/Plage+du+Lac/@44.8781683,-0.5788743,15z/data=!4m5!3m4!1s0x0:0x320a5e5582d85a63!8m2!3d44.8781683!4d-0.5788743'),(2,'Bordeaux','Clear','LES QUAIS','Une balade en long de garonne où vous pouvez profiter de la large pelouse pour faire un pique-nique et/ou une longue sieste sous les arbres.','https://www.google.com/maps/place/Les+Quais+De+Bordeaux/@44.84224,-0.5734838,17z/data=!3m1!4b1!4m5!3m4!1s0xd552878dc2368f9:0xc91c64e91e3a6409!8m2!3d44.8422362!4d-0.5712951'),(3,'Bordeaux','Rain','LA CITÉ DU VIN','Un endroit spécialement dédié à la fierté bordelaise : LE VIN. Musée, dégustation, restauration, ... tout y est pour passer un beau moment gustatif et culturel.','https://www.google.com/maps/place/Plage+du+Lac/@44.8781683,-0.5788743,15z/data=!4m5!3m4!1s0x0:0x320a5e5582d85a63!8m2!3d44.8781683!4d-0.5788743'),(4,'Paris','Clear','BORDS DE SEINE','Filmés et célébrés dans le monde entier comme essence même du romantisme de la Ville de l’Amour, les bords de Seine sont aménagés sur tout le tracé du fleuve dans Paris.','https://goo.gl/maps/xL14K7dk6xahjtR56'),(5,'Paris','Rain','CENTRE POMPIDOU','Un établissement polyculturel né de la volonté du président Georges Pompidou, grand amateur d\'art moderne, de créer au cœur de Paris une institution culturelle originale entièrement vouée à la création moderne et contemporaine.','https://www.google.com/maps/place/Le+Centre+Pompidou/@48.860642,2.352245,15z/data=!4m5!3m4!1s0x0:0xb7ac6c7e59dc3345!8m2!3d48.860642!4d2.352245'),(6,'Paris','Rain','GRANDS MAGASINS','Bon, vous prendrez la pluie pendant deux minutes entre chaque magasin, mais vous ne regretterez pas votre passage par le Boulevard Haussmann. Peut-être n’y ferez-vous pas de shopping mais vous profiterez de la magnifique verrière Art Nouveau des Galeries Lafayette (la verrière est visible du rez-de-chaussée, contrairement à celle du Printemps), levez la tête et laissez-vous emporter par le tourbillon des balcons ouvragés qui ornent le puit de jour.','https://www.google.com/maps/place/Azzaro+-+Galeries+Lafayette+Paris+Haussmann/@48.8735879,2.3321501,15z/data=!4m5!3m4!1s0x0:0x8425e098f3c06be4!8m2!3d48.8735879!4d2.3321501'),(7,'Paris','Clear','CHAMP DE MARS','Ce vaste jardin public est assurément un lieu très fréquenté tout au long de l’année mais ce qui en fait un lieu incontournable, c’est évidemment la Tour Eiffel : on peut en découvrir ses  «dessous»  lorsqu’on se promène sur le Champ-de-Mars.','https://www.google.com/maps/place/Champ+de+Mars/@48.855651,2.2964417,17z/data=!3m1!4b1!4m5!3m4!1s0x47e670209c1c4807:0x9702c4c43d00821e!8m2!3d48.8556475!4d2.2986304');
/*!40000 ALTER TABLE `placeActivity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-16 13:52:38
