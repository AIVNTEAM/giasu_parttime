-- --------------------------------------------------------
-- ホスト:                          127.0.0.1
-- サーバのバージョン:                    5.6.26 - MySQL Community Server (GPL)
-- サーバー OS:                      Win32
-- HeidiSQL バージョン:               9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for テーブル dorapuro.a_cashback
CREATE TABLE IF NOT EXISTS `a_cashback` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `apply_datetime` datetime DEFAULT NULL COMMENT 'キャッシュバック申請日時',
  `apply_status` int(11) NOT NULL COMMENT 'キャッシュバック申請状況',
  `apply_status_update` datetime DEFAULT NULL COMMENT 'キャッシュバック申請状況更新日時',
  `sign_status` int(11) NOT NULL COMMENT '採用状況',
  `sign_status_update` datetime DEFAULT NULL COMMENT '採用状況更新日時',
  `start_date` date NOT NULL COMMENT '入社日',
  `admin_memo` text NOT NULL COMMENT '管理者用メモ',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='キャッシュバック';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_company
CREATE TABLE IF NOT EXISTS `a_company` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_name` varchar(256) NOT NULL COMMENT '企業名',
  `last_login` datetime DEFAULT NULL COMMENT '最終ログイン日時',
  `logo` varchar(256) DEFAULT NULL COMMENT 'ロゴファイル',
  `main_copy` text COMMENT 'メインコピー',
  `sub_copy` text COMMENT 'サブコピー',
  `main_message` text COMMENT 'メインメッセージ',
  `homepage` varchar(256) DEFAULT NULL COMMENT 'ホームページURL',
  `setsuritsu` date DEFAULT NULL COMMENT '設立',
  `daihyousya` varchar(256) DEFAULT NULL COMMENT '代表者名',
  `shihonkin` varchar(256) DEFAULT NULL COMMENT '資本金',
  `address` varchar(256) DEFAULT NULL COMMENT '所在地（本社）',
  `lon` varchar(256) DEFAULT NULL COMMENT '経度（本社）',
  `lat` varchar(256) DEFAULT NULL COMMENT '緯度（本社）',
  `zigyounaiyou` text COMMENT '事業内容',
  `zyuugyouinsuu` varchar(256) DEFAULT NULL COMMENT '従業員数',
  `syaryouhoyuusuu` text COMMENT '車両保有数',
  `tantou_name` varchar(256) DEFAULT NULL COMMENT '採用担当者名',
  `tantou_email` varchar(256) DEFAULT NULL COMMENT '採用担当者メールアドレス',
  `tantou_tel` varchar(256) DEFAULT NULL COMMENT '採用担当者電話番号',
  `uketsukezikan` text COMMENT '受付時間',
  `admin_memo` text COMMENT '管理者用メモ',
  `post_status` int(11) NOT NULL COMMENT '掲載状況',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企業テーブル';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_company_admin
CREATE TABLE IF NOT EXISTS `a_company_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` varchar(255) NOT NULL COMMENT '企業ID',
  `company_admin_name` varchar(255) NOT NULL COMMENT '企業管理者名',
  `login_id` varchar(255) NOT NULL COMMENT 'ログインID',
  `login_pw` varchar(255) NOT NULL COMMENT 'ログインパスワード',
  `last_login` datetime DEFAULT NULL COMMENT '最終ログイン日時',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企業 管理者';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_company_gyoutai
CREATE TABLE IF NOT EXISTS `a_company_gyoutai` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` varchar(255) NOT NULL COMMENT '企業ID',
  `gyoutai_id` varchar(255) NOT NULL COMMENT '業態ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企業 業態';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_company_image
CREATE TABLE IF NOT EXISTS `a_company_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` int(11) NOT NULL COMMENT '企業ID',
  `image` varchar(255) NOT NULL COMMENT '画像ファイル',
  `position` int(11) NOT NULL COMMENT '配置場所',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企業 画像';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_company_sub
CREATE TABLE IF NOT EXISTS `a_company_sub` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` varchar(255) NOT NULL COMMENT '企業ID',
  `company_sub_name` varchar(255) NOT NULL COMMENT '営業所・支店名',
  `address` varchar(255) NOT NULL COMMENT '所在地',
  `tel` varchar(255) NOT NULL COMMENT '電話番号',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企業 営業所・支店';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_company_tantou
CREATE TABLE IF NOT EXISTS `a_company_tantou` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` varchar(255) NOT NULL COMMENT '企業ID',
  `tantou_name` varchar(256) DEFAULT NULL COMMENT '採用担当者名',
  `tantou_email` varchar(256) DEFAULT NULL COMMENT '採用担当者メールアドレス',
  `tantou_tel` varchar(256) DEFAULT NULL COMMENT '採用担当者電話番号',
  `uketsukezikan` text COMMENT '受付時間',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企業採用担当者';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_entry
