CREATE DATABASE IF NOT EXISTS video_belajar;
USE video_belajar;

-- Create table for users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  noTelp VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'student') DEFAULT 'student',
  profileImg VARCHAR(255) DEFAULT '/image/avatar-men.png',

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seed initial users
INSERT INTO users (fullName, email, noTelp, password, role, profileImg)
VALUES
('Admin Utama', 'admin@example.com', '081234567890', '$2b$10$uD9WkbMKmBqC1TzP6HR4Ve3rTg9V88oItg.Bo6FzRjKksSR7bG9u2', 'admin', '/image/avatar-men.png'),
('Student 1', 'student@example.com', '089876543210', '$2b$10$uD9WkbMKmBqC1TzP6HR4Ve3rTg9V88oItg.Bo6FzRjKksSR7bG9u2', 'student', '/image/avatar-women.png');
-- Password for both users is '123456' --

-- Create table for categories
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seed initial categories
INSERT INTO categories (name, description)
VALUES
('Digital & Teknologi', 'Kategori ini berfokus pada dunia digital, pemrograman, teknologi informasi, dan inovasi berbasis internet. Cocok untuk kamu yang ingin belajar coding, data science, AI, atau keamanan siber.'),
('Pemasaran', 'Kategori ini membahas strategi pemasaran digital, media sosial, branding, dan analisis pasar untuk membantu bisnis tumbuh secara efektif.'),
('Manajemen Bisnis', 'Berisi materi tentang pengelolaan bisnis, kepemimpinan, pengambilan keputusan, serta strategi bisnis modern untuk wirausahawan dan profesional.'),
('Pengembangan Diri', 'Fokus pada peningkatan kemampuan pribadi, termasuk komunikasi, produktivitas, mindset, dan soft skill yang dibutuhkan di dunia kerja.'),
('Desain', 'Membahas prinsip desain grafis, UI/UX, ilustrasi, dan tools kreatif seperti Figma, Adobe, dan lainnya untuk menciptakan karya visual yang menarik.');

