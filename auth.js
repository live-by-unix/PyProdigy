export async function setupAuth() {

  await Clerk.load()

  const auth = document.getElementById("auth")

  if (Clerk.user) {

    auth.innerHTML = `
      <div class="pill">
        👤 ${Clerk.user.firstName || "Player"}
      </div>
    `

  } else {

    const container = document.createElement("div")

    container.id = "clerk-auth"

    auth.appendChild(container)

    Clerk.mountSignIn(container)

  }

}
