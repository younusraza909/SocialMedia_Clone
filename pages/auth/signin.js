import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../../components/Header"
function signIn({ providers }) {
    return (
        <>
            <Header />
            <div
                className='flex flex-col min-h-screen items-center
                py-2  px-14 text-center justify-center'
            >
                <img className='w-80' src="https://links.papareact.com/ocw" alt="" />
                <p className='font-xs italic'>
                    This is now a REAL app, it is built
                    for education purpose only
                </p>

                <div className='mt-40'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className='p-3 rounded-lg text-white bg-blue-500'
                                onClick={() => SignIntoProvider(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signIn