CREATE TABLE IF NOT EXISTS `a_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `shiboudouki` text NOT NULL COMMENT '志望動機',
  `entry_datetime` datetime DEFAULT NULL COMMENT '応募日時',
  `entry_status` int(11) NOT NULL COMMENT '応募状況',
  `entry_status_update` datetime DEFAULT NULL COMMENT '応募状況更新日時',
  `admin_memo` text NOT NULL COMMENT '管理者用メモ（運営者用）',
  `company_memo` text NOT NULL COMMENT '管理者用メモ（企業用）',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='応募';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_favorite
CREATE TABLE IF NOT EXISTS `a_favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `type` int(11) NOT NULL COMMENT 'した/された',
  `flg_read` tinyint(4) NOT NULL COMMENT '既読フラグ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='気になる';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_member
CREATE TABLE IF NOT EXISTS `a_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_name_sei` varchar(255) NOT NULL COMMENT '会員名(姓)',
  `member_name_mei` varchar(255) NOT NULL COMMENT '会員名(名)',
  `last_login` datetime DEFAULT NULL COMMENT '最終ログイン日時',
  `email` varchar(255) NOT NULL COMMENT 'メールアドレス',
  `login_pw` varchar(255) NOT NULL COMMENT 'パスワード',
  `flg_facebook` tinyint(4) NOT NULL COMMENT 'Facebook連携フラグ',
  `facebook_id` varchar(255) NOT NULL COMMENT 'FacebookID',
  `mailmaga` tinyint(4) NOT NULL COMMENT 'メルマガ受信',
  `kana_sei` varchar(255) NOT NULL COMMENT 'フリガナ(姓)',
  `kana_mei` varchar(255) NOT NULL COMMENT 'フリガナ(名)',
  `birth_date` date DEFAULT NULL COMMENT '生年月日',
  `sex` tinyint(4) NOT NULL COMMENT '性別',
  `zip` varchar(255) NOT NULL COMMENT '郵便番号',
  `pref_id` int(11) NOT NULL COMMENT '都道府県ID',
  `city` varchar(255) NOT NULL COMMENT '住所',
  `tel` varchar(255) NOT NULL COMMENT '連絡先',
  `jyomu_check` tinyint(4) DEFAULT NULL COMMENT '乗務員履歴',
  `jyomu_nen` tinyint(4) DEFAULT NULL COMMENT '乗務年数',
  `gen_nensyu` int(11) NOT NULL COMMENT '現年収',
  `hope_pref_id1` int(11) NOT NULL COMMENT '希望勤務地１　都道府県ID',
  `hope_pref_id2` int(11) NOT NULL COMMENT '希望勤務地２　都道府県ID',
  `hope_pref_id3` int(11) unsigned NOT NULL COMMENT '希望勤務地３　都道府県ID',
  `pr` text NOT NULL COMMENT '自己PR',
  `admin_memo` text NOT NULL COMMENT '管理者用メモ',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会員';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_member_keireki
CREATE TABLE IF NOT EXISTS `a_member_keireki` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `company` varchar(255) NOT NULL COMMENT '会社名',
  `start_date` date NOT NULL COMMENT '開始年月',
  `end_date` date NOT NULL COMMENT '終了年月',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会員経歴';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_member_kodawari
CREATE TABLE IF NOT EXISTS `a_member_kodawari` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `kodawari_id` int(11) NOT NULL COMMENT 'こだわりID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会員 こだわり';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_member_shikaku
CREATE TABLE IF NOT EXISTS `a_member_shikaku` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `shikaku_id` int(11) NOT NULL COMMENT '保有資格ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会員 保有資格';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_member_syubetsu
CREATE TABLE IF NOT EXISTS `a_member_syubetsu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `syubetsu_id` int(11) NOT NULL COMMENT '種別ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会員 乗務種別';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_message
CREATE TABLE IF NOT EXISTS `a_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `member_id` int(11) NOT NULL COMMENT '会員ID',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `type` int(11) NOT NULL COMMENT '送受信種別',
  `flg_read` tinyint(4) NOT NULL COMMENT '既読フラグ',
  `subject` varchar(255) NOT NULL COMMENT '件名',
  `body` text NOT NULL COMMENT '本文',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='メッセージ';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_recruit
