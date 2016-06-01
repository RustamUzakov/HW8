-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2016 at 07:20 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homework8`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactsdonate`
--

CREATE TABLE `contactsdonate` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `PostCode` int(11) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `CardName` varchar(255) NOT NULL,
  `CardNumber` int(11) NOT NULL,
  `CardCVV` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `Dateofregistration` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contactsvolunteer`
--

CREATE TABLE `contactsvolunteer` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `dateOfRegistration` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactsvolunteer`
--

INSERT INTO `contactsvolunteer` (`id`, `FirstName`, `LastName`, `Email`, `dateOfRegistration`) VALUES
(23, 'Rustam', 'Uzakov', 'rust.uzakov@gmail.com', '2016-06-01 17:05:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactsdonate`
--
ALTER TABLE `contactsdonate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactsvolunteer`
--
ALTER TABLE `contactsvolunteer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactsdonate`
--
ALTER TABLE `contactsdonate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `contactsvolunteer`
--
ALTER TABLE `contactsvolunteer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
