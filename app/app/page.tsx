// app/app/page.tsx

export const metadata = {
  title: "App | LETSTOP",
  description: "Explore the LETSTOP app – your smart driving companion that rewards safe driving behavior.",
}

import AppClient from "./AppClient"

export default function AppPage() {
  return <AppClient />
}