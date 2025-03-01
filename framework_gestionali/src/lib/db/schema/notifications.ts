import {
  mysqlTable,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/mysql-core";
import { createId } from "@paralleldrive/cuid2";

/**
 * Tabella delle notifiche
 */
export const notifications = mysqlTable("notifications", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  title: varchar("title", { length: 255 }).notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  userId: varchar("user_id", { length: 128 }),
  roleId: varchar("role_id", { length: 128 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Tipi TypeScript derivati dagli schemi
export type Notification = typeof notifications.$inferSelect;
export type NewNotification = typeof notifications.$inferInsert;