CREATE TABLE IF NOT EXISTS `a_recruit` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` int(11) NOT NULL COMMENT '企業ID',
  `company_sub_id` int(11) NOT NULL COMMENT '営業所・支店ID',
  `recruit_name` text NOT NULL COMMENT '求人タイトル',
  `sub_copy` text NOT NULL COMMENT 'サブコピー',
  `main_message` text NOT NULL COMMENT 'メインメッセージ',
  `message_title` text NOT NULL COMMENT '人事担当者メッセージタイトル',
  `message` text NOT NULL COMMENT '人事担当者メッセージ',
  `select_image` tinyint(4) NOT NULL COMMENT '人事担当者写真／動画 選択',
  `tantou_image` varchar(50) NOT NULL COMMENT '人事担当者写真／動画',
  `kinmutisyousai` text COMMENT '勤務地詳細',
  `koyou_id` int(11) NOT NULL COMMENT '雇用形態ID',
  `syokusyu_id` int(11) NOT NULL COMMENT '職種ID',
  `taisyou` text NOT NULL COMMENT '応募資格',
  `zinbutsuzou` text NOT NULL COMMENT '求める人物像',
  `gyoumunaiyou` text NOT NULL COMMENT '仕事内容',
  `tantousyaryou` text NOT NULL COMMENT '担当車両',
  `kinmuzikan` text NOT NULL COMMENT '勤務時間',
  `kyuuzitsu` text NOT NULL COMMENT '休日',
  `nensyuu_min` int(11) NOT NULL COMMENT '年収下限',
  `nensyuu_max` int(11) NOT NULL COMMENT '年収上限',
  `kyuuyosyousai` text NOT NULL COMMENT '給与詳細',
  `syouyo` text NOT NULL COMMENT '賞与',
  `taiguu` text NOT NULL COMMENT '待遇・福利厚生',
  `teinen` text NOT NULL COMMENT '定年・再雇用制度',
  `nyuusyakiboubi` text NOT NULL COMMENT '入社希望日',
  `shiyoukikan` text NOT NULL COMMENT '試用期間',
  `senkou` text NOT NULL COMMENT '選考の流れ・選考期間',
  `tantou_id` int(11) NOT NULL COMMENT '採用担当者ID',
  `flg_notice` tinyint(4) NOT NULL COMMENT '注目の求人フラグ',
  `admin_id` int(11) NOT NULL COMMENT '担当営業',
  `impression` text NOT NULL COMMENT '担当営業が受けた印象',
  `rewarding` text NOT NULL COMMENT '担当営業が感じたこの仕事のやりがい',
  `admin_memo` text NOT NULL COMMENT '管理者用メモ（運営者用）',
  `company_memo` text NOT NULL COMMENT '管理者用メモ（企業用）',
  `post_status` int(11) NOT NULL COMMENT '掲載状況',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='求人';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_recruit_image
CREATE TABLE IF NOT EXISTS `a_recruit_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `image` varchar(255) NOT NULL COMMENT '画像ファイル',
  `position` int(11) NOT NULL COMMENT '配置場所',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='求人 画像';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_recruit_kodawari
CREATE TABLE IF NOT EXISTS `a_recruit_kodawari` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` int(11) NOT NULL COMMENT '企業ID',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `kodawari_id` int(11) NOT NULL COMMENT 'こだわりID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='求人 こだわり';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.a_recruit_pref
CREATE TABLE IF NOT EXISTS `a_recruit_pref` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `company_id` int(11) NOT NULL COMMENT '企業ID',
  `recruit_id` int(11) NOT NULL COMMENT '求人ID',
  `pref_id` int(11) NOT NULL COMMENT '都道府県ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='求人 勤務地都道府県';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_admin
CREATE TABLE IF NOT EXISTS `m_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `admin_name` varchar(255) NOT NULL COMMENT '管理者名',
  `login_id` varchar(255) NOT NULL COMMENT 'ログインID',
  `login_pw` varchar(255) NOT NULL COMMENT 'ログインパスワード',
  `last_login` datetime DEFAULT NULL COMMENT '最終ログイン日時',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理者';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_area
