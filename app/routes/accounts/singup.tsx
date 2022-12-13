import { Layout, InputGroup } from '~/components/accounts/layout'
import { InputGroupProps } from '~/components/accounts/layout'

const SingUpFields: InputGroupProps[] = [
    {
        span: "Nome",
        type: "text"
    },
    {
        span: "Apelido",
        type: "text"
    },
    {
        span: "Email",
        type: "email",
        placeHolder: "seuemail@mail.com"

    },
    {
        span: "Senha",
        type: "password"
    },
    {
        span: "Confirmar senha",
        type: "password"
    }
]

export default function SingUp() {
    return (
        <Layout>
            <div className="h-full px-auto justify-center items-center flex flex-col gap-4 ">
                <h2 className="text-300 font-extrabold text-5xl">SingUp Route</h2>
                <div className='mx-auto w-full max-w-md min-w-[200px] p-8 rounded border border-black'>
                    <form className='w-full grid gap-4 grid-cols-1 grid-rows-2'>
                        {SingUpFields.map((field) => (
                            <InputGroup span={field.span} type={field.type} placeHolder={field.placeHolder ?? ''} />
                        ))}
                        <button type='submit' className='mx-auto py-2 px-4 border rounded shadow-sm bg-green-600 text-white font-semibold' >Cadastrar</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}