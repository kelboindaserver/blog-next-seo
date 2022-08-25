import '../styles/global.css'
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({Component, pageProps}) {
    return(
        <Auth0Provider
            domain="dev-k32gu9l5.us.auth0.com"
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
            redirectUri={process.env.NEXT_PUBLIC_URL}
        >

        <div className="antialiased text-gray-900">
        <Header />
        <main className="my-6">
            <Component {... pageProps}/>
        </main>
        </div>
        </Auth0Provider>

    )
}
export default MyApp