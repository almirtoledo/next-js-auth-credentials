import { Navbar } from "../components/Navbar";
import { signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data } = useSession()

  // handle sign out
  const handleSignOut = async () => {
    signOut()
  }
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row gy-3">
          <div className="col-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h6 className="display-6">Olá {data?.user.name}</h6>
                <p className="lead mb-0">Seu e-mail é {data?.user.email}</p>

                <button onClick={handleSignOut} type="button" className="btn btn-lg btn-dark mt-3">Terminar sessão</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}