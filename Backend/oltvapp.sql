-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2024 at 03:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oltvapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `felhasznalo_id` bigint(20) UNSIGNED NOT NULL,
  `vez_nev` varchar(50) NOT NULL,
  `ker_nev` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`felhasznalo_id`, `vez_nev`, `ker_nev`, `created_at`, `updated_at`) VALUES
(1, 'Mogyoródi', 'Balázs', '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(2, 'Ncu', 'Peter', '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(3, 'Jakab', 'Peter', '2024-05-03 11:27:35', '2024-05-03 11:27:35');

--
-- Triggers `admins`
--
DELIMITER $$
CREATE TRIGGER `admins_check_felhasznalo_id_k_role` BEFORE INSERT ON `admins` FOR EACH ROW BEGIN
            DECLARE felhasznalo_count INT;
            SELECT COUNT(*)
            INTO felhasznalo_count
            FROM felhasznalos
            WHERE id = NEW.felhasznalo_id AND szerepkor = 'A';

            IF felhasznalo_count = 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "The felhasznalo_id must reference an 'A' role felhasznalos";
            END IF;
        END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `beadandos`
--

CREATE TABLE `beadandos` (
  `beadando_id` bigint(20) UNSIGNED NOT NULL,
  `gyerek_id` bigint(20) UNSIGNED NOT NULL,
  `tipus_id` bigint(20) UNSIGNED NOT NULL,
  `ev` int(11) NOT NULL,
  `honap` int(11) NOT NULL,
  `hanyadik` int(11) NOT NULL,
  `beadva` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `beadandos`
--

INSERT INTO `beadandos` (`beadando_id`, `gyerek_id`, `tipus_id`, `ev`, `honap`, `hanyadik`, `beadva`, `created_at`, `updated_at`) VALUES
(1, 325245267, 1, 2024, 12, 1, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(2, 325245267, 2, 2025, 12, 2, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(3, 325245267, 3, 2023, 12, 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(4, 452645123, 1, 2024, 4, 1, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(5, 452645123, 1, 2024, 5, 2, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(6, 432354345, 5, 2024, 6, 1, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(7, 432354345, 1, 2023, 2, 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(8, 432354345, 1, 2023, 3, 2, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36');

-- --------------------------------------------------------

--
-- Table structure for table `beadas`
--

CREATE TABLE `beadas` (
  `orvos_id` bigint(20) UNSIGNED NOT NULL,
  `oltas_id` bigint(20) UNSIGNED NOT NULL,
  `beadando_id` bigint(20) UNSIGNED NOT NULL,
  `beadas_datuma` date NOT NULL,
  `megjegyzes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `beadas`
--

INSERT INTO `beadas` (`orvos_id`, `oltas_id`, `beadando_id`, `beadas_datuma`, `megjegyzes`, `created_at`, `updated_at`) VALUES
(7, 7, 3, '2023-12-11', 'blabla', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(7, 2, 7, '2023-02-01', NULL, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(7, 2, 8, '2023-03-12', NULL, '2024-05-03 11:27:36', '2024-05-03 11:27:36');

-- --------------------------------------------------------

--
-- Table structure for table `beszerzes`
--

CREATE TABLE `beszerzes` (
  `beszerzes_id` bigint(20) UNSIGNED NOT NULL,
  `oltas_id` bigint(20) UNSIGNED NOT NULL,
  `orvos_id` bigint(20) UNSIGNED NOT NULL,
  `darab` int(11) NOT NULL,
  `beszerzes_datuma` date NOT NULL,
  `lejarati_datuma` date NOT NULL,
  `megsemmesites_datuma` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `beszerzes`
--

INSERT INTO `beszerzes` (`beszerzes_id`, `oltas_id`, `orvos_id`, `darab`, `beszerzes_datuma`, `lejarati_datuma`, `megsemmesites_datuma`, `created_at`, `updated_at`) VALUES
(1, 1, 7, 5, '2023-12-10', '2024-12-10', NULL, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(2, 4, 7, 10, '2023-12-10', '2024-12-10', '2024-12-11', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(3, 6, 7, 20, '2023-12-10', '2024-12-10', NULL, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(4, 1, 8, 10, '2023-12-10', '2024-12-10', '2024-12-11', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(5, 2, 8, 30, '2023-12-10', '2024-12-10', NULL, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(6, 7, 9, 30, '2023-05-12', '2024-12-12', NULL, '2024-05-03 11:27:36', '2024-05-03 11:27:36');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `felhasznalos`
--

CREATE TABLE `felhasznalos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `felhasznalo_nev` varchar(30) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `felhasznalo_email` varchar(254) NOT NULL,
  `szerepkor` char(1) NOT NULL,
  `aktiv` tinyint(1) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ;

--
-- Dumping data for table `felhasznalos`
--

INSERT INTO `felhasznalos` (`id`, `felhasznalo_nev`, `jelszo`, `felhasznalo_email`, `szerepkor`, `aktiv`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Szulo', '$2y$12$RZ.zc6XEoT4B0TbxVW3zV.egIJ/53jfl8nbaTco1Mlk3n9IfeOKOm', 'sandor@gmail.com', 'S', 1, NULL, '2024-05-03 11:27:33', '2024-05-03 11:27:33'),
(2, 'martonkavok', '$2y$12$/f6v64aTDJvKiS2QBGcp9egVH9qFBQUQQcyy/9kJDNf9j1e/6F6.2', 'marton@gmail.com', 'S', 1, NULL, '2024-05-03 11:27:34', '2024-05-03 11:27:34'),
(3, 'rozineni', '$2y$12$EhYBGWqoCqlF64bWicnUse5vSOyqVCgyHf80vLjhG9egxoE.hCvRO', 'rozika@gmail.com', 'S', 0, NULL, '2024-05-03 11:27:34', '2024-05-03 11:27:34'),
(4, 'Admin', '$2y$12$7Z/FYlAS3iRda2VwD9S9GO216SIPOrGoBvjkQ4SMXfKGkselHzbwu', 'bal@gmail.com', 'A', 1, NULL, '2024-05-03 11:27:34', '2024-05-03 11:27:34'),
(5, 'petikavok Admin', '$2y$12$Lury2dCQqwIW39aq3R4OWOTYpIjlX1FBKjB7MgA5f4/vzablMSdDG', 'peti@gmail.com', 'A', 1, NULL, '2024-05-03 11:27:34', '2024-05-03 11:27:34'),
(6, 'jakabPtr Admin', '$2y$12$tTYwMnRt7DUav2NNPFoIIO6Vysz87sVO8d.UKovFy6SQ..kk1Ezx6', 'jakab@gmail.com', 'A', 0, NULL, '2024-05-03 11:27:34', '2024-05-03 11:27:34'),
(7, 'kovacsBela', '$2y$12$9rHaFojwzSeJ3WpTMY92PeMa.NdJYx8kTddmMB7ujXBjQuBzMTScW', 'kov@gmail.com', 'O', 1, NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(8, 'Orvos', '$2y$12$AMB6Jnpj28w4h5uRYy9qSe.m0qsMkHKuOs9JEBSSBit5GzXKhFij6', 'somogyiandraska@gmail.com', 'O', 1, NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(9, 'JoskaSanyi', '$2y$12$ANanElftmecuTcd5s0qRXOmZ9DBZBRDnnFlnf5Zuy60udMcyytAPe', 'joska@gmail.com', 'O', 0, NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35');

-- --------------------------------------------------------

--
-- Table structure for table `gyereks`
--

CREATE TABLE `gyereks` (
  `gyerek_taj` bigint(20) UNSIGNED NOT NULL,
  `vez_nev` varchar(50) NOT NULL,
  `ker_nev` varchar(50) NOT NULL,
  `szul_datum` date NOT NULL,
  `szul_hely` varchar(50) NOT NULL,
  `orvos_id` bigint(20) UNSIGNED NOT NULL,
  `szulo_id` bigint(20) UNSIGNED NOT NULL,
  `lakcim_varos` varchar(50) NOT NULL,
  `lakcim_irSzam` int(11) NOT NULL,
  `lakcim_utca` varchar(100) NOT NULL,
  `erzekenyseg` varchar(400) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gyereks`
--

INSERT INTO `gyereks` (`gyerek_taj`, `vez_nev`, `ker_nev`, `szul_datum`, `szul_hely`, `orvos_id`, `szulo_id`, `lakcim_varos`, `lakcim_irSzam`, `lakcim_utca`, `erzekenyseg`, `created_at`, `updated_at`) VALUES
(232354346, 'Botond', 'Rodond', '2009-10-16', 'Érd', 8, 3, 'Kacsóta', 3438, 'Földes utca 56.', 'Fény allergia', '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(325245267, 'Somogyi', 'Gödör', '2010-02-13', 'Pécs', 7, 1, 'Pécs', 4535, 'Rántott utca 2.', 'Bolha allergia', '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(342342334, 'Botond', 'Docond', '2008-03-03', 'Érd', 9, 3, 'Kacsóta', 3438, 'Földes utca 56.', NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(432354345, 'Vicc', 'Elek', '2015-06-27', 'Budapest', 7, 2, 'Budapest', 3525, 'Szent jakab utca 23.', NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(452645123, 'Somogyi', 'Pince', '2020-02-13', 'Pécs', 7, 1, 'Pécs', 4535, 'Rántott utca 2.', NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(457584854, 'Botond', 'Fotond', '2013-12-29', 'Érd', 8, 3, 'Kacsóta', 3438, 'Földes utca 56.', NULL, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(938472345, 'Somogyi', 'Gaspar', '2022-12-13', 'Pécs', 7, 1, 'Pécs', 4535, 'Rántott utca 2.', 'laktózérzékeny', '2024-05-03 11:27:35', '2024-05-03 11:27:35');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `gyerek_taj` bigint(20) UNSIGNED NOT NULL,
  `tipus_id` bigint(20) UNSIGNED NOT NULL,
  `kikuldes_datuma` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_12_000001_create_felhasznalos_table', 1),
(6, '2024_01_12_000002_create_admins_table', 1),
(7, '2024_01_12_000004_create_orvos_table', 1),
(8, '2024_01_12_000005_create_szulos_table', 1),
(9, '2024_01_12_000006_create_gyereks_table', 1),
(10, '2024_01_12_000008_create_oltas_tipuses_table', 1),
(11, '2024_01_12_000009_create_oltas_table', 1),
(12, '2024_01_12_101405_create_beszerzes_table', 1),
(13, '2024_02_27_091342_create_beadandos_table', 1),
(14, '2024_02_27_092240_create_levels_table', 1),
(15, '2024_02_27_094245_create_parameters_table', 1),
(16, '2024_02_27_9000000_create_beadas_table', 1),
(17, '2024_03_29_211939_add_constraint_to_admins_table', 1),
(18, '2024_03_29_212210_add_constraint_to_admins_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oltas`
--

CREATE TABLE `oltas` (
  `oltas_id` bigint(20) UNSIGNED NOT NULL,
  `tipus_id` bigint(20) UNSIGNED NOT NULL,
  `oltoanyag_neve` varchar(50) NOT NULL,
  `forgalmazo` varchar(50) NOT NULL,
  `leiras` varchar(255) NOT NULL,
  `adagolas` varchar(255) NOT NULL,
  `receptre` tinyint(1) NOT NULL,
  `aktiv` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oltas`
--

INSERT INTO `oltas` (`oltas_id`, `tipus_id`, `oltoanyag_neve`, `forgalmazo`, `leiras`, `adagolas`, `receptre`, `aktiv`, `created_at`, `updated_at`) VALUES
(1, 1, 'Valneva', 'AstraZeneca', 'blabla', 'egyszeri adagolas', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(2, 1, 'Sputnyik', 'Novavax', 'blabla', 'kettő adag', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(3, 1, 'Hungavirus', 'Magyar gyógyszerészet', 'blabla', 'három adag', 1, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(4, 2, 'Vidprev', 'Novavax', 'blabla', 'három adag', 0, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(5, 2, 'Vidrakosz', 'Leverkusen', 'blabla', 'egyszeri adagolás', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(6, 3, 'Vödrös', 'Pfizer', 'blabla', 'kettő adag', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(7, 3, 'Vödrös2', 'Pfizer', 'blabla', 'egyszeri adagolás', 0, 0, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(8, 4, 'Pinces', 'Janssen', 'blabla', 'egyszeri adagolás', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(9, 5, 'Sophiane', 'GSK-Sanofi', 'blabla', 'három adag', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(10, 5, 'Sophratesz', 'GSK-Sanofi', 'blabla', 'egyszeri adagolás', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(11, 6, 'Fureszpor', 'GSK-Sanofi', 'blabla', 'kettő adag', 1, 1, '2024-05-03 11:27:36', '2024-05-03 11:27:36');

-- --------------------------------------------------------

--
-- Table structure for table `oltas_tipuses`
--

CREATE TABLE `oltas_tipuses` (
  `tipus_id` bigint(20) UNSIGNED NOT NULL,
  `tipus_elnev` varchar(50) NOT NULL,
  `kotelezo` tinyint(1) NOT NULL,
  `leiras` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oltas_tipuses`
--

INSERT INTO `oltas_tipuses` (`tipus_id`, `tipus_elnev`, `kotelezo`, `leiras`, `created_at`, `updated_at`) VALUES
(1, 'Koronavirus', 1, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(2, 'Rotavírus', 0, 'Quia quis voluptatum nulla natus, labore, ab excepturi rerum', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(3, 'HPV', 0, 'adipisci ut repellat atque autem', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(4, 'BCG', 1, 'magnam itaque', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(5, 'Varicella', 1, 'blablabla', '2024-05-03 11:27:36', '2024-05-03 11:27:36'),
(6, 'BAKTIT', 1, 'szerintem jó választás', '2024-05-03 11:27:36', '2024-05-03 11:27:36');

-- --------------------------------------------------------

--
-- Table structure for table `orvos`
--

CREATE TABLE `orvos` (
  `felhasznalo_id` bigint(20) UNSIGNED NOT NULL,
  `vez_nev` varchar(50) NOT NULL,
  `ker_nev` varchar(50) NOT NULL,
  `tel_szam` varchar(30) NOT NULL,
  `publikus_email` varchar(254) NOT NULL,
  `rendelo_ajto_szam` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orvos`
--

INSERT INTO `orvos` (`felhasznalo_id`, `vez_nev`, `ker_nev`, `tel_szam`, `publikus_email`, `rendelo_ajto_szam`, `created_at`, `updated_at`) VALUES
(7, 'Dr. Kovács', 'Béla', '+36202299188', 'drkovacs@gmail.com', 12, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(8, 'Dr. Somogyi', 'András István', '+36202299124', 'somogyi.andras.istvan@gmail.com', 2, '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(9, 'Dr. Joska', 'Sanyi', '+36301263132', 'drsanyijoska@gmail.com', 10, '2024-05-03 11:27:35', '2024-05-03 11:27:35');

--
-- Triggers `orvos`
--
DELIMITER $$
CREATE TRIGGER `orvos_check_felhasznalo_id_k_role` BEFORE INSERT ON `orvos` FOR EACH ROW BEGIN
            DECLARE felhasznalo_count INT;
            SELECT COUNT(*)
            INTO felhasznalo_count
            FROM felhasznalos
            WHERE id = NEW.felhasznalo_id AND szerepkor = 'O';

            IF felhasznalo_count = 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "The felhasznalo_id must reference an 'O' role felhasznalos";
            END IF;
        END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `parameters`
--

CREATE TABLE `parameters` (
  `kuldo_email` varchar(254) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `szulos`
--

CREATE TABLE `szulos` (
  `felhasznalo_id` bigint(20) UNSIGNED NOT NULL,
  `vez_nev` varchar(50) NOT NULL,
  `ker_nev` varchar(50) NOT NULL,
  `szemelyi_igazolvany_szam` varchar(12) NOT NULL,
  `telefonszam` varchar(12) NOT NULL,
  `lakcim_varos` varchar(50) NOT NULL,
  `lakcim_irSzam` int(11) NOT NULL,
  `lakcim_utca` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `szulos`
--

INSERT INTO `szulos` (`felhasznalo_id`, `vez_nev`, `ker_nev`, `szemelyi_igazolvany_szam`, `telefonszam`, `lakcim_varos`, `lakcim_irSzam`, `lakcim_utca`, `created_at`, `updated_at`) VALUES
(1, 'Rozsané', 'Sandor Ilonka', '321332RE', '+36202345621', 'Pécs', 4535, 'Rántott utca 2.', '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(2, 'Somogyvári', 'Márton', '223412RE', '+36102238194', 'Budapest', 3525, 'Szent jakab utca 23.', '2024-05-03 11:27:35', '2024-05-03 11:27:35'),
(3, 'Rozsás', 'Julianna', '323546RE', '+36306892527', 'Kacsóta', 3438, 'Földes utca 56.', '2024-05-03 11:27:35', '2024-05-03 11:27:35');

--
-- Triggers `szulos`
--
DELIMITER $$
CREATE TRIGGER `szulo_check_felhasznalo_id_k_role` BEFORE INSERT ON `szulos` FOR EACH ROW BEGIN
            DECLARE felhasznalo_count INT;
            SELECT COUNT(*)
            INTO felhasznalo_count
            FROM felhasznalos
            WHERE id = NEW.felhasznalo_id AND szerepkor = 'S';

            IF felhasznalo_count = 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "The felhasznalo_id must reference an 'S' role felhasznalos";
            END IF;
        END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`felhasznalo_id`);

--
-- Indexes for table `beadandos`
--
ALTER TABLE `beadandos`
  ADD PRIMARY KEY (`beadando_id`),
  ADD KEY `beadandos_gyerek_id_foreign` (`gyerek_id`),
  ADD KEY `beadandos_tipus_id_foreign` (`tipus_id`);

--
-- Indexes for table `beadas`
--
ALTER TABLE `beadas`
  ADD KEY `beadas_orvos_id_foreign` (`orvos_id`),
  ADD KEY `beadas_oltas_id_foreign` (`oltas_id`),
  ADD KEY `beadas_beadando_id_foreign` (`beadando_id`);

--
-- Indexes for table `beszerzes`
--
ALTER TABLE `beszerzes`
  ADD PRIMARY KEY (`beszerzes_id`),
  ADD KEY `beszerzes_oltas_id_foreign` (`oltas_id`),
  ADD KEY `beszerzes_orvos_id_foreign` (`orvos_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `felhasznalos`
--
ALTER TABLE `felhasznalos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `felhasznalos_felhasznalo_nev_unique` (`felhasznalo_nev`),
  ADD UNIQUE KEY `felhasznalos_felhasznalo_email_unique` (`felhasznalo_email`);

--
-- Indexes for table `gyereks`
--
ALTER TABLE `gyereks`
  ADD PRIMARY KEY (`gyerek_taj`),
  ADD KEY `gyereks_orvos_id_foreign` (`orvos_id`),
  ADD KEY `gyereks_szulo_id_foreign` (`szulo_id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`level_id`),
  ADD KEY `levels_gyerek_taj_foreign` (`gyerek_taj`),
  ADD KEY `levels_tipus_id_foreign` (`tipus_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oltas`
--
ALTER TABLE `oltas`
  ADD PRIMARY KEY (`oltas_id`),
  ADD KEY `oltas_tipus_id_foreign` (`tipus_id`);

--
-- Indexes for table `oltas_tipuses`
--
ALTER TABLE `oltas_tipuses`
  ADD PRIMARY KEY (`tipus_id`);

--
-- Indexes for table `orvos`
--
ALTER TABLE `orvos`
  ADD PRIMARY KEY (`felhasznalo_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `szulos`
--
ALTER TABLE `szulos`
  ADD PRIMARY KEY (`felhasznalo_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `felhasznalo_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `beadandos`
--
ALTER TABLE `beadandos`
  MODIFY `beadando_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `beszerzes`
--
ALTER TABLE `beszerzes`
  MODIFY `beszerzes_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `felhasznalos`
--
ALTER TABLE `felhasznalos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gyereks`
--
ALTER TABLE `gyereks`
  MODIFY `gyerek_taj` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=938472346;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `level_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `oltas`
--
ALTER TABLE `oltas`
  MODIFY `oltas_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `oltas_tipuses`
--
ALTER TABLE `oltas_tipuses`
  MODIFY `tipus_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orvos`
--
ALTER TABLE `orvos`
  MODIFY `felhasznalo_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `szulos`
--
ALTER TABLE `szulos`
  MODIFY `felhasznalo_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_felhasznalo_id_foreign` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalos` (`id`);

--
-- Constraints for table `beadandos`
--
ALTER TABLE `beadandos`
  ADD CONSTRAINT `beadandos_gyerek_id_foreign` FOREIGN KEY (`gyerek_id`) REFERENCES `gyereks` (`gyerek_taj`),
  ADD CONSTRAINT `beadandos_tipus_id_foreign` FOREIGN KEY (`tipus_id`) REFERENCES `oltas_tipuses` (`tipus_id`);

--
-- Constraints for table `beadas`
--
ALTER TABLE `beadas`
  ADD CONSTRAINT `beadas_beadando_id_foreign` FOREIGN KEY (`beadando_id`) REFERENCES `beadandos` (`beadando_id`),
  ADD CONSTRAINT `beadas_oltas_id_foreign` FOREIGN KEY (`oltas_id`) REFERENCES `oltas` (`oltas_id`),
  ADD CONSTRAINT `beadas_orvos_id_foreign` FOREIGN KEY (`orvos_id`) REFERENCES `orvos` (`felhasznalo_id`);

--
-- Constraints for table `beszerzes`
--
ALTER TABLE `beszerzes`
  ADD CONSTRAINT `beszerzes_oltas_id_foreign` FOREIGN KEY (`oltas_id`) REFERENCES `oltas` (`oltas_id`),
  ADD CONSTRAINT `beszerzes_orvos_id_foreign` FOREIGN KEY (`orvos_id`) REFERENCES `orvos` (`felhasznalo_id`);

--
-- Constraints for table `gyereks`
--
ALTER TABLE `gyereks`
  ADD CONSTRAINT `gyereks_orvos_id_foreign` FOREIGN KEY (`orvos_id`) REFERENCES `orvos` (`felhasznalo_id`),
  ADD CONSTRAINT `gyereks_szulo_id_foreign` FOREIGN KEY (`szulo_id`) REFERENCES `szulos` (`felhasznalo_id`);

--
-- Constraints for table `levels`
--
ALTER TABLE `levels`
  ADD CONSTRAINT `levels_gyerek_taj_foreign` FOREIGN KEY (`gyerek_taj`) REFERENCES `gyereks` (`gyerek_taj`),
  ADD CONSTRAINT `levels_tipus_id_foreign` FOREIGN KEY (`tipus_id`) REFERENCES `oltas_tipuses` (`tipus_id`);

--
-- Constraints for table `oltas`
--
ALTER TABLE `oltas`
  ADD CONSTRAINT `oltas_tipus_id_foreign` FOREIGN KEY (`tipus_id`) REFERENCES `oltas_tipuses` (`tipus_id`);

--
-- Constraints for table `orvos`
--
ALTER TABLE `orvos`
  ADD CONSTRAINT `orvos_felhasznalo_id_foreign` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalos` (`id`);

--
-- Constraints for table `szulos`
--
ALTER TABLE `szulos`
  ADD CONSTRAINT `szulos_felhasznalo_id_foreign` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
