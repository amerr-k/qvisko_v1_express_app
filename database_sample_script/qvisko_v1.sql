-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2019 at 05:08 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qvisko_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `odgovori`
--

CREATE TABLE `odgovori` (
  `odgovorId` int(11) NOT NULL,
  `tekst` varchar(50) NOT NULL,
  `tacan` tinyint(1) NOT NULL,
  `pitanjeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `odgovori`
--

INSERT INTO `odgovori` (`odgovorId`, `tekst`, `tacan`, `pitanjeId`) VALUES
(1, 'Da', 0, 1),
(2, '23', 1, 1),
(3, '89', 0, 1),
(4, 'Mnogo', 0, 1),
(5, 'Nema nista, sta ima kod tebe', 0, 2),
(6, 'Svega ima ali nista ozbiljno', 0, 2),
(7, 'Za meni je danas pohovana riba sa krompiricima', 1, 2),
(8, 'Dijele nas sitnice', 0, 3),
(9, 'Dijeli nas nase ponasane prema planeti zemlji', 0, 3),
(10, 'Sekunda ev vlihno', 1, 3),
(11, 'Zivot nije osudjen, ti si osudjen', 1, 4),
(12, 'Osudjen je zivot na dozivotnu robiju', 0, 4),
(13, 'Ne', 0, 4),
(14, 'Tamo gdje ne treba', 0, 5),
(15, 'Samo tamo gdje treba', 1, 5),
(16, 'U zemlju', 0, 5);

-- --------------------------------------------------------

--
-- Table structure for table `pitanja`
--

CREATE TABLE `pitanja` (
  `pitanjeId` int(11) NOT NULL,
  `tekstPitanja` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pitanja`
--

INSERT INTO `pitanja` (`pitanjeId`, `tekstPitanja`) VALUES
(1, 'Koliko godina ima kreator kviza?'),
(2, 'Sta ima?'),
(3, 'Kolie nas dijeli do smaka svijeta?'),
(4, 'Da li je zivot osudjen na ponavljanje istih gresaka?'),
(5, '?e guraš nos?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `odgovori`
--
ALTER TABLE `odgovori`
  ADD PRIMARY KEY (`odgovorId`),
  ADD KEY `fk_pitanjeId` (`pitanjeId`);

--
-- Indexes for table `pitanja`
--
ALTER TABLE `pitanja`
  ADD PRIMARY KEY (`pitanjeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `odgovori`
--
ALTER TABLE `odgovori`
  MODIFY `odgovorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `pitanja`
--
ALTER TABLE `pitanja`
  MODIFY `pitanjeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `odgovori`
--
ALTER TABLE `odgovori`
  ADD CONSTRAINT `fk_pitanjeId` FOREIGN KEY (`pitanjeId`) REFERENCES `pitanja` (`pitanjeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
