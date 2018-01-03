-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 19, 2017 at 03:38 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `nextgenmortgage`
--
CREATE DATABASE IF NOT EXISTS `nextgenmortgage` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `nextgenmortgage`;

-- --------------------------------------------------------

--
-- Table structure for table `borrower`
--

DROP TABLE IF EXISTS `borrower`;
CREATE TABLE `borrower` (
  `id` int(11) NOT NULL,
  `fname` varchar(128) DEFAULT NULL,
  `lname` varchar(128) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `property_type` int(1) DEFAULT NULL,
  `property_used` int(1) DEFAULT NULL,
  `property_mortgage` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `borrower`
--
ALTER TABLE `borrower`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borrower`
--
ALTER TABLE `borrower`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;COMMIT;

