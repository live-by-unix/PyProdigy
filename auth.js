export async function setupAuth() {

  const auth = document.getElementById("auth")

  await Clerk.load()

  if (Clerk.user) {

    auth.innerHTML = `
      <div class="pill">
        👤 ${Clerk.user.firstName || "Player"}
      </div>
    `

  } else {

    const button = document.createElement("button")

    button.textContent = "Sign In"

    button.onclick = async () => {

      await Clerk.openSignIn({
        appearance: {
          variables: {
            colorPrimary: "#2563eb"
          }
        }
      })

    }

    auth.appendChild(button)

  }

}
