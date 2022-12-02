import { Navbar } from "../components/Navbar";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";


export default function Login() {
  const router = useRouter()

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const passwd = e.target[1].value;

    await signIn('credentials', {
      redirect: false,
      email,
      passwd,
      callbackUrl: `${window.location.origin}`
    }).then(async e => {
      if (e.ok) {
        router.push('/')
      } else {
        console.log('errord')
      }
    })
  }
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <div className="row gy-4">
          <div className="col-sm-12 col-md-4 offset-md-4">
            <div className="card shadow-lg rounded-5">
              <div className="card-body">
                <h5 className="text-center display-5">Login</h5>
                <form onSubmit={handleSubmit}>
                  <input type="email" className="form-control form-control-lg mt-3 rounded-pill text-center" placeholder="email" required />
                  <input type="password" className="form-control form-control-lg mt-2 rounded-pill text-center" placeholder="senha" required />
                  <button type="submit" className="btn btn-lg btn-dark w-100 mt-2 rounded-pill">Entrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}