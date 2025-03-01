import { relations } from "drizzle-orm";
import { notifications } from "../notifications";
import { users } from "../users";
import { roles } from "../roles";

/**
 * Relazioni della tabella notifiche
 */
export const notificationsRelations = relations(notifications, ({ one }) => ({
  // Una notifica può appartenere a un utente
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
  // Una notifica può essere destinata a un ruolo
  role: one(roles, {
    fields: [notifications.roleId],
    references: [roles.id],
  }),
}));
