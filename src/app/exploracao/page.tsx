import { redirect } from "next/navigation";

/** Mantido para tipagem/build; redirect canônico está em next.config. */
export default function ExploracaoPage() {
  redirect("/contato");
}
