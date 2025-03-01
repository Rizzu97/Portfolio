import { relations } from "drizzle-orm";
import { users } from "../users";
import { roles } from "../roles";
import { notifications } from "../notifications";

/**
 * Relazioni della tabella utenti
 */
export const usersRelations = relations(users, ({ one, many }) => ({
  // Un utente ha un ruolo
  role: one(roles, {
    fields: [users.roleId],
    references: [roles.id],
  }),
  // Un utente può avere molte notifiche
  notifications: many(notifications),
}));
