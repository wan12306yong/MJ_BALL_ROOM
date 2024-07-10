SET FOREIGN_KEY_CHECKS=0;

ALTER TABLE `member_order_info` ADD COLUMN `deposit` decimal(10, 2) UNSIGNED NOT NULL DEFAULT 0.00 COMMENT '押金' AFTER `price`;

ALTER TABLE `member_pay_order` ADD COLUMN `pay_type` int NULL DEFAULT NULL COMMENT '支付类型' AFTER `store_id`;

ALTER TABLE `member_room_info` ADD COLUMN `deposit` decimal(10, 2) UNSIGNED NULL DEFAULT 0.00 COMMENT '押金' AFTER `price`;

SET FOREIGN_KEY_CHECKS=1;