CREATE TABLE IF NOT EXISTS `m_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) NOT NULL COMMENT '表示順',
  `area_name` varchar(255) NOT NULL COMMENT 'エリア名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='エリアマスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_city
CREATE TABLE IF NOT EXISTS `m_city` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) NOT NULL COMMENT '表示順',
  `pref_id` int(11) NOT NULL COMMENT '都道府県ID',
  `city_name` varchar(255) NOT NULL COMMENT '都道府県名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='市区町村マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_gyoutai
CREATE TABLE IF NOT EXISTS `m_gyoutai` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) NOT NULL COMMENT '表示順',
  `gyoutai_name` varchar(255) NOT NULL COMMENT '業態名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='業態マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_info
CREATE TABLE IF NOT EXISTS `m_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `info_datetime` datetime NOT NULL COMMENT 'お知らせ日時',
  `title` varchar(255) NOT NULL COMMENT 'タイトル',
  `text` text NOT NULL COMMENT '本文',
  `flg_member` tinyint(4) NOT NULL COMMENT '対象フラグ ユーザ',
  `flg_company` tinyint(4) NOT NULL COMMENT '対象フラグ 企業',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='お知らせ';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_kodawari
CREATE TABLE IF NOT EXISTS `m_kodawari` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) unsigned NOT NULL COMMENT '表示順',
  `kodawari_name` varchar(255) NOT NULL COMMENT 'こだわり名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='エリアマスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_koyou
CREATE TABLE IF NOT EXISTS `m_koyou` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) unsigned NOT NULL COMMENT '表示順',
  `koyou_name` varchar(255) NOT NULL COMMENT '雇用形態名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='雇用形態マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_mail_template
CREATE TABLE IF NOT EXISTS `m_mail_template` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) NOT NULL COMMENT '表示順',
  `mail_template_type` int(11) NOT NULL COMMENT 'メールテンプレート区分',
  `mail_template_name` varchar(255) NOT NULL COMMENT 'メールテンプレート名',
  `subject` varchar(255) NOT NULL COMMENT '件名',
  `body` text COMMENT '本文',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='メールテンプレート';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_master
CREATE TABLE IF NOT EXISTS `m_master` (
  `key` varchar(50) NOT NULL COMMENT 'ID',
  `entity` varchar(50) NOT NULL COMMENT 'モデルエンティティ',
  `table` varchar(50) NOT NULL COMMENT 'モデルテーブル',
  `name` varchar(50) NOT NULL COMMENT 'テーブル名称',
  `column1` varchar(50) NOT NULL COMMENT 'カラム1名',
  `column1_name` varchar(50) NOT NULL COMMENT 'カラム1名称',
  `column1_relay` varchar(50) DEFAULT NULL COMMENT 'カラム1リレーカラム',
  `column2` varchar(50) DEFAULT NULL COMMENT 'カラム2名',
  `column2_name` varchar(50) DEFAULT NULL COMMENT 'カラム2名称',
  `column2_relay` varchar(50) DEFAULT NULL COMMENT 'カラム2リレーカラム',
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='マスター管理用';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_pref
CREATE TABLE IF NOT EXISTS `m_pref` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) NOT NULL COMMENT '表示順',
  `area_id` int(11) NOT NULL COMMENT 'エリアID',
  `pref_name` varchar(255) NOT NULL COMMENT '都道府県名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='都道府県マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_qa
CREATE TABLE IF NOT EXISTS `m_qa` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) NOT NULL COMMENT '表示順',
  `qa_category_id` int(11) NOT NULL COMMENT 'Q&AカテゴリID',
  `title` varchar(255) NOT NULL COMMENT 'タイトル',
  `text` text NOT NULL COMMENT '本文',
  `status` tinyint(4) NOT NULL COMMENT 'ステータス',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Q&A';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_qa_category
CREATE TABLE IF NOT EXISTS `m_qa_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) unsigned NOT NULL COMMENT '表示順',
  `qa_category_name` varchar(255) NOT NULL COMMENT 'Q&Aカテゴリ名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='Q&Aカテゴリマスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_shikaku
CREATE TABLE IF NOT EXISTS `m_shikaku` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) unsigned NOT NULL COMMENT '表示順',
  `syubetsu_id` int(11) unsigned NOT NULL COMMENT '種別ID',
  `shikaku_name` varchar(255) NOT NULL COMMENT '保有資格名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='保有資格マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_syokusyu
CREATE TABLE IF NOT EXISTS `m_syokusyu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) unsigned NOT NULL COMMENT '表示順',
  `syokusyu_name` varchar(255) NOT NULL COMMENT '職種名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='職種マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.m_syubetsu
CREATE TABLE IF NOT EXISTS `m_syubetsu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime DEFAULT NULL COMMENT '更新日時',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日時',
  `position` int(11) unsigned NOT NULL COMMENT '表示順',
  `syubetsu_name` varchar(255) NOT NULL COMMENT '職種種別名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='乗務種別マスター';

-- エクスポートするデータが選択されていません


-- Dumping structure for テーブル dorapuro.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `data` text,
  `expires` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- エクスポートするデータが選択されていません
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
