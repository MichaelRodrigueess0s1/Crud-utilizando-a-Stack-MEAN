-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.17-log

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
-- Table structure for table `ingredientes_receita`
--

DROP TABLE IF EXISTS `ingredientes_receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredientes_receita` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_receita` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `quantidade` double DEFAULT NULL,
  `custo` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ingredientes_produto_materiaprima_idx` (`id_materia`),
  KEY `fk_ingredientes_produto_produto1_idx` (`id_receita`),
  CONSTRAINT `fk_ingredientes_produto_materiaprima` FOREIGN KEY (`id_materia`) REFERENCES `materiaprima` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingredientes_produto_produto1` FOREIGN KEY (`id_receita`) REFERENCES `receita` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientes_receita`
--

LOCK TABLES `ingredientes_receita` WRITE;
/*!40000 ALTER TABLE `ingredientes_receita` DISABLE KEYS */;
INSERT INTO `ingredientes_receita` VALUES (83,5,1,7,2.5),(84,5,1,7,2.5),(85,5,1,7,2.5),(86,5,4,150,0.87),(87,6,2,200,9.45),(88,6,9,150,0.6),(89,6,10,300,20.85),(90,4,4,120,0.696),(97,37,7,320,13.9),(98,37,7,850,36.921875),(99,37,7,100,4.34375),(100,37,7,20,0.86875),(101,37,7,4,0.17375000000000002);
/*!40000 ALTER TABLE `ingredientes_receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiaprima`
--

DROP TABLE IF EXISTS `materiaprima`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiaprima` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `custo` double DEFAULT NULL,
  `medida` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiaprima`
--

LOCK TABLES `materiaprima` WRITE;
/*!40000 ALTER TABLE `materiaprima` DISABLE KEYS */;
INSERT INTO `materiaprima` VALUES (1,'Banana',7,2.5,'unidade'),(2,'Farinha de Coco',400,18.9,'gramas'),(3,'Farinha de Aveia',500,2.9,'gramas'),(4,'Aveia em Flocos',500,2.9,'gramas'),(5,'Farinha de Arroz',500,2.9,'gramas'),(6,'Açuca Mascavo',1000,4.9,'gramas'),(7,'Tahine',320,13.9,'gramas'),(8,'Melado de Cana',450,8.9,'ml'),(9,'Óleo de Soja',1000,4,'ml'),(10,'Cacau em pó',200,13.9,'gramas'),(11,'Linhaça',500,4,'gramas'),(16,'Farinha de Aveia',500,2.9,'gramas'),(17,'Aveia em Flocos',500,2.9,'gramas'),(18,'Farinha de Aveia',500,2.9,'gramas'),(19,'Óleo de Soja',1000,4,'ml');
/*!40000 ALTER TABLE `materiaprima` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receita`
--

DROP TABLE IF EXISTS `receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receita` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) DEFAULT NULL,
  `custototal` double DEFAULT NULL,
  `totalunidades` int(11) DEFAULT NULL,
  `precovenda` double DEFAULT NULL,
  `lucrototal` double DEFAULT NULL COMMENT '1 = doce\n2 = salgada\n',
  `tipo_receita` int(11) DEFAULT NULL,
  `passopasso` text,
  `foto` longtext,
  `dificuldade` varchar(10) DEFAULT NULL,
  `tempo` varchar(20) DEFAULT NULL,
  `token` varchar(45) DEFAULT NULL,
  `dataCadastro` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receita`
--

LOCK TABLES `receita` WRITE;
/*!40000 ALTER TABLE `receita` DISABLE KEYS */;
INSERT INTO `receita` VALUES (1,'Biscoito de Banana',13,20,3,15,1,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Biscoito de Cacau',15,20,3.5,5,2,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Biscoito de Amendoin',9,20,2.5,21,1,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Biscoito de Tamara',NULL,NULL,NULL,NULL,NULL,'teste',NULL,'2','123','123','2017-04-08 04:54:22'),(5,'Biscoito de Amendoas',NULL,NULL,NULL,NULL,NULL,'teste',NULL,'3','1 hora','12wdsa','2017-04-08 04:55:50'),(6,'TESTE',NULL,NULL,NULL,NULL,NULL,'teste',NULL,'1','1 hora','teste','2017-04-10 23:05:06'),(7,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(8,'asdasd',NULL,NULL,NULL,NULL,NULL,'asdasdasd',NULL,'2','12','asdasd','2017-04-11 15:23:25'),(9,'asdasd',NULL,NULL,NULL,NULL,NULL,'asdasd',NULL,'2','12','asdasd','2017-04-11 15:24:09'),(10,'Teste',NULL,NULL,NULL,NULL,NULL,'Teste',NULL,'2','12','asdasd','2017-04-11 15:25:22'),(11,'Teste 1104',NULL,NULL,NULL,NULL,NULL,'123456',NULL,'3','12','123456','2017-04-11 15:27:42'),(12,'Receita de Bacalhau',NULL,NULL,NULL,NULL,NULL,'Primeiro passo faça isso aquilo e acola',NULL,'3','1','123456','2017-04-11 15:52:43'),(13,'Biscoito de Coco com Avelã',NULL,NULL,NULL,NULL,NULL,'123',NULL,'3','2 horas','123456','2017-04-11 15:55:01'),(14,'Abobora empanada',NULL,NULL,NULL,NULL,NULL,'123',NULL,'3','5 minutos','456123','2017-04-11 15:56:09'),(15,'Biscoito de Coco com Avelã',NULL,NULL,NULL,NULL,NULL,'teste',NULL,'2','12','123456','2017-04-11 15:59:36'),(16,'asdasd',NULL,NULL,NULL,NULL,NULL,'teste',NULL,'2','12','asdasd','2017-04-11 16:00:19'),(17,'jhgfd',NULL,NULL,NULL,NULL,NULL,'qwewqe',NULL,'2','12','asdasd','2017-04-11 16:01:31'),(18,'asd123',NULL,NULL,NULL,NULL,NULL,'123123',NULL,'2','12','123asdasd','2017-04-11 16:01:54'),(19,'Crostini de amendoin',NULL,NULL,NULL,NULL,NULL,'passo 1\npasso 2\npasso 3\npasso 4',NULL,'2','12 minutos','123456','2017-04-11 16:03:03'),(20,'asssss',NULL,NULL,NULL,NULL,NULL,'asd',NULL,'2','122','sdasdasdasd','2017-04-18 02:54:50'),(21,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(22,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(23,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(24,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(25,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(26,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(27,'Biscoito de Amendoin',9,20,2.5,21,1,NULL,NULL,NULL,NULL,NULL,NULL),(28,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(29,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(30,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(31,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(32,'Biscoito de Amendoin',9,20,2.5,21,1,NULL,NULL,NULL,NULL,NULL,NULL),(33,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(34,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(35,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(36,'Sanduiche de atum',NULL,NULL,NULL,NULL,NULL,'passo 1 separe o pão\npasso 2 coloque o atum\npasso 3 feche o pão',NULL,'1','2 minutos','1234','2017-04-10 23:08:50'),(37,'Biscoito de Abobora',NULL,NULL,NULL,NULL,NULL,'Descrição de como fazer a receita',NULL,'2','00:30','142500','2017-04-20 02:50:07');
/*!40000 ALTER TABLE `receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_receita` int(11) NOT NULL,
  `cliente` varchar(45) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_venda_receita1_idx` (`id_receita`),
  CONSTRAINT `fk_venda_receita1` FOREIGN KEY (`id_receita`) REFERENCES `receita` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-20  0:13:29
