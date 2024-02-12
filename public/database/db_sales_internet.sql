-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 12 Feb 2024 pada 10.04
-- Versi server: 8.0.30
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sales_internet`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer`
--

CREATE TABLE `customer` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_telepon` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_ktp` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_rumah` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `nomor_telepon`, `alamat`, `image_ktp`, `image_rumah`, `created_at`, `updated_at`) VALUES
(15, 'Dita', 'Dita@gmail.com', '08162123', 'Sidoarjo', NULL, NULL, '2024-02-11 01:32:04', '2024-02-12 02:11:32'),
(18, 'Dikar', 'dikar@gmail.com', '1234', 'Jakarta', '65c9959798019_foto-ktp-naruto.jpg', '65c9959798851_foto-rumah.jpg', '2024-02-11 03:25:38', '2024-02-11 20:50:47'),
(20, 'Keman', 'keman@gmail.com', '1124', 'Sidoarjo', NULL, NULL, '2024-02-11 03:26:28', '2024-02-11 03:26:28'),
(21, 'Contoh', 'Contoh@gmail.com', '123123', 'sadasd213123', NULL, NULL, '2024-02-12 02:12:07', '2024-02-12 02:12:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_invoice`
--

CREATE TABLE `customer_invoice` (
  `id` bigint UNSIGNED NOT NULL,
  `id_customer` char(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_paket_internet` char(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal` date NOT NULL,
  `status` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keterangan` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `customer_invoice`
--

INSERT INTO `customer_invoice` (`id`, `id_customer`, `id_paket_internet`, `tanggal`, `status`, `keterangan`, `created_at`, `updated_at`) VALUES
(7, '18', '4', '2024-01-01', 'approve', 'diterima', '2024-02-11 20:50:47', '2024-02-11 23:46:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '2014_10_12_000000_create_users_table', 1),
(10, '2014_10_12_100000_create_password_resets_table', 1),
(11, '2019_08_19_000000_create_failed_jobs_table', 1),
(12, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(13, '2024_02_09_201230_create_customer_table', 1),
(14, '2024_02_09_230223_create_paket_internet_table', 1),
(15, '2024_02_09_230259_create_paket_table', 1),
(16, '2024_02_09_230333_create_pelanggan_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `paket_internet`
--

CREATE TABLE `paket_internet` (
  `id` bigint UNSIGNED NOT NULL,
  `nama_paket` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kecepatan` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga` int NOT NULL,
  `fasilitas` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `paket_internet`
--

INSERT INTO `paket_internet` (`id`, `nama_paket`, `kecepatan`, `harga`, `fasilitas`, `created_at`, `updated_at`) VALUES
(2, 'Paket Home 1', '900', 7000000, 'Youtube', '2024-02-10 06:20:53', '2024-02-12 02:09:36'),
(4, 'Paket Home 2', '500', 6500, 'Youtube, Netflex, Spotify', '2024-02-10 08:04:23', '2024-02-10 08:04:23'),
(11, 'Paket Home 3', '1000', 800000, NULL, '2024-02-11 01:39:56', '2024-02-12 02:09:27'),
(13, 'test', '900', 1000, NULL, '2024-02-12 02:09:50', '2024-02-12 02:09:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_induk` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` char(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `nomor_induk`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Mifta Huda', '001', '$2y$10$ErliUYmgWDiPY/ERQSmKU..BaHFH.H0dNatqqj4ufpCkbY604gRGO', 'admin', '2024-02-10 00:15:52', '2024-02-11 03:16:46'),
(3, 'Dwi', '002', '$2y$10$zjcQC5Q.23CmajOsdcTQfuObl9BlgIonQXh.6r0ipYHujg8XoYlg2', 'sales', '2024-02-10 05:38:28', '2024-02-10 11:10:17'),
(7, 'Munir', '004', '$2y$10$H9zgXfgLHzkRqWMmP.J.qe/jzsak7t3.xEFeveJei8u78oaZ37dBm', 'admin', '2024-02-10 10:01:01', '2024-02-12 02:07:13');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `customer_invoice`
--
ALTER TABLE `customer_invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `paket_internet`
--
ALTER TABLE `paket_internet`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `customer_invoice`
--
ALTER TABLE `customer_invoice`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `paket_internet`
--
ALTER TABLE `paket_internet`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
